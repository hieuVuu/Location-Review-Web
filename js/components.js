const components = {}
components.welcomeSceen = `
<div class="container">
<div class="header-container">
       <div class="title">Unique Location</div>
       <div class="icon-user cursor-all"">
              <div class="dropdown">
                     <i class="fas fa-user-circle"></i>
                     <div class="dropdown-content">
                            <p>Profile</p>
                            <p id="sign-out">Sign Out</p>
                     </div>
              </div>
       </div>
</div>
<div class="main-page">
       <div class="aside-left">
              <div class="left-title">Show the world you care</div>
              <div class="filter">
                     <button class="btn-main cursor-all">Coffe</button>
                     <button class="btn-main cursor-all"">Entertainment</button>
                     <button class="btn-main cursor-all"">Travel</button>
                     <button class="btn-main cursor-all"">Student</button>
                     <button class="btn-main cursor-all"">Animals</button>
              </div>
       </div>
       <div class="location">
              <div class="list-title">Some where you need</div>
              <div class="list-location">
                     
              </div>
       </div>
</div>
</div>
`
components.registerScreen = `
<div class="register-container">
<<<<<<< HEAD
    <div class="bg-img">
      <img src="./images/undraw_review_fkgn.svg">
    </div>
    <div class="form-wrapper">
      <div class="register-header">
        <img src="./images/undraw_female_avatar_w3jk.svg" alt="">
      </div>
      <form id="register-form">
        <div class="name-wrapper">
          <div class="input-wrapper">
            <input type="text" placeholder="First name" name="firstName">
            <div id="first-name-error" class="err"></div>
          </div>
          <div class="input-wrapper">
            <input type="text" placeholder="Last name" name="lastName">
            <div id="last-name-error" class="err"></div>
          </div>
        </div>
        <div class="input-wrapper">
          <input type="email" placeholder="Email" name="email">
          <div id="email-error" class="err"></div>
        </div>
        <div class="input-wrapper">
          <input type="password" placeholder="Password" name="password">
          <div id="password-error" class="err"></div>
        </div>
        <div class="input-wrapper">
          <input type="password" placeholder="Confirm password" name="confirmPassword">
          <div id="confirm-password-error" class="err"></div>
        </div>
        <div class="register-form-action">
          <div>
            Already have an account?<span class="cursor-pointer" id="redirect-login">Login</span>
          </div>
          <button class="btn" type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>`
=======
              <div class="bg-img">
                     <img src="./images/undraw_review_fkgn.svg">
              </div>
              <div class="form-wrapper">
                     <div class="register-header">
                            <img src="./images/undraw_female_avatar_w3jk.svg" alt="">
                     </div>
                     <form id="register-form">
                            <div class="name-wrapper">
                                   <div class="input-wrapper">
                                          <input type="text" name="firstname" placeholder=" First name">
                                          <div id="firstname-err" class="err"></div>
                                   </div>
                                   <div class="input-wrapper">
                                          <input type="text" name="lastname" placeholder=" Last name">
                                          <div id="lastname-err" class="err"></div>
                                   </div>
                            </div>
                            <div class="input-wrapper">
                                   <input type="email" name="email" placeholder=" Email">
                                   <div id="email-err" class="err"></div>
                            </div>
                            <div class="input-wrapper">
                                   <input type="password" name="password" placeholder=" Password">
                                   <div id="password-err" class="err"></div>
                            </div>
                            <div class="input-wrapper">
                                   <input type="password" name="confirmpassword" placeholder=" Confirm Password">
                                   <div id="confirmpassword-err" class="err"></div>
                            </div>
                            <div class="register-form-action">
                                   <div class="line-direct">
                                          Already have an account? <span id="redirect-login">Login</span>
                                   </div>
                                   <button type="submit" class="btn"> Register </button>
                            </div>
                     </form>
              </div>
       </div>`
>>>>>>> origin/quan

components.loginScreen = `
<div class="login-container">
              <div class="bg-img">
                     <img src="./images/undraw_location_review_dmxd.svg" alt="">
              </div>
              <div class="login-form-wrapper">
                     <div class="login-header">
                            <img src="./images/undraw_profile_pic_ic5t.svg" alt="">
                     </div>
                     <form action="" id="login-form">
                            <div class="input-wrapper">
                                   <input type="email" name="email" placeholder=" Email">
                                   <div id="email-err" class="err"></div>
                            </div>
                            <div class="input-wrapper">
                                   <input type="password" name="password" placeholder=" Password">
                                   <div id="password-err" class="err"></div>
                            </div>
                            <div class="reset-p">
                                   <span id="reset-p">Forgot Password?</span>
                            </div>
                            <div id="form-action">
                                   <button type="submit" class="btn">Sign In</button>
                                   <div class="line-direct">
                                          Not a member? <span id="redirect-register">Sign Up</span> 
                                   </div>
                            </div>
                     </form>
              </div>
       </div>`
components.us = ``