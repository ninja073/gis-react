import React from "react";
const Login = () => {
  return (
    <div className="container forms" id="container">
      <div className="form sign-in">
        <form action="#">
          <div className="header">Sign In</div>
          <div className="social__media__container">
            <a href="#" className="social codepen">
              <i className="fa-brands fa-codepen"></i>
            </a>
            <a href="#" className="social google">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" className="social instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <span className="under__social">
            <a href="#" className="link signin-link">
              or use your email for registration
            </a>
          </span>

          <div className="button-input-group">
            <div className="group input-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="group input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="group input-group">
              <input
                type="password"
                placeholder="Password"
                required
                pattern=".{8,}"
              />
            </div>
            <div className="alert-text signup__alert">
              <span className="help__text">At least 8 character</span>
            </div>
            <div className="group button-group" id="signInDiv">
              {/* <button className="signup-btn">
                <span>Sign Up</span>
              </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
