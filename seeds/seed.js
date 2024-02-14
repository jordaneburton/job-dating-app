const sequelize = require('../config/connections');
<<<<<<< HEAD
const { User } = require('../models');

 const { Jobs } = require('../models');


=======
const { User, Jobs } = require('../models');
>>>>>>> 7ef88548337bee8e17e4513e4744ea7a2f14c39b

const seedJob = require('./jobSeed.json');
const seedUser = require('./userSeed.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

<<<<<<< HEAD
    //await Jobs.bulkCreate(seedJob)
=======
  await Jobs.bulkCreate(seedJob)
>>>>>>> 7ef88548337bee8e17e4513e4744ea7a2f14c39b

  process.exit(0);
};

seedAll();