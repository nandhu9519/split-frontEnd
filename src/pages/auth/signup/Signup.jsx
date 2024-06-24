import React, { useCallback, useState } from 'react'
import logo from '../../../assets/logo.svg';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser, selectError } from '../../../redux/slice/authSlice';
import './signup.css';
import Error from '../../../components/common/Error';
require('dotenv').config();

const Signup = () => {

  const [errorMsg, setErrorMsg] = useState({ active: false, message: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, '*Must be 4 characters or more')
        .required('*Required'),
      password: Yup.string()
        .min(5, '*Must be 5 characters or more')
        .required('*Required'),
      email: Yup.string().email('*Invalid email address').required('*Required'),
    }),
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    const response = await dispatch(createUser(values))

    if (response.payload.status === 409) {
      setErrorMsg({ message: response.payload.data.error, active: true })
    } else {
      navigate('/login');
    }
  };

  const closeHandler = () => {
    setErrorMsg({ ...errorMsg, active: false })
  }

  return (
    <>
      <div className='container'>
        <div className='icon'>
          <img src={logo} />
        </div>
        <div className='signupForm'>
          <form onSubmit={formik.handleSubmit}>
            <h2 className='intro'>INTRODUCE YOURSELF</h2>
            <div>
              <p className='nameText'>Hi there! My name is</p>
              <input id='username' type=' text' className='formField' onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className='errors'>{formik.errors.username}</div>
              ) : null}
            </div>
            <div>
              <p>Here is my <strong>email address:</strong></p>
              <input id='email' type='email' className='formField' onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />
              {formik.touched.email && formik.errors.email ? (
                <div className='errors'>{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <p>And here'my <strong>password:</strong></p>
              <input type='password' id='password' className='formField' onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password} />
              {formik.touched.password && formik.errors.password ? (
                <div className='errors'>{formik.errors.password}</div>
              ) : null}
            </div>
            <br />
            {errorMsg.active && <Error message={errorMsg.message} closeError={closeHandler} />}
            <div>
              <input type='submit' id='submit' value='Sign me up!' />
            </div>
            <div className='terms'>
              <a href='' className='terms'>By signing up you accept the Splitwise Terms of Service.</a>
            </div>
          </form>
        </div >
      </div >
    </>
  )
}

export default Signup