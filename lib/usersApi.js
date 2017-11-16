const faker = require("faker");

const generateUser = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  };
};

const generateUsersForAmount = amount => {
  return Array(amount)
    .fill()
    .map(x => generateUser());
};

// Try changing this number to see if your solution can handle lots of data (think BIG!)
const amountOfUsers = 100;
const users = generateUsersForAmount(amountOfUsers);

/**
 * The function used for searching through all the users
 * @param {*} filter - filter to search users for
 */
const searchUsers = filter => {
  // You should only need to write code inside of this function (except for the amountOfUsers)
  return users;
};

module.exports = searchUsers;
