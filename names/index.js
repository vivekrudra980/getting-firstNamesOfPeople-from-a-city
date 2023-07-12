const peopleNames = require("../country/state/city/index");
const getNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return getNames(peopleNames);
};
module.exports = getPeopleInCity;
