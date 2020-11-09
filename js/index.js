const init = () => {     
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
       view.setActiveScreen('welcomeScreen')
}
window.onload = init