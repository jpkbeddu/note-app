module.exports = function(usersCollection) {
  // Checking for users in DB
  usersCollection.find({}).exec(function(err, collection) {
    if (err) {
      console.log("> Error caught: " + err);
    } else {
      if (collection.length === 0) {
        console.log("> No dummy users present and hence creating them");
        usersCollection.create({
          firstName: 'Steve',
          lastName: 'Jobs',
          userName: 'apple'
        });
        usersCollection.create({
          firstName: 'Sundar',
          lastName: 'Pichai',
          userName: 'google'
        });
      } else {
        console.log("> dummy users already exists: " + collection.length)
      }
    }
  });
}
