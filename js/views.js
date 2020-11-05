const view = {}
view.setActiveScreen = (screenName) => {
       switch(screenName) {
              case 'loginScreen' :
              document.getElementById('app').innerHTML = components.loginScreen 
              document.getElementById('redirect-register').addEventListener('click',() => {
                     view.setActiveScreen('registerScreen')
              })
              break;
              case 'registerScreen' : 
              document.getElementById('app').innerHTML = components.registerScreen
              document.getElementById('redirect-login').addEventListener('click',() => {
                     view.setActiveScreen('loginScreen')
              })
              break;
       }
      
}