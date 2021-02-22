const fs = require('fs');
const util = require('util');
const path = require('path');
const { fetchData } = require('./data');

const SHOW_REGISTRANT_DATA = process.env.SHOW_REGISTRANT_DATA === `true`;

const fetchStateData = async () => {
  const fileBuffer = await util.promisify(fs.readFile)(path.join(__dirname, `./school-to-state.json`));
  const fileString = fileBuffer.toString();
  return JSON.parse(fileString);
};

exports.fetchRegistrantData = async (checkedIn = !SHOW_REGISTRANT_DATA) => {
  const registrants = await fetchData();
  return checkedIn ? registrants.filter(r => r.checkedIn) : registrants;
};

const processEths = (ethnicities, ethnicity) => {
  let eth = ethnicity;
  if(ethnicity === `Indian`) {
    eth = `American Indian`;
  }
  if (ethnicities[eth]) {
    ethnicities[eth]++;
  } else {
    ethnicities[eth] = 1;
  }
};

exports.getEthnicities = attendees => {
  return attendees.reduce((ethnicities, reg) => {
    if(Array.isArray(reg.ethnicity)) {
      reg.ethnicity.forEach(ethnicity => {
        processEths(ethnicities, ethnicity);
      });
    } else {
      processEths(ethnicities, reg.ethnicity);
    }
    return ethnicities;
  }, {});
};

exports.getEducationLevels = attendees => {
  return attendees.reduce((educationLevels, reg) => {
    if (educationLevels[reg.educationLevel]) {
      educationLevels[reg.educationLevel]++;
    } else {
      educationLevels[reg.educationLevel] = 1;
    }
    return educationLevels;
  }, {});
};

exports.getFemalesPercent = attendees => {
  const femaleCount = attendees.filter(a => a.gender === `Female`).length;
  const totalCount = attendees.length;
  const femalePercentage = (femaleCount / totalCount) * 100;
  return femalePercentage.toFixed(1);
};

exports.getUniversityCount = attendees => {
  const universityCount = [...new Set(
    attendees.map(a => a.school)
  )];
  return universityCount.length;
};

exports.getCountryCount = attendees => {
  const countryCount = [...new Set(
    attendees.map(a => a.country)
  )];
  return countryCount.length;
};

exports.getStateCount = async attendees => {
  const schoolToState = await fetchStateData();
  const stateCount = [...new Set(
    attendees.map(attendee => {
      const entry = schoolToState.find(
        s => s.school === attendee.school
      );
      return entry ? entry.state : ``;
    })
  )];
  return stateCount.length;
};
