const components = {}
components.welcomeSceen = `
<div class="main-container">
       <div class="header-wrapper">
            <div class="header">Unique Location</div>
            <div class="userdrop">
                     <div class="avatar cursor-all"><i class="fas fa-user-circle"></i></div>
                     <div class="user-action cursor-all">
                            <p>profile</p>
                            <p id="sign-out">sign out</p>
                     </div> 
            </div>
              </div>
            <div class="main">
                   <div class="aside-left">
                     <div class="dropdown">
                            <span class="icon cursor-all"><i class="fas fa-window-minimize"></i></span>
                            <div class="dropdown-content cursor-all mg-b">
                            <p>coffe</p>
                            <p>travel</p>
                            <p>entertainment</p>
                            </div>
                     </div>
                   </div>
                   <div class="list-post">
                         My Post
                   </div>
            </div>
       </div>
`
components.registerScreen = `
<div class="register-container">
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
       </div>

`