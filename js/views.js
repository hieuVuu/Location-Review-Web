const view = {}
view.setActiveScreen = (screenName) => {
       switch(screenName) {
              case 'loginScreen' :
              document.getElementById('app').innerHTML = components.loginScreen 
              document.getElementById('redirect-register').addEventListener('click',() => {
                     view.setActiveScreen('registerScreen')})
              // const loginForm = document.getElementById('login-form')
              // loginForm.addEventListener('submid', (e) => {
              //        e.preventDefault()
              // const dataLog = {
              //        email: loginForm.email.value,
              //        password: loginForm.password.value,
              // }
              // controller.login(dataLog)
              // })
              const dataLog = {
                     email: loginForm.email.value,
                     password: loginForm.password.value,
              }
              console.log(dataLog)

              break;

              case 'registerScreen' : 
              document.getElementById('app').innerHTML = components.registerScreen
              document.getElementById('redirect-login').addEventListener('click',() => {
                     view.setActiveScreen('loginScreen') 
              })
              break;
              case 'welcomeScreen' :
              document.getElementById('app').innerHTML = components.welcomeSceen
              break;
       }
      
}