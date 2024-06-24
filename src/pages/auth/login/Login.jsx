import * as React from "react";
// import GoogleLogin from "react-google-login";
import * as Yup from "yup";
import Header from "../../../components/user/header/Header";
import "./login.css";
import { useRef } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, userLogin } from "../../../redux/slice/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectLoggedInUser);
  console.log('user', user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("*invalid email address")
        .required("*field is required"),
      password: Yup.string().required("*field is required"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values) => {
    const respone = await dispatch(userLogin(values));
    if (respone.payload.status === 200) {
      navigate('/home')
    }
  };

  return (
    <>
      {user ? <Navigate to='/home'></Navigate> : <><div>
        <Header />
      </div>
        <main className="bannerDiv">
          <div className="flexBox">
            <div className="loginBox">
              <div className="loginContents">Log in</div>
              <form onSubmit={formik.handleSubmit}>
                <div className="fieldDiv">
                  <label for="email" className="labels">
                    Email address
                  </label>
                  <input
                    className="inputFields"
                    type="email"
                    id="email"
                    ref={email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className='errors'>{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="fieldDiv">
                  <label for="password" className="labels">
                    Password
                  </label>
                  <input
                    className="inputFields"
                    type="password"
                    id="password"
                    ref={password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className='errors'>{formik.errors.password}</div>
                  ) : null}
                </div>
                <br />
                <br />
                <div className="fieldDiv" id="submitBtn">
                  <input className="submitBtn" type="submit" value="Log in" />
                </div>
              </form>
              <br />
              <br />
              <div className="passResetDiv">
                <a className="passReset">Forgot your password?</a>
              </div>
              <br />
              <div className="divider">
                <hr />
                <label>or</label>
                <hr />
              </div>
              <br />
              <div className="googleBtn">
                {/* <GoogleLogin
                clientId="YOUR_CLIENT_ID"
                buttonText="Sign in with Google"
                // onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              /> */}
              </div>
            </div>
          </div>
        </main></>}

    </>
  );
}

export default Login;
