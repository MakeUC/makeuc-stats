const axios = require('axios').default;

exports.fetchData = async () => {
  const token = process.env.API_TOKEN;
  const res = await axios.get(`https://revolutionuc-api.herokuapp.com/api/v2/admin/registrants?page=1&limit=5000&full=true`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data.items;
};
