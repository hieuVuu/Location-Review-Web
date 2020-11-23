const view = {}
view.setActiveScreen = (screenName) => {
       switch(screenName) {
              case 'loginScreen' :
              document.getElementById('app').innerHTML = components.loginScreen 
              document.getElementById('redirect-register').addEventListener('click',() => {
                     view.setActiveScreen('registerScreen')})
              const loginForm = document.getElementById('login-form')
              loginForm.addEventListener('submit', (e) => {
                     e.preventDefault()
              const dataLogin = {
                     email: loginForm.email.value,
                     password: loginForm.password.value,
              }
              controller.login(dataLogin)
              })

              const resetPassword = document.getElementById('reset-p')
              resetPassword.addEventListener('click',(e)=> {
                     e.preventDefault()
                     const emailAddress = loginForm.email.value
                     model.resetPassword(emailAddress)
              })
             
              break;

              case 'registerScreen' : 
              document.getElementById('app').innerHTML = components.registerScreen
              document.getElementById('redirect-login').addEventListener('click',() => {
                     view.setActiveScreen('loginScreen') 
              })
              const registerForm = document.getElementById('register-form')
              registerForm.addEventListener('submit', (e) => {
                     e.preventDefault()
                     const dataRegister = {
                            firstname: registerForm.firstname.value,
                            lastname: registerForm.lastname.value,
                            email: registerForm.email.value,
                            password: registerForm.password.value,
                            confirmpassword: registerForm.confirmpassword.value,
                     }
                    controller.register(dataRegister)
              })
              break;

              case 'welcomeScreen' :
              document.getElementById('app').innerHTML = components.welcomeSceen
              document.getElementById('sign-out').addEventListener('click', (e)=> {
                     e.preventDefault()
                     firebase.auth().signOut().then(function() {      
                          }).catch(function(error) {
                            alert(error.message)
                          });
              })
              document.getElementById('js-createScreen').addEventListener('click', (e)=> {
                     e.preventDefault()
                     view.setActiveScreen('createScreen')
              })
              document.getElementById('js-profileScreen').addEventListener('click', (e)=> {
                     e.preventDefault()
                     view.setActiveScreen('profileUser')
              })
              // get cac post 
              model.getPosts()
              // show current post 
              break;

              case 'createScreen' :
              document.getElementById('app').innerHTML = components.createScreen
              const reviewForm = document.getElementById('create-post')
              
              document.querySelector('#user-name').innerText = model.currentUser.displayName

              reviewForm.addEventListener('submit', (e)=> {
                     e.preventDefault()
                     const files = reviewForm.file.files
                     const media = []
                     if(files.length === 0) {
                            alert('Please choose at least one file')
                     }
                     else {   
                            for(let i=0; i<files.length ; i++)
                            {
                            media.push(uploadFile(files[i]))
                            }
                     } 
                     console.log(media)
                     const dataReview = {
                            title: reviewForm.title.value,
                            author: model.currentUser.displayName,
                            dicstrict: reviewForm.dicstrict.value,
                            city: reviewForm.city.value,
                            address: reviewForm.detailAddress.value,
                            description: reviewForm.description.value,
                            media: media, 
                     }
                     controller.createPost(dataReview)
              })
              document.getElementById('exit-btn').addEventListener('click', (e)=> {
                     e.preventDefault()
                     view.setActiveScreen('welcomeScreen')
              })
              break;
              case 'profileUser':
                     document.getElementById('app').innerHTML = components.profileUser
                     document.getElementById('back-homePage').addEventListener('click', (e)=> {
                            e.preventDefault()
                            view.setActiveScreen('welcomeScreen')
                     })
                     document.querySelector('#app > div > div.user-main > div.aside-left > div.user > div.user-name').innerText = model.currentUser.displayName
                     document.querySelector('#app > div > div.user-main > div.aside-right > div.infor-authen.mg-1 > div.email.mg-1 > div').innerText = model.currentUser.email;
              break;
              
       }    
}

view.setErrMessage = (elemId, message) => {
       document.querySelector(elemId).innerText = message
}
view.openNav = () => {
        document.getElementById('mySidenav').style.width = "30%"
}
view.closeNav = () => {
       document.getElementById('mySidenav').style.width = "0rem"
}

view.showAllPost = (post) => {
       const itemWrapper = document.createElement('div')
       itemWrapper.classList.add('item')
       itemWrapper.innerHTML = `
              <div class="item-img">
                     <img class="cursor-all" src="${post.media[0]}" alt="">
              </div>
              <div class="short-description">
                     <div class="item-title cursor-all">${post.title}</div>
                     <div class="item-info cursor-all">${post.address}</div>
                     <div class="author cursor-all">By: ${post.author}</div>
              </div> `
       document.querySelector('.list-item').appendChild(itemWrapper)
}


uploadFile =  (file) => {
       // tao duong dan den file
       const fileName = file.name
       const filePath = `MediaReview/${fileName}`
       // tro den duong dan do
       const fileRef = firebase.storage().ref().child(filePath)
       // day file len duong dan day
        fileRef.put(file)
       // sau khi xong thi lay url
       return getFileUrl(fileRef)
     }
     function getFileUrl(fileRef) {
       return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
     }