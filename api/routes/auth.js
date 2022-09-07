const express = require("express");
const passport = require("passport");

const router = express.Router();

/**
 * @desc Get the information of the current user.
 * @route GET /api/auth/currentUser
 */
router.get("/currentUser", async (req, res) => {
    try {
        const {user} = req;
        if (!user) {
            res.status(200).json({
                success: true,
                user: null,
            });
        } else {
            res.status(200).json({
                success: true,
                user: {
                    email: user.email,
                    profilePicture: user.profilePicture,
                    displayName: user.displayName,
                    name: {
                        givenName: user.name.givenName,
                        familyName: user.name.familyName,
                    },
                },
            });
        }
    } catch (e) {
        res.status(500).json({
            success: false,
        });
    }
});

/**
 * @desc Perform user logout.
 * @route GET /api/auth/logout
 */
router.get("/logout", async (req, res) => {
    try {
        req.logout(() => {
            req.session.destroy();
            res.redirect("/");
        });
    } catch (e) {
        console.error(e);
    }


});

/**
 * @desc Authorization with Google.
 * @route GET /api/auth/google
 */
router.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

/**
 * @desc Successful authorization after the function.
 * @route GET /api/auth/google/callback
 */
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/");
});


module.exports = router;