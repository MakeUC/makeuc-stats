require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const {
  fetchRegistrantData,
  getEthnicities,
  getEducationLevels,
  getFemalesPercent,
  getUniversityCount,
  getStateCount
} = require('./stats');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, `../build`)));

app.get(`/stats`, async (req, res) => {
  try {
    const registrants = await fetchRegistrantData();
    const stats = {
      count: registrants.length,
      ethnicities: getEthnicities(registrants),
      educationLevels: getEducationLevels(registrants),
      femalesPercent: getFemalesPercent(registrants),
      universityCount: getUniversityCount(registrants),
      stateCount: await getStateCount(registrants)
    };

    res.json({ stats });
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error: ${err.message}`);
  }
});

const env = process.env.NODE_ENV;
const port = (env === `development`) ? 3000 : process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));
