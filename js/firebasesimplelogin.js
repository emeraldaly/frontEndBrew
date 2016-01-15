$(document).ready(function() {
//return value is FirebaseSimpleLogin - an object that can be used to manage the users login state
var usersRef = new Firebase("https://<shining-fire-5762.firebaseio.com");
var FirebaseSimpleLogin;
var authClient;
new Firebase(usersRef, function(error, user) {
  if (error !== null){
    console.log("error authenticating:",error);
  }
 if (user !== null) {
    console.log("user is logged in", user);
  } else { 
    console.log("user is logged out");
  }
});
  
//routemap
var routeMap = {
        '#/': {
            form: 'frmLogin',
            controller: 'login'},
    
            '#/logout': {
            form: 'frmLogout',
            controller: 'logout'},
    
            '#/register': {
            form: 'frmRegister',
            controller: 'register'},
        
            '#/profile': {
                form: 'frmProfile',
                controller: 'profile',
                authRequired: true // must be logged in to get here
            }
    }
        // create the object to store our controllers
    var controllers = {};

    // store the active form shown on the page
    var activeForm = null;

    var alertBox = $('#alert');

    function routeTo(route) {
        window.location.href = '#/' + route;
    }

// Create a user and then login
    // returns a promise
    function createUserAndLogin(userObj) {
        return createUser(userObj)
            .then(function () {
            return authWithPassword(userObj);
        });
    }

    //create user
    auth.createUser (email, password,
        function(error, user) {
            if (error === null) {
                console.log("User created successfully:", user);
            } else {
              console.log("Error creating user:", error);
            }
        });          

    // route to the specified route if successful
    // if there is an error, show the alert
    function handleAuthResponse(promise, route) {
        $.when(promise)
            .then(function (authData) {

            // route
            routeTo(route);

        }, function (err) {
            console.log(err);
            // pop up error
            showAlert({
                title: err.code,
                detail: err.message,
                className: 'alert-danger'
            });

        });
    }

    // options for showing the alert box
    function showAlert(opts) {
        var title = opts.title;
        var detail = opts.detail;
        var className = 'alert ' + opts.className;

        alertBox.removeClass().addClass(className);
        alertBox.children('#alert-title').text(title);
        alertBox.children('#alert-detail').text(detail);
    }
 // Handle third party login providers
    // returns a promise
    function thirdPartyLogin(Facebook) {
        var deferred = $.Deferred();

        rootRef.authWithOAuthPopup(provider, function (err, user) {
            if (err) {
                deferred.reject(err);
            }

            if (user) {
                deferred.resolve(user);
            }
        });

        return deferred.promise();
    };

// Log a user in using Facebook auuthentication with the public profile and friends permissions
auth.login("facebook", {
  scope: "public_profile, user_friends"
});

//log a user in using email/password authentication
auth.login("password", {
  email: "me@here.com",
  password: "mypassword",
  rememberMe: true 
//logout() no return value. logs a user out
// auth.logout()
});

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

// create a user but not login  //is this exactly the same thing as the code above?
    // returns a promsie
    function createUser(userObj) {
        var deferred = $.Deferred();
        rootRef.createUser(userObj, function (err) {

            if (!err) {
                deferred.resolve();
            } else {
                deferred.reject(err);
            }

        });

        return deferred.promise();
    }

// Handle Email/Password login
    // returns a promise
    function authWithPassword(userObj) {
        var deferred = $.Deferred();
        console.log(userObj);
        rootRef.authWithPassword(userObj, function onAuth(err, user) {
            if (err) {
                deferred.reject(err);
            }

            if (user) {
                deferred.resolve(user);
            }

        });

        return deferred.promise();
    }

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
}); 

    /// Controllers
    ////////////////////////////////////////
    var controllers
    controllers.login = function(form) {

        // Form submission for logging in
        form.on('submit', function (e) {

            var userAndPass = $(this).serializeObject();
            var loginPromise = authWithPassword(userAndPass);
            e.preventDefault();

            handleAuthResponse(loginPromise, 'profile');

        });

        // Social buttons
        form.children('.bt-social').on('click', function (e) {

            var $currentButton = $(this);
            var provider = $currentButton.data('provider');
            var socialLoginPromise;
            e.preventDefault();

            socialLoginPromise = thirdPartyLogin(provider);
            handleAuthResponse(socialLoginPromise, 'profile');

        });

        form.children('#btAnon').on('click', function (e) {
            e.preventDefault();
            handleAuthResponse(authAnonymously(), 'profilex');
        });

    };

    // logout immediately when the controller is invoked
    controllers.logout = function (form) {
        rootRef.unauth();
    };

    controllers.register = function (form) {

        // Form submission for registering
        form.on('submit', function (e) {

            var userAndPass = $(this).serializeObject();
            var loginPromise = createUserAndLogin(userAndPass);
            e.preventDefault();

            handleAuthResponse(loginPromise, 'profile');

        });

    };

    controllers.profile = function (form) {
        // Check the current user
        var user = rootRef.getAuth();
        var userRef;

        // If no current user send to register page
        if (!user) {
            routeTo('register');
            return;
        }

        // Load user info
        userRef = rootRef.child('users').child(user.uid);
        userRef.once('value', function (snap) {
            var user = snap.val();
            if (!user) {
                return;
            }

            // set the fields
            form.find('#txtName').val(user.name);
            form.find('#ddlDino').val(user.favoriteDinosaur);
        });

        // Save user's info to Firebase
        form.on('submit', function (e) {
            e.preventDefault();
            var userInfo = $(this).serializeObject();

            userRef.set(userInfo, function onComplete() {

                // show the message if write is successful
                showAlert({
                    title: 'Successfully saved!',
                    detail: 'You are still logged in',
                    className: 'alert-success'
                });

            });
        });

    };

    /// Routing
    ////////////////////////////////////////

    // Handle transitions between routes
    function transitionRoute(path) {
        // grab the config object to get the form element and controller
        var formRoute = routeMap[path];
        var currentUser = rootRef.getAuth();

        // if authentication is required and there is no
        // current user then go to the register page and
        // stop executing
        if (formRoute.authRequired && !currentUser) {
            routeTo('register');
            return;
        }

        // wrap the upcoming form in jQuery
        var upcomingForm = $('#' + formRoute.form);

        // if there is no active form then make the current one active
        if (!activeForm) {
            activeForm = upcomingForm;
        }

        // hide old form and show new form
        activeForm.hide();
        upcomingForm.show().hide().fadeIn(750);

        // remove any listeners on the soon to be switched form
        activeForm.off();

        // set the new form as the active form
        activeForm = upcomingForm;

        // invoke the controller
        controllers[formRoute.controller](activeForm);
    }

    // Set up the transitioning of the route
    function prepRoute() {
        transitionRoute(this.path);
    }


    /// Routes
    ///  #/         - Login
    //   #/logout   - Logout
    //   #/register - Register
    //   #/profile  - Profile

    Path.map("#/").to(prepRoute);
    Path.map("#/logout").to(prepRoute);
    Path.map("#/register").to(prepRoute);
    Path.map("#/profile").to(prepRoute);

    Path.root("#/");

    /// Initialize
    ////////////////////////////////////////

    $(function() {

        // Start the router
        Path.listen();

        // whenever authentication happens send a popup
        rootRef.onAuth(function globalOnAuth(authData) {

            if (authData) {
                showAlert({
                    title: 'Logged in!',
                    detail: 'Using ' + authData.provider,
                    className: 'alert-success'
                });
            } else {
                showAlert({
                    title: 'You are not logged in',
                    detail: '',
                    className: 'alert-info'
                });
            }

        });

    });

(window.jQuery, window.Firebase, window.Path)

//////////////////////////////////////////////////////////////////////////////////////////////////


//from loginFirebase.js (I deleted that file) 

//var routeMap = {
      //  '#/': {
         //   form: 'frmLogin',
         //   controller: 'login'},
    
         //   '#/logout': {
         //   form: 'frmLogout',
          //  controller: 'logout'},
    
         //   '#/register': {
//form: 'frmRegister',
      //      controller: 'register'},
        
//                form: 'frmProfile',
         //       controller: 'profile',
        //        authRequired: true // must be logged in to get here
      //      }
//    }
        // create the object to store our controllers
  //  var controllers = {};

    // store the active form shown on the page
 //   var activeForm = null;

  //  var alertBox = $('#alert');

  //  function routeTo(route) {
 //       window.location.href = '#/' + route;
//    }

    // Handle third party login providers
    // returns a promise
  //  function thirdPartyLogin(Facebook) {
  //      var deferred = $.Deferred();

  //      rootRef.authWithOAuthPopup(provider, function (err, user) {
  //          if (err) {
  //              deferred.reject(err);
   //         }

   //         if (user) {
   //             deferred.resolve(user);
    //        }
    //    });

   //     return deferred.promise();
 //   };

    // Handle Email/Password login     //////////DID NOT HAVE THIS IN CONTACT VALIDATE BEFORE. ADDED IT.
    // returns a promise
  //  function authWithPassword(userObj) {
  //      var deferred = $.Deferred();
  //      console.log(userObj);
  //      rootRef.authWithPassword(userObj, function onAuth(err, user) {
  //          if (err) {
  //              deferred.reject(err);
  //          }

  //          if (user) {
  //              deferred.resolve(user);
  //          }

  //      });

  //      return deferred.promise();
  //  }

    // create a user but not login        //had something similar to this above. still added it.
    // returns a promsie
  //  function createUser(userObj) {
  //      var deferred = $.Deferred();
  //      rootRef.createUser(userObj, function (err) {

  //          if (!err) {
  //              deferred.resolve();
  //          } else {
  //              deferred.reject(err);
  //          }

  //      });

  //      return deferred.promise();
  //  }
//////////////////////////////////////////////////////////////////////////////////////////////start
    //I moved all of this to lines 48 - 97
    // Create a user and then login
    // returns a promise
  //  function createUserAndLogin(userObj) {
  //      return createUser(userObj)
  //          .then(function () {
 //           return authWithPassword(userObj);
//        });
//    }

//    //create user
//    auth.createUser (email, password,
//        function(error, user) {
//            if (error === null) {
//                console.log("User created successfully:", user);
//            } else {
//              console.log("Error creating user:", error);
//            }
//        });          

    // route to the specified route if successful
    // if there is an error, show the alert
//    function handleAuthResponse(promise, route) {
//        $.when(promise)
//            .then(function (authData) {

            // route
//            routeTo(route);

//        }, function (err) {
//            console.log(err);
            // pop up error
//            showAlert({
//                title: err.code,
//                detail: err.message,
//                className: 'alert-danger'
//            });

//        });
//    }

    // options for showing the alert box
//    function showAlert(opts) {
//        var title = opts.title;
//        var detail = opts.detail;
//        var className = 'alert ' + opts.className;

//        alertBox.removeClass().addClass(className);
//        alertBox.children('#alert-title').text(title);
//        alertBox.children('#alert-detail').text(detail);
//    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////end
    //changePassword (email, oldPassword, newPassword, [callback])
   // auth.changePassword(email, oldPassword, newPassword,
   //     function(error) {
    //        if (error === null) {
   //             console.log("Password changed successfully");
   //     }   else {
   //             console.log("Error changing password:", error);
  //      }
  //  });

    //send Password Reset Email (email, [callback]) 
//    auth.sendPasswordResetEmail
//    (email, function(error) {
//       if (error === null) {
//       console.log("Password reset email sent successfully");
//    }  else {
//       console.log("Error sending password reset email:", error);
//    }
//    });

    //removeUser (email, password, [callback]) 
    //deletes the email, password user account specified
//    auth.removeUser(email, password,function(error) {
//    if (error === null) {
//       console.log("User removed successfully");
//    }  else {
//       console.log("Error removing user:", error);
//    }
//
    //logout
    //logs a user out
   // auth.logout();                       

////////////////////////////////////////////////////////////////////////////////////adding all of this starting here 
    /// Controllers
    ////////////////////////////////////////

//    controllers.login = function(form) {

        // Form submission for logging in
//        form.on('submit', function (e) {

//            var userAndPass = $(this).serializeObject();
//            var loginPromise = authWithPassword(userAndPass);
//            e.preventDefault();

//            handleAuthResponse(loginPromise, 'profile');

//        });

        // Social buttons
//        form.children('.bt-social').on('click', function (e) {

//            var $currentButton = $(this);
//            var provider = $currentButton.data('provider');
//            var socialLoginPromise;
//            e.preventDefault();

//            socialLoginPromise = thirdPartyLogin(provider);
//            handleAuthResponse(socialLoginPromise, 'profile');

//        });

//        form.children('#btAnon').on('click', function (e) {
//            e.preventDefault();
//            handleAuthResponse(authAnonymously(), 'profilex');
//        });

//    };

    // logout immediately when the controller is invoked
//    controllers.logout = function (form) {
//        rootRef.unauth();
//    };

//    controllers.register = function (form) {

        // Form submission for registering
//        form.on('submit', function (e) {

//            var userAndPass = $(this).serializeObject();
//            var loginPromise = createUserAndLogin(userAndPass);
//            e.preventDefault();

//            handleAuthResponse(loginPromise, 'profile');

//        });

//    };

//    controllers.profile = function (form) {
        // Check the current user
//        var user = rootRef.getAuth();
//        var userRef;

        // If no current user send to register page
//        if (!user) {
//            routeTo('register');
//            return;
//        }

        // Load user info
//        userRef = rootRef.child('users').child(user.uid);
//        userRef.once('value', function (snap) {
//            var user = snap.val();
//            if (!user) {
//                return;
//            }

            // set the fields
//            form.find('#txtName').val(user.name);
//            form.find('#ddlDino').val(user.favoriteDinosaur);
//        });

        // Save user's info to Firebase
//        form.on('submit', function (e) {
//            e.preventDefault();
//            var userInfo = $(this).serializeObject();

//            userRef.set(userInfo, function onComplete() {

                // show the message if write is successful
//                showAlert({
//                    title: 'Successfully saved!',
//                    detail: 'You are still logged in',
//                    className: 'alert-success'
//                });

//            });
//        });

//    };

    /// Routing
    ////////////////////////////////////////

    // Handle transitions between routes
//    function transitionRoute(path) {
        // grab the config object to get the form element and controller
//        var formRoute = routeMap[path];
//        var currentUser = rootRef.getAuth();

        // if authentication is required and there is no
        // current user then go to the register page and
        // stop executing
//        if (formRoute.authRequired && !currentUser) {
//            routeTo('register');
//            return;
//        }

        // wrap the upcoming form in jQuery
//        var upcomingForm = $('#' + formRoute.form);

        // if there is no active form then make the current one active
//        if (!activeForm) {
//            activeForm = upcomingForm;
//        }

        // hide old form and show new form
//        activeForm.hide();
//        upcomingForm.show().hide().fadeIn(750);

        // remove any listeners on the soon to be switched form
//        activeForm.off();

        // set the new form as the active form
//        activeForm = upcomingForm;

        // invoke the controller
//        controllers[formRoute.controller](activeForm);
//    }

    // Set up the transitioning of the route
//    function prepRoute() {
//        transitionRoute(this.path);
//    }


    /// Routes
    ///  #/         - Login
    //   #/logout   - Logout
    //   #/register - Register
    //   #/profile  - Profile

//    Path.map("#/").to(prepRoute);
//    Path.map("#/logout").to(prepRoute);
//    Path.map("#/register").to(prepRoute);
//    Path.map("#/profile").to(prepRoute);

//    Path.root("#/");

    /// Initialize
    ////////////////////////////////////////

//    $(function() {

        // Start the router
//        Path.listen();

        // whenever authentication happens send a popup
//        rootRef.onAuth(function globalOnAuth(authData) {

//            if (authData) {
 //               showAlert({
//                    title: 'Logged in!',
 //                   detail: 'Using ' + authData.provider,
//                    className: 'alert-success'
//                });
//            } else {
//                showAlert({
//                    title: 'You are not logged in',
//                    detail: '',
//                    className: 'alert-info'
//                });
//            }

//        });

//    });

//(window.jQuery, window.Firebase, window.Path)

///////////////////////////////////////////////////////////////////////////////////ending here 