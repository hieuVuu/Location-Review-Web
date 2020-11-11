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
              document.getElementById('sign-out').addEventListener('click', (e) => {
                     e.preventDefault()
                     view.setActiveScreen('loginScreen')
              })
              break;
       }    
}

view.setErrMessage = (elemId, message) => {
       document.querySelector(elemId).innerText = message
}
