import React, { useState,useEffect } from 'react';

import { NavLink, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import {userLogin} from "../../services/services";
import { validate } from "./validate/validate";

import styles from './Login.module.scss';
import MyCalendar from "../MyCalendar/MyCalendar";

const Login = () => {
  const [isAdmin,setIsAdmin] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const getUserToken = async (data) => {
    await userLogin(data)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem("USERID", response.data.userId);
          setIsAdmin(response.data.isAdmin)
          setIsLogin(true)

        })
        .catch((e) => {
          console.log(e.response.data.message)
        })
  }

  useEffect(() => {
    getUserToken()
  })


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      getUserToken(values)
      localStorage.setItem('ISAUTH', JSON.stringify(true));
      setIsLogin(true)
    },
  });
  if (isLogin) {
    return <Redirect to='/' />;
  }
  return (
    <>
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
      {isAdmin && <MyCalendar isAdmin={isAdmin}/>}
    </>
  );
};
export default Login;
