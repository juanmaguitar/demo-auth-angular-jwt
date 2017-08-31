function handleLogin(req, res) {
  res.send(`You're logged as ${req.user.username}`)
}

module.exports = handleLogin