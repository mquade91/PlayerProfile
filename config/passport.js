//config/passport.js

//load everyhting from passport
var LocalStrategy = require('passport-local').Strategy;

//Load up our SCOUTER model
var Scouter = require('../app/models/scouter');

module.exports = function(passport) {
    //pasport session setup

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        Scouter.findById(id, function(err, user) {
            done(err, user);
        });
    });

    //LOCAL SIGN UP

    passport.use('local-signup', new LocalStrategy({
            //default
            //userNameField: 'username'
            //email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true //allows us to pass back the entire request to the callback

        },

        function(req, email, password, done) {

            //Scouter.find wont fire unless data is sent back
            process.nextTick(function() {

                Scouter.findOne({ 'Scouter.email': email }, function(err, Scouter) {
                    if (err)
                        return done(err);

                    //check to see if theres already a scout with that email
                    if (Scouter) {
                        return done(null, false, req.flash('signupMessage', "That email is already taken"));
                    }
                    else {
                        //if theres no user w/ tht email

                        var newScouter = new Scouter();

                        //set credentials for user
                        newScouter.email = email;
                        newScouter.password = newScouter.generateHash(password);

                        //save the user
                        newScouter.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newScouter);
                        });
                    }
                });
            });
        }
    ));
    //LOCAL SIGN IN
    passport.use('local-login', new LocalStrategy({

            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) { //gettin email and password from the form

            Scouter.findOne({ 'Scouter.email': email }, function(err, Scouter) {
                if (err)
                    return done(err);
                //if no Scout
                if (!Scouter)
                    return done(null, false, req.flash('loginMessage', 'No Scout found.'));
                //if password is not valid
                if (!Scouter.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                //correct info
                return done(null, Scouter);
            });
        }
    ));
};
