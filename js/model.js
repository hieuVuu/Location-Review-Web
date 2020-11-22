const model = {}
model.currentPost = {}
model.posts = []

model.login = async ({email,password}) => {
       try {  
              const response =  await firebase.auth().signInWithEmailAndPassword(email, password)
              const user = response.user
              if(user.emailVerified) {
                     view.setActiveScreen('welcomeScreen')     
              }
              else{
                     alert('Please verify your email')
                     view.setActiveScreen('loginScreen')
              }    
       } catch (error) {
              alert(error.message)
       }
}

model.resetPassword = async (emailAddress) => {
       try {
               await firebase.auth().sendPasswordResetEmail(emailAddress)
               alert("Password reset email sent.")
       } catch (error) {
              alert(error.message)
       }
}

model.register = async ({firstname, lastname, email, password}) => {
       try {
               await firebase.auth().createUserWithEmailAndPassword(email, password)

                    const user = firebase.auth().currentUser;
                    user.updateProfile({
                           displayName: firstname + lastname,
                    }).then(()=> {
                     // Update successful.
                   }).catch(function(error) {
                     // An error happened.
                     alert(error.message)
                   });
                   console.log(user)
                   
                    user.sendEmailVerification().then(()=> {
                           alert('Please verify your email')
                           view.setActiveScreen('loginScreen')
                    })
       } catch (error) {
              alert(error.message)
       }
}

model.createPost = async (data) => {
    try {
       const datatoAdd = data;
       await firebase.firestore().collection('Reviews').add(datatoAdd)
       alert('post success')
       location.reload()    
    } catch (error) {
           alert(error.message)
    }
}

model.getPosts = async () => {
 const response =  await firebase.firestore().collection('Reviews').get()
 model.posts = getDataFromDocs(response.docs)
 console.log(model.posts)
 if(model.posts.length > 0) {
        model.posts.reverse()
        model.posts.map(post => {
              view.showAllPost(post)
        })
 }
}
// firebaseQueries =    async () => {

// }
