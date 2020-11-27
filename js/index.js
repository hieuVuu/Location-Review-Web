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
        view.setActiveScreen('welcomeScreen')
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
  

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}