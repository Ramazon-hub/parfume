import "./collapsible.css";
import eye from "../../assets/imgs/eye.svg";
import useCollapse from "react-collapsed";
import React, { useRef, useState } from "react";
import uzb from "../../assets/imgs/uzb.png";
let password;
function stepClick(e) {
  const a = e.target.className.slice(5, 16);
  document.querySelector(`.${a}`).classList.toggle("active-step");
}
function validation(e) {
  const a = e.target.className.slice(12, 22);
  const value = e.target.value;
  value.length < 3
    ? (document.querySelector(
        `.${a}`
      ).style.cssText = `border:1px solid #AA0000`)
    : (document.querySelector(
        `.${a}`
      ).style.cssText = `border:1px solid #027C0E`);
}

export function Collapsible1({
  setId,
  setFirstName,
  setLastName,
  setThirdName,
}) {
  const [first_name, set_first_name] = useState();
  const [last_name, set_last_name] = useState();

  function getValue() {
    setId(idInput.current.value);
    setFirstName(firstNameInput.current.value);
    setLastName(lastNameInput.current.value);
    setThirdName(thirdNameInput.current.value);
  }
  let firstNameInput = useRef(),
    lastNameInput = useRef(),
    thirdNameInput = useRef(),
    idInput = useRef();
  function getSponsor() {
    let code = idInput.current.value;
    console.log(code);
    (async () => {
      const DATA = await fetch(`https://perfumeuz.herokuapp.com/v1/auth/code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const response = await DATA.json();
      if (response.data) {
        set_first_name(response.data.first_name);
        set_last_name(response.data.last_name);
      } else {
        set_first_name("");
        set_last_name("");
      }
    })();
  }
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible1">
      <div {...getToggleProps()}>
        <p className="step first-step" onClick={stepClick}>
          {isExpanded ? "1 qadam" : "1 qadam"}{" "}
        </p>
      </div>
      <div {...getCollapseProps()}>
        <div className="content1">
          <label htmlFor="sponsor" className="step-label">
            Sponsor ID
          </label>
          <div className="sponsor-div">
            <input
              ref={idInput}
              type="text"
              id="sponsor"
              className="step-inputs id"
              placeholder="ID raqamni kiriting"
              onChange={validation}
              onKeyUp={(getValue, getSponsor)}
            />
            <p className="sponsor-name">
              {`${first_name ? first_name : ""}  ${last_name ? last_name : ""}`}
            </p>
          </div>
          <label htmlFor="ism" className="step-label">
            Ismingiz
          </label>
          <input
            ref={firstNameInput}
            type="text"
            id="ism"
            className="step-inputs firstName"
            placeholder="Ismingizni kiriting"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="familya" className="step-label">
            Familyangiz
          </label>
          <input
            ref={lastNameInput}
            type="text"
            id="familya"
            className="step-inputs secondName"
            placeholder="Familiyangizni kiriting"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="otaism" className="step-label">
            Otangizning ismi
          </label>
          <input
            ref={thirdNameInput}
            type="text"
            id="otaism"
            className="step-inputs thirdName"
            placeholder="Otangizni ismini kiriting"
            onChange={validation}
            onKeyUp={getValue}
          />
        </div>
      </div>
    </div>
  );
}
export function Collapsible2({
  setEmail,
  setPasportIIB,
  setPasportSeria,
  setInn,
}) {
  let emailInput = useRef(),
    posportSeriaInput = useRef(),
    pasportIIBInput = useRef(),
    innInput = useRef();
  function getValue() {
    setEmail(emailInput.current.value);
    setPasportIIB(pasportIIBInput.current.value);
    setPasportSeria(posportSeriaInput.current.value);
    setInn(innInput.current.value);
  }
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible2">
      <div {...getToggleProps()}>
        <p className="step second-step" onClick={stepClick}>
          {isExpanded ? "2 qadam" : "2 qadam"}
        </p>
      </div>
      <div {...getCollapseProps()}>
        <div className="content2">
          <label htmlFor="email" className="step-label">
            Elektron adress
          </label>
          <input
            ref={emailInput}
            type="text"
            id="email"
            className="step-inputs email"
            placeholder="Elektron adresingizni kiriting"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="passport" className="step-label">
            Pasport seriya
          </label>
          <input
            ref={posportSeriaInput}
            type="text"
            id="passport"
            className="step-inputs seriya"
            placeholder="Seriyangizni kiriting"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="iib" className="step-label">
            Pasport kim tomonidan berilgan ..
          </label>
          <input
            ref={pasportIIBInput}
            type="text"
            id="iib"
            className="step-inputs iib"
            placeholder="Toshkent shahar, Yashnobod tuman IIB"
            onChange={validation}
            onKeyUp={getValue}
          />
          <label htmlFor="inn" className="step-label">
            INN
          </label>
          <input
            ref={innInput}
            type="text"
            id="inn"
            className="step-inputs inn"
            placeholder="INNni kiriting"
            onChange={validation}
            onKeyUp={getValue}
          />
        </div>
      </div>
    </div>
  );
}

let checked = false;
export function Collabsible3({
  setPhone,
  setPassword,
  setConPassword,
  setAgree,
}) {
  function check() {
    checked ? (checked = false) : (checked = true);
    checked
      ? (document.querySelector(".custom-check").style.cssText = `opacity:1;`)
      : (document.querySelector(".custom-check").style.cssText = `opacity:0;`);
    checked
      ? (document.querySelector(
          ".from-submit"
        ).style.cssText = `background:#810202`)
      : (document.querySelector(
          ".from-submit"
        ).style.cssText = `background:#D3D3D3`);

    setAgree(checked);
  }
  let passwordInput = useRef(),
    repasswordInput = useRef(),
    phoneInput = useRef();
  function getValue() {
    setPhone(phoneInput.current.value);
  }
  function validationPassword(e) {
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        passwordInput.current.value
      )
    ) {
      password = passwordInput.current.value;
      document.querySelector(".validate-password").style.cssText = `opacity:0;`;
    } else {
      document.querySelector(".validate-password").style.cssText = `opacity:1;`;
    }
  }
  function confirmPassword() {
    if (repasswordInput.current.value === password) {
      document.querySelector(".confirm-password").style.cssText = `opacity:0;`;
      setPassword(repasswordInput.current.value);
      setConPassword(repasswordInput.current.value);
    } else {
      document.querySelector(".confirm-password").style.cssText = `opacity:1;`;
    }
  }
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  let type = "password",
    retype = "password";

  function eyeClick() {
    type === "password" ? (type = "text") : (type = "password");
    const obj = document.querySelector(".password-input");
    obj.type = type;
  }
  function reeyeClick() {
    retype === "password" ? (retype = "text") : (retype = "password");
    const obj = document.querySelector(".repassword-input");
    obj.type = retype;
  }
  return (
    <div className="collapsible3">
      <div {...getToggleProps("")}>
        <p className="step third-step" onClick={stepClick}>
          {isExpanded ? "3 qadam" : "3 qadam"}
        </p>
      </div>
      <div {...getCollapseProps()}>
        <div className="content3">
          <label htmlFor="phone" className="step-label">
            Telefon raqamingiz
          </label>
          <div className="phone-box">
            <input
              ref={phoneInput}
              type="number"
              id="phone"
              className="step-inputs"
              placeholder="+-- -- --- -- --"
              required
              onKeyUp={getValue}
            />
            <div className="custom-select">
              <div className="custom-option">
                <img src={uzb} width={30} height={30} alt="img" />
              </div>
            </div>
          </div>
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
              onChange={validationPassword}
            />
            <span className="validate-password">
              Parol harf,raqam va simvollardan iborat kamida 8 ta belgi bo'lsin.
            </span>
          </div>
          <div className="repassword">
            <img src={eye} className="eye" onClick={reeyeClick} alt="img" />
            <label htmlFor="re-password" className="step-label">
              Parolni takrorlang
            </label>
            <input
              ref={repasswordInput}
              type={retype}
              id="re-password"
              className="step-inputs repassword-input"
              placeholder=""
              onChange={confirmPassword}
            />
            <span className="confirm-password">
              Parol mos kelmadi,yaxshilab ko'zdan kechiring !
            </span>
          </div>
          <div className="custom-checkbox">
            <div className="custom-check"></div>
          </div>
          <p htmlFor="" className=" custom-checked" onClick={check}>
            Shartnoma shartlarini qabul qilaman
          </p>
        </div>
      </div>
    </div>
  );
}
