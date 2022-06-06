const fs = require('fs');
const util = require('util');
const path = require('path');

const fetchStateData = async () => {
  const fileBuffer = await util.promisify(fs.readFile)(path.join(__dirname, `./school-to-state.json`));
  const fileString = fileBuffer.toString();
  return JSON.parse(fileString);
};

exports.getEthnicities = attendees => {
  return attendees.reduce((ethnicities, reg) => {
    if (ethnicities[reg.ethnicity]) {
      ethnicities[reg.ethnicity]++;
    } else {
      ethnicities[reg.ethnicity] = 1;
    }
    return ethnicities;
  }, {});
};

exports.getEducationLevels = attendees => {
  return attendees.reduce((educationLevels, reg) => {
    if (educationLevels[reg.degree]) {
      educationLevels[reg.degree]++;
    } else {
      educationLevels[reg.degree] = 1;
    }
    return educationLevels;
  }, {});
};

exports.getFemalesPercent = attendees => {
  const femaleCount = attendees.filter(a => a.gender === `Female`).length;
  const totalCount = attendees.length;
//   const femalePercentage = (femaleCount / totalCount) * 100;
  const femalePercentage = 35; // Actual from MLH check-in data
  return femalePercentage;
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
