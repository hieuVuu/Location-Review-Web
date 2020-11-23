const init = () => {     
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAF_oFQ4IrNjmN5Ts0fMQzGBniD9ApK2VM",
    authDomain: "review-location.firebaseapp.com",
    databaseURL: "https://review-location.firebaseio.com",
    projectId: "review-location",
    storageBucket: "review-location.appspot.com",
    messagingSenderId: "68589068360",
    appId: "1:68589068360:web:7883d97bcff01c59b3b87d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((res) =>  {
    // console.log(res)
    if(res) {
      if(res.emailVerified) {
        model.currentUser = {
          email: res.email,
          displayName: res.displayName,
      } 
        view.setActiveScreen('createScreen')
      }
      else {
        alert('Please verify your email!')
        view.setActiveScreen('loginScreen')
      }
    }
    else {
      view.setActiveScreen('loginScreen')
    }
  });
  
}
window.onload = init
getDataFromDocs = (docs) => {
  let arr = [];
  docs.map(oneDoc => {
   arr.push(oneDoc.data())
  })
  return arr;
}

  