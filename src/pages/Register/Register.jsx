import "./Register.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import { toast } from "react-toastify";
import {
  Collabsible3,
  Collapsible1,
  Collapsible2,
} from "../../components/collapsible/collapsible";

import { Perfume } from "../../components/Perfume/perfume";
import { useHistory } from "react-router-dom";

const Register = () => {
  let [setToken] = useAuth(true);
  const history = useHistory();
  let [id, setId] = useState(""),
    [firstName, setFirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    [thirdName, setThirdName] = useState(""),
    [email, setEmail] = useState(""),
    [pasportIIB, setPasportIIB] = useState(""),
    [pasportSeria, setPasportSeria] = useState(""),
    [inn, setInn] = useState(""),
    [phone, setPhone] = useState(""),
    [password, setPassword] = useState(""),
    [conPassword, setConPassword] = useState(""),
    [agree, setAgree] = useState(false);
  function submitForm(e) {
    e.preventDefault();
    if (!agree)
      return toast.warning("Shartnoma shartlariga rozilik vildiring !");
    if (
      id.length <= 2 ||
      firstName.length <= 2 ||
      lastName.length <= 2 ||
      thirdName.length <= 2 ||
      !email ||
      pasportIIB.length <= 2 ||
      pasportSeria.length <= 2 ||
      inn.length <= 2 ||
      !phone ||
      !password
    )
      return toast.error("Malumotlarni to'g'ri to'ldiring");

    const data = {
      id,
      firstName,
      lastName,
      thirdName,
      email,
      pasportIIB,
      pasportSeria,
      inn,
      phone,
      password,
      conPassword,
    };
    (async () => {
      const DATA = await fetch(
        `https://perfumeuz.herokuapp.com/v1/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const response = await DATA.json();
      if (!response.data) {
        toast.error(response.message);
        return setToken(false);
      }
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz !");

      setToken(response.data.token);
      history.push("/");
    })();
  }
  return (
    <div>
      <div className="register-hero">
        <div className="container">
          <h1 className="hero-title">Registratsiya</h1>
        </div>
      </div>
      <div className="register-form">
        <div className="container">
          <form>
            <h2 className="form-title">Ma'lumotlaringizni kiriting</h2>
            <Collapsible1
              setId={setId}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setThirdName={setThirdName}
            />
            <Collapsible2
              setEmail={setEmail}
              setPasportIIB={setPasportIIB}
              setPasportSeria={setPasportSeria}
              setInn={setInn}
            />
            <Collabsible3
              setPhone={setPhone}
              setPassword={setPassword}
              setConPassword={setConPassword}
              setAgree={setAgree}
            />
            <button className="from-submit" type="submit" onClick={submitForm}>
              Ragistratsiyadan o’tish
            </button>
          </form>
          <Perfume />
        </div>
      </div>
      <p className="choice">
        Agar ro’yxatdan o’tgan bo’lsangiz{" "}
        <Link to="/login" className="link-login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
