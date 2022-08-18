const passport = require("passport");
const session = require("express-session");

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
    });
    expressApp.use(newSession);
    expressApp.use(passport.initialize({}));
    expressApp.use(passport.session({}));
}
