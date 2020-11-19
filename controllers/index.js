const User = require('../models/User');

//Exportamos el controlador Home
exports.home = (req, res) => {
  User.find().sort('id').exec((err, users) => {
    for (let user of users) {
      user.age = Math.trunc((new Date() - user.birthday) / 31536000000);
    }
    res.render('index', { users: users });
  });
};

//Exportamos el controlador search
exports.search = (req, res) => {
  let result = null;
  User.findOne({ id: req.query.id }).exec((err, user) => {
    if (user != null) {
      user.age = Math.trunc((new Date() - user.birthday) / 31536000000);
      result = [user];
    }
    res.render('index', { users: result });
  })
}