import React, { useState,useEffect } from 'react';

import { NavLink, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import {userLogin} from "../../services/services";
import { validate } from "./validate/validate";

import styles from './Login.module.scss';
import MyCalendar from "../MyCalendar/MyCalendar";

const Login = ({isAuth,setIsAuth}) => {
  const [isAdmin,setIsAdmin] = useState(JSON.parse(localStorage.getItem("ISADMIN"),[]))

  const getUserToken = async (data) => {
    await userLogin(data)
        .then((response) => {
          setIsAdmin(JSON.stringify(localStorage.setItem("ISADMIN",response.data.isAdmin)))
          setIsAuth(JSON.stringify(localStorage.setItem("ISAUTH", true)))
        })
        .catch((e) => {
          console.log(e.response.data.message)
        })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      getUserToken(values)
    },
  });

  return (
    <>
      {isAuth && <Redirect to='/' />}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.modalBox}>
            <h1>Sign in</h1>
            <form className={styles.modalForm}>
              <label htmlFor='email' className={styles.formItem}>
                Email
              </label>
              <input
                id='email'
                name='email'
                className={styles.formInput}
                placeholder='Email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              />
              {formik.errors.email ? (
                <div className={styles.errors}>
                  {formik.errors.email}
                </div>
              ) : null}
              <label htmlFor='password' className={styles.formItem}>
                Password
              </label>
              <input
                id='password'
                name='password'
                className={styles.formInput}
                placeholder='Enter password'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                required
              />
              {formik.errors.password ? (
                <div className={styles.errors}>
                  {formik.errors.password}
                </div>
              ) : null}
              <button onClick={formik.handleSubmit} className={styles.formBtn}>
                Sign in
              </button>
            </form>
            <NavLink to={'registration'}>
              <p>Forgot a password</p>
            </NavLink>
          </div>
        </div>
        <div className={styles.heroWrapper}></div>
      </div>
    </>
  );
};
export default Login;
