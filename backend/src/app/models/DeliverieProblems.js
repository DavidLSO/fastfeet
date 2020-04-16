import Sequelize, { Model } from 'sequelize';

class DeliverieProblems extends Model {
  static init(sequelize) {
    super.init(
      {
        delivery_id: Sequelize.INTEGER,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Deliverie, {
      foreignKey: 'delivery_id',
      as: 'delivery',
    });
  }
}

export default DeliverieProblems;
