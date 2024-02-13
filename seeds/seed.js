const sequelize = require('../config/connections');
const { User, Jobs } = require('../models');

const seedJob = require('./jobSeed.json');
const seedUser = require('./userSeed.json');

const seedAll = async () => {
<<<<<<< HEAD
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(seedUser, {
        individualHooks: true,
        returning: true,
    });

    await Jobs.bulkCreate(seedJob)

    process.exit(0);
=======
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

  await Jobs.bulkCreate(seedJob)

  process.exit(0);
>>>>>>> 57b818a792852e3f4b0ccd315d98012081dcb644
};

seedAll();