const greeting = require('@zeit-now-monorepo/shared');

module.exports = (req, res) => {
  res.end(greeting.hello('World'));
};
