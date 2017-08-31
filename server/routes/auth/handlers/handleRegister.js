const User = require(__base + '/models/User')

function handleRegister(req, res) {
  const { username, password } = req.body

  const user = new User({username})

  User.register(user, password, err => {
    if (err) {
      return res.json({ success: false, msg: 'Username already exists.' })
    }
    res.json({ success: true, msg: 'Successful created new user.' })
  })

}

module.exports = handleRegister