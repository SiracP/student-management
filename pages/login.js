/*TODO
REFACTOR BUTTON STYLE
CUSTOMINPUTTEXT
CLEAN CODE*/

import loginStyles from "../styles/Login.module.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignIn,
  faIdBadge,
  faLock,
  faPlusCircle,
  faKey,
  faPaperPlane,
  faCalendar,
  faMarsAndVenus,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@mui/material/Button";
export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const idBadgeElement = <FontAwesomeIcon icon={faIdBadge} className={`mx-auto faIdBadge`} />;
  const lockElement = <FontAwesomeIcon icon={faLock} className={`mx-auto faLock`} />;
  const signElement = (
    <FontAwesomeIcon icon={faSignIn} className={`mx-auto faSignIn`}
    />
  );
  const registerElement = (
    <FontAwesomeIcon icon={faPlusCircle} className={`faPlusCircle mx-auto`}
    />

  );
  const forgotPasswordElement = (
    <FontAwesomeIcon
      icon={faKey}
      className={`${loginStyles.forgot2} ${loginStyles.faKey2} mx-auto`}
    >
      &nbsp;
    </FontAwesomeIcon>
  );
  const nameSurnameElement = (
    <FontAwesomeIcon
      icon={faFont}
      className={`mx-auto`}

    >
      &nbsp;
    </FontAwesomeIcon>
  );
  const bdayElement = (
    <FontAwesomeIcon
      icon={faCalendar}
      className={`mx-auto`}

    >
      &nbsp;
    </FontAwesomeIcon>
  );
  const passElement = (
    <FontAwesomeIcon
      icon={faLock}
      className={`mx-auto`}

    >
      &nbsp;
    </FontAwesomeIcon>
  );
  const genderElement = (
    <FontAwesomeIcon
      icon={faMarsAndVenus}
      className={`mx-auto`}

    >
      &nbsp;
    </FontAwesomeIcon>
  );

  const sendElement = (
    <FontAwesomeIcon icon={faPaperPlane}
      className={`faPaperPlane mx-auto`}
    />
  );
  function createDate() {
    var date = new Date();
    date.setDate(31);
    date.setMonth(11);
    date.setFullYear(date.getFullYear() - 15);
    return date;
  }
  return (
    <div className={loginStyles.body}>
      <div className={`container ${loginStyles.containerText}`}>
        <div className="row" style={{ minHeight: "100vh" }}>
          <div
            className="col-md-7 col-lg-5 col-10 mx-auto my-auto"
            style={{ position: "relative", top: "-50px" }}
          >
            <img
              className={loginStyles.loginLogo}
              src="/login/iuclogo.png"
              alt="Logo"
            ></img>
            <div className={loginStyles.loginArea}>
              <form>
                <div
                  className={`input-group mb-3 mt-5 ${loginStyles.inputGroup}`}
                >
                  <div id="tcp" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                    <span
                      className={`input-group-text h-100 ${loginStyles.inputGroupText}`}
                      id="basic-addon1"
                    >
                      {idBadgeElement}
                    </span>
                  </div>
                  <input
                    type="text"
                    maxLength="11"
                    id="tc"
                    className={`form-control ${loginStyles.formControl}`}
                    placeholder="T.C. Kimlik Numarası"
                    style={{ border: "none" }}
                    aria-describedby="basic-addon1"
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        "Lütfen T.C. Kimlik Numaranızı doldurunuz."
                      )
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div
                  className={`input-group mb-3 mt-4 ${loginStyles.inputGroup}`}
                >
                  <div id="passwordp" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                    <span
                      className={`input-group-text h-100 ${loginStyles.inputGroupText}`}
                      id="basic-addon2"
                    >
                      {lockElement}
                    </span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${loginStyles.formControl}`}
                    placeholder="Şifre"
                    aria-describedby="basic-addon2"
                    style={{ border: "none" }}
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Lütfen şifrenizi doldurunuz.")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <label className={`switch ${loginStyles.switch}`}>
                    <input type="checkbox" />
                    <span
                      className={`slider round ${loginStyles.slider} ${loginStyles.round}`}
                    ></span>
                  </label>
                  <span style={{ verticalAlign: "bottom", color: "#232323" }}>
                    &nbsp;Beni Hatırla
                  </span>
                </div>
                <div
                  className="mt-3 mb-3"
                  style={{ overflow: "hidden", paddingTop: "10px" }}
                >
                  <button
                    id="btn1"
                    type="submit"
                    className={`button mt-3 mb-3 ${loginStyles.button}`}
                    style={{ marginLeft: "12px", float: "left", width: "43%" }}
                  >
                    {signElement}
                    &nbsp; Giriş Yap
                  </button>

                  <button
                    id="btn2"
                    type="submit"
                    onClick={handleShow2}
                    className={`button mt-3 mb-3 ${loginStyles.button}`}
                    style={{
                      marginRight: "12px",
                      float: "right",
                      width: "43%",
                    }}
                  >
                    {registerElement}
                    &nbsp; Kayıt Ol
                  </button>
                </div>
                <div style={{ textAlign: "center" }}>
                  <a
                    className={loginStyles.forgot}
                    onClick={handleShow}
                    style={{ color: "#232323" }}
                    href="#tcf"
                  >
                    {forgotPasswordElement}
                    &nbsp;Şifremi Unuttum
                  </a>
                </div>
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Şifremi Unuttum</Modal.Title>
                  </Modal.Header>
                  <form>
                    <Modal.Body>
                      <div className={`input-group ${loginStyles.inputGroup}`}>
                        <div id="tcp" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                          <span
                            className={`input-group-text ${loginStyles.inputGroupText} h-100`}
                            id="basic-addon1"
                            style={{
                              background: "#D5AA41",
                              borderColor: "#D5AA41",
                            }}
                          >
                            {idBadgeElement}
                          </span>
                        </div>
                        <input
                          type="text"
                          minLength="11"
                          maxLength="11"
                          id="tcf"
                          className={`form-control ${loginStyles.formControl}`}
                          placeholder="T.C. Kimlik Numarası"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        id={loginStyles.btn3}
                        type="submit"
                        className={`button w-100 ${loginStyles.button}`}
                        style={{
                          marginRight: "12px",
                          float: "right",
                          width: "43%",
                        }}
                      >
                        {sendElement}
                        &nbsp; Gönder
                      </button>
                    </Modal.Footer>
                  </form>
                </Modal>
                <Modal show={show2} onHide={handleClose2} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Kayıt Ol</Modal.Title>
                  </Modal.Header>
                  <form>
                    <Modal.Body>
                      <div className={`input-group mb-3 ${loginStyles.inputGroup}`}>
                        <div id="tcp" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                          <span
                            className={`input-group-text ${loginStyles.inputGroupText} h-100`}
                            id="basic-addon1"
                            style={{
                              background: "#D5AA41",
                              borderColor: "#D5AA41",
                            }}
                          >
                            {idBadgeElement}
                          </span>
                        </div>
                        <input
                          type="text"
                          minLength="11"
                          maxLength="11"
                          id="tcf2"
                          className={`form-control ${loginStyles.formControl}`}
                          placeholder="T.C. Kimlik Numarası"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>

                      <div className={`input-group mb-3 ${loginStyles.inputGroup}`}>
                        <div id="adp" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                          <span
                            className={`input-group-text ${loginStyles.inputGroupText} h-100`}
                            id="basic-addon1"
                            style={{
                              background: "#D5AA41",
                              borderColor: "#D5AA41",
                            }}
                          >
                            {nameSurnameElement}
                          </span>
                        </div>
                        <input
                          type="text"
                          id="ad"
                          className={`form-control ${loginStyles.formControl}`}
                          placeholder="Ad"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                      <div className={`input-group mb-3 ${loginStyles.inputGroup}`}>
                        <div id="soyadp" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                          <span
                            className={`input-group-text ${loginStyles.inputGroupText} h-100`}
                            id="basic-addon1"
                            style={{
                              background: "#D5AA41",
                              borderColor: "#D5AA41",
                            }}
                          >
                            {nameSurnameElement}
                          </span>
                        </div>
                        <input
                          type="text"
                          id="soyad"
                          className={`form-control ${loginStyles.formControl}`}
                          placeholder="Soyad"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>

                      <div className={`input-group mb-3 ${loginStyles.inputGroup}`}>
                        <div id="dgp" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                          <span
                            className={`input-group-text ${loginStyles.inputGroupText} h-100`}
                            id="basic-addon1"
                            style={{
                              background: "#D5AA41",
                              borderColor: "#D5AA41",
                            }}
                          >
                            {bdayElement}
                          </span>
                        </div>
                        <input
                          type="date"
                          max={createDate().toISOString().split('T')[0]}
                          id="dt"
                          className={`form-control ${loginStyles.formControl}`}
                          placeholder="Doğum Tarihi"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                      <div className={`input-group mb-3 ${loginStyles.inputGroup}`}>
                        <div id="cinsiyetp" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                          <span
                            className={`input-group-text ${loginStyles.inputGroupText} h-100`}
                            id="basic-addon1"
                            style={{
                              background: "#D5AA41",
                              borderColor: "#D5AA41",
                            }}
                          >
                            {genderElement}
                          </span>
                        </div>
                        <select id="cinsiyet" class="form-select" required>
                          <option selected>Cinsiyet</option>
                          <option value="m">Erkek</option>
                          <option value="f">Kadın</option>
                          <option value="ng">Belirtmek istemiyorum</option>
                        </select>
                      </div>

                      <div className={`input-group mb-3 ${loginStyles.inputGroup}`}>
                        <div id="sifre" className={`input-group-prepend my-auto mx-auto ${loginStyles.inputGroupPrepend}`}>
                          <span
                            className={`input-group-text ${loginStyles.inputGroupText} h-100`}
                            id="basic-addon1"
                            style={{
                              background: "#D5AA41",
                              borderColor: "#D5AA41",
                            }}
                          >
                            {passElement}
                          </span>
                        </div>
                        <input
                          type="password"
                          minLength="11"
                          maxLength="11"
                          id="tcf2"
                          className={`form-control ${loginStyles.formControl}`}
                          placeholder="Şifre"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>


                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        id={loginStyles.btn3}
                        type="submit"
                        className={`button w-100 ${loginStyles.button}`}
                        style={{
                          marginRight: "12px",
                          float: "right",
                          width: "43%",
                        }}
                      >
                        {sendElement}
                        &nbsp; Gönder
                      </button>
                    </Modal.Footer>
                  </form>
                </Modal>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
