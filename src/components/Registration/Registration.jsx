import React, {useState} from "react";

import {NavLink, Redirect} from "react-router-dom";
import {useFormik} from "formik";

import styles from "./Registration.module.scss";
import {userRegistration} from "../../services/services";
import {validate} from "../../validate/validate";

const Registration = ({isAuth,setIsAuth}) => {
    const [isReg, setIsReg] = useState(false);

    const checkToken = (data) => {
      userRegistration(data)
        .then((response) => {
            setIsReg(true)
            console.log(response)
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const formik = useFormik({
        initialValues: {
            id: Date.now().toString(),
            email: "",
            password: "",
            repeatPassword: "",

        },
        validate,
        onSubmit: (values) => {
            const newUser = {
                id: Date.now().toString(),
                email: values.email,
                password: values.password,
                repeatPassword: values.repeatPassword,
            };
            setIsReg(true);
            // checkToken(newUser);

            localStorage.setItem("ISAUTH", JSON.stringify(true));
            localStorage.setItem("USERS", JSON.stringify(newUser));
            localStorage.setItem("USERID", newUser.id);
        },
    });

    return (
        <>
            {isReg && <Redirect to="/login"/>}
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.modalBox}>
                        <h1>Create an account</h1>
                        <form className={styles.formContainer}>
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
