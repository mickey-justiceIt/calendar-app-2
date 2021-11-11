import React, { useState } from "react";

import { NavLink, Redirect } from "react-router-dom";
import { useFormik } from "formik";

import styles from "./Registration.module.scss";
import { userRegistration } from "../../services/services";
import {validate} from "../../validate/validate";
const Registration = () => {
  const [isReg, setIsReg] = useState(false);
  const checkToken = (data) => {
    userRegistration(data)
      .then((response) => {
          setIsReg(true)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const formik = useFormik({
    initialValues: {
      id: Date.now().toString(),
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      company: "",
    },
    // validate,
    onSubmit: (values) => {
      const newUser = {
        id: Date.now().toString(),
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        repeatPassword: values.repeatPassword,
        company: values.company,
      };
      setIsReg(true);
      checkToken(newUser);
      localStorage.setItem("ISAUTH", JSON.stringify(true));
      localStorage.setItem("USERS", JSON.stringify(newUser));
      localStorage.setItem("USERID", newUser.id);
      console.log(newUser)

    },
  });
  if (isReg) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.modalBox}>
            <h1>Create an account</h1>
            <form className={styles.formContainer}>
              <div className={styles.formColumn}>
                <div className={styles.inputBlock}>
                  <label htmlFor="firstName" className={styles.formItem}>
                    First name
                    <input
                      id="firstName"
                      name="firstName"
                      className={styles.formInput}
                      placeholder={"First name"}
                      type="text"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                  </label>
                  {formik.errors.firstName ? (
                    <div className={styles.errors}>
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="lastName" className={styles.formItem}>
                    Last name
                    <input
                      id="lastName"
                      name="lastName"
                      className={styles.formInput}
                      placeholder="Last name"
                      type="text"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                  </label>
                  {formik.errors.lastName ? (
                    <div className={styles.errors}>
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="company" className={styles.formItem}>
                  Company name
                  <input
                    id="company"
                    name="company"
                    className={styles.formInput}
                    placeholder="Company Name"
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.company}
                  />
                </label>
                {formik.errors.company ? (
                  <div className={styles.errors}>{formik.errors.company}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="email" className={styles.formItem}>
                  Email
                  <input
                    id="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="Email"
                    type="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </label>
                {formik.errors.email ? (
                  <div className={styles.errors}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="password" className={styles.formItem}>
                  Enter Password
                  <input
                    id="password"
                    name="password"
                    className={styles.formInput}
                    placeholder="Password"
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </label>
                {formik.errors.password ? (
                  <div className={styles.errors}>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="repeatPassword" className={styles.formItem}>
                  Repeat Password
                  <input
                    id="repeatPassword"
                    name="repeatPassword"
                    className={styles.formInput}
                    placeholder="Repeat password"
                    type="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.repeatPassword}
                  />
                </label>
                {formik.errors.password ? (
                  <div className={styles.errors}>{formik.errors.password}</div>
                ) : null}
              </div>
              <button onClick={formik.handleSubmit} className={styles.formBtn}>
                Create an account
              </button>
            </form>
            <div className={styles.formLink}>
              <span>Already have an account?</span>
              <span>
                <NavLink to={"/login"}>Log in</NavLink>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.heroWrapper}></div>
      </div>
    </>
  );
};

export default Registration;
