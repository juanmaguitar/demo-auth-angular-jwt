const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy;

const User = require(__base + '/models/User')

passport.use( new LocalStrategy( User.authenticate() ) );

module.exports = passport;
