import React, { useState,useEffect } from 'react';

import { NavLink, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { validate } from "./validate/validate";

import styles from './Login.module.scss';

const Login = () => {

  const [isLogin, setIsLogin] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
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
    </>
  );
};
export default Login;
