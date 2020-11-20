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
                     var user = firebase.auth().currentUser;
                     firebase.auth().signOut().then(function() {
                            view.setActiveScreen('registerScreen')
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
                     view.setActiveScreen('profileScreen')
              })
              break;

              case 'createScreen' :
              document.getElementById('app').innerHTML = components.createScreen
              let user = firebase.auth().currentUser
              document.getElementById('user-name').innerText = user.displayName 
              const reviewForm = document.getElementById('create-post')
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
                     const dataReview = {
                            title: reviewForm.title.value,
                            author: user.displayName,
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
              case 'profileScreen':
                     document.getElementById('app').innerHTML = components.profileScreen
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