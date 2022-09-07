const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../../models/User");

const googleStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
}, authCallback);

// We identify users at login using emails, which allows users to sign in with
// multiple kinds of accounts sharing the same email.
async function authCallback(accessToken, refreshToken, profile, done) {
    try {
        const currentEmail = profile["emails"][0]["value"];
        const existingUser = await User.findOne({email: currentEmail});
        if (existingUser) {
            done(null, existingUser);
        } else {
            const newUser = new User({
                googleId: profile["id"],
                email: currentEmail,
                profilePicture: profile["photos"][0]["value"],
                displayName: profile["displayName"],
                name: {
                    givenName: profile["name"]["givenName"],
                    familyName: profile["name"]["familyName"],
                }
            });
            await newUser.save();
            done(null, newUser);
        }
    } catch (e) {
        console.error(e);
    }
}

module.exports = googleStrategy;