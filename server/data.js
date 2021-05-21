const data = require('./data.json');

exports.fetchData = () => data.filter(d => d.isVerified === `TRUE`);