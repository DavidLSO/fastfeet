import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import Deliveryman from '../app/models/Deliveryman';
import Deliverie from '../app/models/Deliverie';
import File from '../app/models/File';
import DeliverieProblems from '../app/models/DeliverieProblems';
import databaseConnection from '../config/database';

const models = [
  User,
  File,
  Recipient,
  Deliveryman,
  Deliverie,
  DeliverieProblems,
];
class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConnection);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
