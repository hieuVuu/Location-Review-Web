const components = {}
components.welcomeSceen = `
<div class="container">
              <div class="header-container">
                     <div class="title">
                     <i class="fas fa-map-marker-alt"></i>
                     Unique Location</div>
                     <div class="btn-nav">   
                     <i onclick="view.openNav()" class="fas fa-bars cursor-all"></i>  
                          <div id="mySidenav" class="sidenav">
                            <p  href="javascript:void(0)" class="closebtn cursor-all" onclick="view.closeNav()">&times;</p>
                            <p class="cursor-all" id="">City</p>
                            <p class="cursor-all" id="js-createScreen">Create Review</p>
                            <p class="cursor-all" id="js-profileScreen">Profile</p>
                            <p class="cursor-all" id="sign-out">Sign Out</p>
                          </div>
                     </div>
              </div>
              <div class="main-page">

                     <div class="aside-left">
                            <div class="filter">
                                   <button class="btn-main cursor-all">Coffe</button>
                                   <button class="btn-main cursor-all"">Entertainment</button>
                                   <button class="btn-main cursor-all"">Travel</button>
                                   <button class="btn-main cursor-all"">Student</button>
                                   <button class="btn-main cursor-all"">Animals</button>
                            </div>
                     </div>
                     <div class="aside-right">
                            <div class="header-right">
                                   <div class="btn-filter">
                                          <button class="cursor-all">Near me</button>
                                          <button class="cursor-all">Special</button>
                                          <button class="cursor-all">Cheap for student</button>
                                   </div>
                                   <div class="col-select">
                                          <select name="Dicstrict" id="dicstrict" class="cursor-all">
                                                 <option value="">Choose Dicstrict</option>
                                                 <option value="1">Ba Đình</option>
                                                 <option value="21">Cầu Giấy</option>
                                                 <option value="31">Đống Đa</option>
                                                 <option value="51">Thanh Xuân</option>
                                                 <option value="41">Hoàn Kiếm</option>
                                          </select>
                                   </div>
                            </div> 
                            <div class="list-item" id="style-scroll">      
                            </div>
                     </div>  
              </div>
       </div>
`
components.registerScreen = `
<div class="register-container">
              <div class="bg-img">
                     <img src="./images/undraw_feedback_h2ft.svg">
              </div>
              <div class="form-wrapper">
                     <div class="register-header">
                            <img src="./images/undraw_male_avatar_323b.svg" alt="">
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
                                   <button type="submit" class="cursor-all btn-auth"> Register </button>
                            </div>
                     </form>
              </div>
</div>
`
components.loginScreen = `
<div class="login-container">
              <div class="bg-img">
                     <img src="./images/undraw_winter_road_mcqj.svg" alt="">
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
                                   <button type="submit" class=" cursor-all btn-auth">Sign In</button>
                                   <div class="line-direct">
                                          Not a member? <span id="redirect-register">Sign Up</span> 
                                   </div>
                            </div>
                     </form>
              </div>
       </div>
`
components.createScreen = `
<div class="container-create">      
       <div class="header">
              <div class="title">To show how you feel the world</div>
       </div>
 
       <div class="post-wrapper">
              <div class="post-header mg-bottom">
                     <div class="user-ava">
                            <i class="fas fa-user-circle"></i>
                            <p id="user-name"></p>
                     </div>
                     <div>Create your post</div>
              </div>
              <form id="create-post" action="">
                     <div class="title-post input-wrapper">
                            <input type="text" name="title" placeholder="Title">
                            <div id="title-err" class="err"></div>
                     </div>    
                     <div class="process">
                            <div class="textarea mg-bottom">
                                   <textarea id="style-scroll" name="description" cols="30" rows="10" placeholder="Describe your location "></textarea>
                                   <div id="des-err" class="err"></div>   
                            </div>
                            <div class="up-load "> 
                                   <input  type="file" id="file-input" class="cursor-all" name="file" multiple>
                                   <label for="file-input" class="btn-2 cursor-all">upload</label>
                                   <i class="fas fa-angle-double-up"></i>    
                            </div>
                     </div>
                     <div class="local">
                            <div class="input-wrapper">
                                   <input type="text" name="city" id="city" placeholder="City">
                                   <div id="city-err" class="err"></div>
                            </div>
                            <div class="input-wrapper">
                                   <input type="text" name="dicstrict" placeholder="Dicstrict">
                                   <div id="dict-err" class="err"></div>
                            </div>      
                     </div>
                     <div class="input-wrapper">
                            <input type="text" name="detailAddress" placeholder="Address">
                            <div id="add-err" class="err"></div>
                     </div>
                     <div class="footer">
                            <div class="btn-out cursor-all">
                                   <button id="exit-btn">Exit</button>
                            </div>
                            <div class="btn-upload">
                                   <button class="cursor-all" type='submit' id="post">Post</button>
                            </div>
                     </div>
              </form>
                           
       </div>
</div>
`
components.profileUser = `
<div class="container-user">
              <div class="header">
                     <div class="title">
                            Feel the world
                     </div>
                     <div class="btn-back">
                            <button class="cursor-all" id="back-homePage">
                                   <i class="fas fa-chevron-left"></i>
                                   Back
                            </button>
                     </div>
              </div>
              <div class="user-main">
                     <div class="aside-left">
                            <div class="user">
                                   <div class="img-ava">
                                          <img class="cursor-all" src="https://www.flaticon.com/svg/static/icons/svg/149/149071.svg" alt="" style="height: 100px;">
                                          <label for="user-img"><i class="fas fa-camera"></i></label>
                                          <input type="file" name="" id="user-img">
                                          <input type="submit">
                                   </div>
                                   <div class="user-name"></div>
                            </div>
                            <div class="setting">
                                   <div class="account">
                                          <button class="cursor-all">Your account</button>
                                   </div>
                                   <div class="user-post">
                                          <button class="cursor-all">Your post</button>
                                   </div>
                            </div>
                     </div>
                     <div class="aside-right">
                            <div class="user-account">
                                   <i class="far fa-address-card"></i>
                                   <h1>Account</h1>
                            </div>
                            <div class="infor-authen mg-1">
                                   <div class="title-infor mg-1">Thông tin đăng nhập</div>
                                   <div class="password mg-1">
                                          <h2>Mật hhẩu</h2>
                                          <div>*******</div>
                                   </div>
                                   <div class="email mg-1">
                                          <h2>Email</h2>
                                          <div>email</div>
                                   </div>
                            </div>
                            <div class="infor-user mg-1">
                                   <div class="title-infor mg-1">Thông tin cá nhân</div>
                                   <div class="canhan mg-1">
                                          <h2>Cá Nhân</h2>
                                          <div>ABC</div>
                                   </div>
                                   <div class="language mg-1">
                                          <h2>Ngôn ngữ</h2>
                                          <div class="col-select">
                                          <select name="language" id="" class="cursor-all">
                                                 <option value="">Language</option>
                                                 <option value="1">Tiếng Việt</option>
                                                 <option value="21">English</option>
                                                 
                                          </select>
                                   </div>
                                   </div>
                            </div>
                     </div>
              </div>
       </div>
`
