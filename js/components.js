const components = {}
components.welcomeSceen = `
<div class="container">
              <div class="header-container">
                     <div class="title">Unique Location</div>
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
                            <div class="left-title">To show how you feel the world</div>
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
                                          <select name="Dicstrict" id="" class="cursor-all">
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
                                   <button type="submit" class="cursor-all btn-auth"> Register </button>
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
       <div class="title">
              To show how you feel the world
       </div>
       <div class="btn-out cursor-all">
              <button id="exit-btn">Exit</button>
       </div>
</div>

<div class="post-wrapper">
              <div class="post">
                    <div class="post-header mg-bottom">
                     <div class="user-ava">
                            <i class="fas fa-user-circle"></i>
                            <p id="user-name"></p>
                     </div>
                     <div>Create your post</div>
                    </div>
                     <form id="create-post" action="">
                            <div class="title-post input-wrapper center">
                                   <input type="text" name="title" placeholder="Title">
                                   <div id="title-err" class="err"></div>
                            </div>    
                            <div class="up-load mg-bottom center">
                                   <input  type="file" class="cursor-all" name="file" multiple>
                                   <button class="cursor-all" type="submit">Upload File</button>
                            </div>
                            <div class="textarea mg-bottom">
                                   <textarea name="description" id="" cols="30" rows="10" placeholder="Describe your location "></textarea>
                                   <div id="des-err" class="err"></div>   
                            </div>
                            <div class="local center" id="local">
                                   <div class="input-wrapper">
                                   <input type="text" name="city" id="city" placeholder="City">
                                   <div id="city-err" class="err"></div>
                                   </div>
                                   <div class="input-wrapper">
                                   <input type="text" name="dicstrict" placeholder="Dicstrict">
                                   <div id="dict-err" class="err"></div>
                                   </div>      
                            </div>
                            <div class="input-wrapper center">
                                   <input type="text" name="detailAddress" placeholder="Address">
                                   <div id="add-err" class="err"></div>
                            </div>
                            <div class="btn-upload">
                                   <button class="cursor-all" type='submit' id="post">Post</button>
                            </div>
                     </form>
              </div>
</div>
</div>
`
components.profileScreen = `
<div class="web">
              <div class="narvigation-bar">
                     <div class="feature">
                            <ul>
                                   <li><a href="#">Trang chủ</a></li>
                                   <li><a href="#">a</a></li>
                                   <li><a href="#">a</a></li>
                                   <li><a href="#">a</a></li>
                            </ul>
                     </div>

                     <div class="account-controls-setting">
                            <div class="controls">
                                   <div class="account">
                                          <button href="">
                                                 <img src="images/9-cau-noi-hay-8-1522225466.jpg" width="16" height="16"
                                                        alt="">
                                                 <div class="user-name">
                                                        <span id="user-name">phan quan</span></div>
                                          </button>
                                   </div>
                                   <div class="setting">
                                          <span><button>setting</button></span>
                                   </div>
                            </div>
                     </div>
              </div>
              <div class="profile">
                     <div class="profile-background-image">
                            <div class="image">
                                   <a href="#">
                                          <img id="image-background" src="images/9-cau-noi-hay-8-1522225466.jpg" width="900" height="325"
                                                 alt="">
                                   </a>
                                   <input type="file" id="photo1" name="file" />
                                          <button onclick="uploadImage1()">Upload Image</button>

                            </div>
                     </div>

                     <div class="profile-image-representative">

                            <div class="represtative">
                                   <div class="image">
                                          <img id="image-representative"
                                                 src="images/EUGj-OfXgAY7zKx-e1585300534461-700x415.jpg">

                                   </div>
                                   <div class="replace">
                                          <i class="fas fa-camera"></i>
                                          <input type="file" id="photo2" name="file" />
                                          <button onclick="uploadImage2()">Upload Image</button>
                                   </div>

                            </div>
                     </div>
                     <div class="user-name">
                            <!-- <span id="user-name" style="color: #a2a4a8;">phan quan</span> -->
                     </div>
                     <div class="user-information" style="color: #a2a4a8;">
                            <div class="left-part">
                                   <ol class="about">
                                          <li>detail</li>
                                          <li>hobbies</li>
                                   </ol>
                            </div>
                            <div class="right-part">
                                   <div class="detail-part">
                                          <ul class=detail>
                                                 <li class="name">phan quan</li>
                                                 <li class="telephone">123132</li>
                                                 <li class="address">papapa</li>
                                          </ul>
                                   </div>
                                   <div class="hobbies-part">
                                          <ul class="hobbies">
                                                 <li class="location">cafe</li>
                                                 <li class="food">banhmi</li>
                                                 <li class="drink">coffee</li>
                                          </ul>
                                   </div>
                            </div>
                     </div>
              </div>

`