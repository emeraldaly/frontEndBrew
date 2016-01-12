$(document).ready(function() {
//return value is FirebaseSimpleLogin - an object that can be used to manage the users login state
var ref = new Firebase("https://<shining-fire-5762.firebaseio.com");
var FirebaseSimpleLogin;
var authClient = new FirebaseSimpleLogin(ref,(error, user))
  if (error !== null) {
    console.log("error authenticating:",error);
  } else if (user !== null) {
    console.log("user is logged in", user);
  } else { 
    console.log("user is logged out");
  }
});

// Log a user in using Facebook auuthentication with the public profile and friends permissions
auth.login("facebook", {
  scope: "public_profile, user_friends"
});

//log a user in using email/password authentication
auth.login("password", {
  email: "me@here.com",
  password: "mypassword",
  rememberMe: true
});

//logout() no return value. logs a user out
auth.logout();

//create user (email, password, callback) creates a new account for the specified email address
//this function does not log the in automatically; you have to call login() after account creation is complete
auth.createUser(email, password, function(error, user) {
  if (error === null) {
  console.log("User created successfully:", user);
  } else {
    console.log("Error creating user:", error);
  }
});

//changePassword (email, oldPassword, newPassword, callback)
// changes password for the email/ password account specified
auth.changePassword(email, oldPassword, newPassword, function(error) {
   if (error === null) {
      console.log("Password changed successfully");
    } else {
      console.log("Error changing password:", error);
    }
});

//sendPasswordResetEmail(email, callback)
//send a temporary reset email to the owner of the email / password account specified. 
//the password reset email will include a new, temporary password that the user may use
//to log into their account and update their credentials
auth.sendPasswordResetEmail(email, function(error) {
  if (error === null) {
    console.log("Password reset email sent successfully");
  } else {
    console.log("Error sending password reset email:", error);
  }
});

//removeUser(email, pssword, callback)
// deletes the email / password of the user account specified
auth.removeUser(email, password, function(error) {
  if (error === null) {
    console.log("User removed successfully");
  } else {
    console.log("Error removing user:", error);
  }
});
;                         
