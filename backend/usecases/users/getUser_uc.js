const userRepository = require('../../repositories/userRepository');

const handle = async (validatedUserId) => {
  const foundUser = await userRepository.getById(validatedUserId);
  const removeProp = 'password';
  const { [removeProp]: remove, ...rest } = foundUser;
  return rest;
};

module.exports = { handle };
