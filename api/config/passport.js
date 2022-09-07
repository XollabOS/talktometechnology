const passport = require("passport");
const session = require("express-session");
const googleStrategy = require("../auth/strategy/GoogleStrategy");
const Users = require("../models/User");
const MongoStore = require("connect-mongo");
const {dbConnectionString} = require("./database");

/**
 * Adds Google authorization and other OAuth middlewares in the future.
 *
 * @param expressApp {Express} The ExpressJS application to add patches to.
 */
function addAuthorization(expressApp) {
    const newSession = session({
        secret: "TalkToMe",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            mongoUrl: dbConnectionString
        }),
    });

    expressApp.use(newSession);
    expressApp.use(passport.initialize({}));
    expressApp.use(passport.session({}));
    passport.use(googleStrategy);

    passport.serializeUser((user, done) => {
        console.log(user._id);
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
        let user, error = null;
        try {
            user = await Users.findById(id);
        } catch (e) {
            error = e;
        }
        console.log("Deserializing...");
        done(error, user);
    });
}


module.exports = addAuthorization;