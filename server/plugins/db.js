module.exports = (app) => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost:32768/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
