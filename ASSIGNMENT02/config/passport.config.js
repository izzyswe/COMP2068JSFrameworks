const LocalStrategy = require("passport-local").Strategy;
const AccountModel = require("../models/account.models");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "identifier", passwordField: "accountPassword" },
      async (identifier, password, done) => {
        try {
          const user = await AccountModel.findOne({
            $or: [
              { accountEmail: identifier },
              { accountUsername: identifier },
            ],
          });

          if (!user) return done(null, false);

          const match = await user.comparePassword(password);
          if (!match) return done(null, false);

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  //SERIALIZATION FOR BOTH LOGIN AND REGISTRATIONS
  passport.serializeUser((user, done) => done(null, user._id));

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await AccountModel.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
