import "./login.css";
import { Link } from "react-router-dom";
import { Perfume } from "../../components/Perfume/perfume";
import eye from "../../assets/imgs/eye.svg";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import { toast } from "react-toastify";
export function Login() {
  const [setToken] = useAuth(true);
  const history = useHistory();
  let emailInput = useRef(),
    passwordInput = useRef();
  let type = "password";
  function eyeClick() {
    type === "password" ? (type = "text") : (type = "password");
    const obj = document.querySelector(".password-input");
    obj.type = type;
  }
  function submitLogin(e) {
    e.preventDefault();
    const data = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    (async () => {
      const DATA = await fetch(
        `https://perfumeuz.herokuapp.com/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const response = (await DATA.json()).data;
      if (!response) {
        toast.error("Email yoki parol xato,Iltimos qaytadanurinib ko'ring");
        return setToken(false);
      }
      toast.success("Muvaffaqiyatli kirish !");
      setToken(response.token);
      history.push("/");
    })();
  }
  return (
    <>
      <div className="register-hero">
        <div className="container">
          <h1 className="hero-title">Login</h1>
        </div>
      </div>
      <div className="register-form">
        <div className="container">
          <form onSubmit={submitLogin}>
            <h2 className="form-title">Login</h2>
            <label htmlFor="email" className="step-label">
              Email
            </label>
            <input
              ref={emailInput}
              type="text"
              id="email"
              className="step-inputs"
              placeholder="Emailingizni kiriting"
            />
            <div className="password">
              <img src={eye} className="eye" onClick={eyeClick} alt="img" />
              <label htmlFor="password" className="step-label ">
                Parol{" "}
              </label>
              <input
                ref={passwordInput}
                type={type}
                id="password"
                className="step-inputs password-input"
                placeholder="Prolni kiriting"
              />
              <p className=" support ">
                Parolni <Link to="/register ">Unutdingizmi?</Link>
              </p>
            </div>
            <button className="from-submit login-submit">Kirish</button>
          </form>
          <Perfume />
        </div>
        <p className=" support to-register">
          Akkauntingiz mavjud emasmi? <Link to="/register">Registratsiya</Link>
        </p>
      </div>
    </>
  );
}
