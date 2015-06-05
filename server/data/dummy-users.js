var cryptoConfig = require('./../config/crypto-config');

module.exports = function(usersCollection) {
  // Checking for users in DB
  usersCollection.find({}).exec(function(err, collection) {
    if (err) {
      console.log("> Error caught: " + err);
    } else {
      if (collection.length === 0) {
        console.log("> No dummy users present and hence creating them");
        var salt, hash;
        salt = cryptoConfig.createSalt();
        hash = cryptoConfig.hashPwd(salt, 'apple');
        usersCollection.create({
          firstName: 'Steve',
          lastName: 'Jobs',
          userName: 'apple',
          salt: salt,
          hashed_pwd: hash
        });
        salt = cryptoConfig.createSalt();
        hash = cryptoConfig.hashPwd(salt, 'google');
        usersCollection.create({
          firstName: 'Sundar',
          lastName: 'Pichai',
          userName: 'google',
          salt: salt,
          hashed_pwd: hash
        });
      } else {
        console.log("> dummy users already exists: " + collection.length);
      }
    }
  });
}
