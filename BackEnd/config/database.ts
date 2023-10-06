import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('soundstream2', 'admin', 'aws-semi1-admin', {
  host: 'db-soundstream.cy2qmba75xyc.us-east-2.rds.amazonaws.com',
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
  },
});

export default sequelize;
