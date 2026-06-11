import { useState } from "react";
import { Button } from "../../components/button";
import styles from "./index.module.css";
import { AiFillBulb } from "react-icons/ai";
import { validateEmail } from "../../validation/validation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <>
      <div className={styles["container-fluid"]}>
        <div className="row">
          <div className="offset-4 col-4">
            <div className={styles["loginbox"]}>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <div className={styles["Signin"]}>
                    <span className={styles["highlight"]}>Si</span>gn in
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <div id="errorContainer"></div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12">
                  <div className={styles["form-group"]}>
                    <label htmlFor={styles["signIn"]}>Email address</label>
                    <br />
                    <input
                      className={styles["inputsignin"]}
                      type="text"
                      id="signIn"
                      placeholder="Example@mail.com"
                      value={email}
                      onChange={(e) => {
                        const value = e.target.value;

                        setEmail(value);
                        setEmailError(validateEmail(value));
                      }}
                    />
                    {emailError && (
                      <p className={styles["errorText"]}>{emailError}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12">
                  <div className={styles["form-group"]}>
                    <label htmlFor={styles["Password"]}>Password</label>
                    <br />
                    <input
                      className={styles["inputsignin"]}
                      type="password"
                      id="password"
                      placeholder="Enter your password "
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    className={styles["buttonsignin"]}
                    id="login"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
