const sequelize = require('../config/connections');
const { User } = require('../models');
// const { Jobs } = require('../models');
const seedJob = require('./jobSeed.json');
const seedUser = require('./userSeed.json');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedJob();

    await seedUser();

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

      process.exit(0);
};

seedAll();