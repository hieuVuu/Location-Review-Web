<<<<<<< HEAD
//up anh len firestore

function uploadImage1() {
  const ref = firebase.storage().ref();
  const file = document.querySelector(" #photo1").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url);
      document.querySelector(" #image-background").src = url;
    })
    .catch(console.error);
}

function uploadImage2() {
  const ref = firebase.storage().ref();
  const file = document.querySelector(" #photo2").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url);
      document.querySelector(" #image-representative").src = url;
    })
    .catch(console.error);
}


//keo du lieu ve

const controller = {}
controller.register = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword
}) => {
  if (firstName === '') {
    view.setErrorMessage('first-name-error', 'Please input first name')
  } else {
    view.setErrorMessage('first-name-error', '')
  }
  if (lastName === '') {
    view.setErrorMessage('last-name-error', 'Please input last name')
  } else {
    view.setErrorMessage('last-name-error', '')
  }
  if (email === '') {
    view.setErrorMessage('email-error', 'Please input email')
  } else {
    view.setErrorMessage('email-error', '')
  }
  if (password === '') {
    view.setErrorMessage('password-error', 'Please input password')
  } else {
    view.setErrorMessage('password-error', '')
  }
  if (confirmPassword === '') {
    view.setErrorMessage('confirm-password-error', 'Please input confirm password')
  } else if (password !== confirmPassword) {
    view.setErrorMessage('confirm-password-error', "Password didn't match")
  } else {
    view.setErrorMessage('confirm-password-error', '')
  }
  if (firstName !== '' &&
    lastName !== '' &&
    email !== '' &&
    password !== '' &&
    confirmPassword !== '' &&
    password === confirmPassword
  ) {
    const dataRegister = {
      firstName,
      lastName,
      email,
      password
    }
    model.register(dataRegister)
  }
}

controller.login = ({
  email,
  password
}) => {
  if (email === '') {
    view.setErrorMessage('email-error', 'Please input email')
  } else {
    view.setErrorMessage('email-error', '')
  }
  if (password === '') {
    view.setErrorMessage('password-error', 'Please input password')
  } else {
    view.setErrorMessage('password-error', '')
  }
  if (email !== '' && password !== '') {
    model.login({
      email,
      password
    })
  }
}


function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
=======
const controller = {}
controller.login = ({email, password}) => {
       email === '' ? view.setErrMessage('#email-err', 'Input your email.') : 
       view.setErrMessage('#email-err', '')
       password === '' ? view.setErrMessage('#password-err', 'Input your password.') :
       view.setErrMessage('#password-err', '')
       if(email !== '' && password !== '') {
              const dataLogin = {
                     email: email,
                     password: password,
              }
              model.login(dataLogin)
       }
}

controller.register = ({firstname, lastname, email, password, confirmpassword}) => {
     confirmpassword !== password ? view.setErrMessage('#confirmpassword-err', 'Make sure your passwords match'):
     view.setErrMessage('#confirmpassword-err', '')
     firstname === '' ? view.setErrMessage('#firstname-err', 'Input your first name.') :
     view.setErrMessage('#firstname-err', '')
     lastname === '' ? view.setErrMessage('#lastname-err', 'Input your last name.') :
     view.setErrMessage('#lastname-err', '')
     email === '' ? view.setErrMessage('#email-err', 'Input your email.') :
     view.setErrMessage('#email-err', '')
     password === '' ? view.setErrMessage('#password-err', 'Input your password.') :
     view.setErrMessage('#password-err', '')
     confirmpassword ==='' ? view.setErrMessage('#confirmpassword-err', 'Input your confirmpassword') :
     confirmpassword !== password ? view.setErrMessage('#confirmpassword-err', 'Make sure your passwords match'):
     view.setErrMessage('#confirmpassword-err', '')


     if(firstname!==''&& lastname!=='' &&email!=='' && password!=='' &&password===confirmpassword) {
            const dataRegister = {
                   firstname: firstname,
                   lastname: lastname,
                   email: email,
                   password: password,
            }
            model.register(dataRegister)
     }
}
>>>>>>> origin/quan
