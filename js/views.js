const view = {}
view.setActiveScreen = (screenName) => {
       switch(screenName) {
              case 'loginScreen' :
              document.getElementById('app').innerHTML = components.loginScreen 
              break;
              case 'registerScreen' : 
              document.getElementById('app').innerHTML = components.registerScreen
              break;
       }
      
}