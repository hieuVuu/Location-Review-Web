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
controller.createPost = ({title,author, dicstrict, city, address, description, media}) => {
       dicstrict ===''? view.setErrMessage('#dict-err', 'Input dicstrict'):
       view.setErrMessage('#dict-err', '')
       title ===''? view.setErrMessage('#title-err', 'Input Title'):
       view.setErrMessage('#title-err', '')
       city ===''? view.setErrMessage('#city-err', 'Input city'):
       view.setErrMessage('#city-err', '')
       address ===''? view.setErrMessage('#add-err', 'Input address'):
       view.setErrMessage('#add-err', '')
       description ===''? view.setErrMessage('#des-err', 'Input description'):
       view.setErrMessage('#des-err', '')

       if(title!==''&& dicstrict!=='' && city!=='' && address!=='' && description!=='') {
              const dataReview = {
                     title: title,
                     author: author,
                     media: media,  
                     dicstrict: dicstrict,
                     city: city,
                     address: address,
                     description: description,
                     createdAt: new Date().toISOString(), 
              }
          model.createPost(dataReview)
       }
}