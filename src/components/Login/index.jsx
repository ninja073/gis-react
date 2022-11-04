import React from "react";
const Login = () => {
  return (
    <div class="container forms" id="container">
      <div class="form sign-in">
        <form action="#">
          <div class="header">Sign In</div>
          <div class="social__media__container">
            <a href="#" class="social codepen">
              <i class="fa-brands fa-codepen"></i>
            </a>
            <a href="#" class="social google">
              <i class="fa-brands fa-google"></i>
            </a>
            <a href="#" class="social instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <span class="under__social">
            <a href="#" class="link signin-link">
              or use your email for registration
            </a>
          </span>

          <div class="button-input-group">
            <div class="group input-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div class="group input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div class="group input-group">
              <input
                type="password"
                placeholder="Password"
                required
                pattern=".{8,}"
              />
            </div>
            <div class="alert-text signup__alert">
              <span class="help__text">At least 8 character</span>
            </div>
            <div class="group button-group">
              <button class="signup-btn">
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
