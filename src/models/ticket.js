'use strict';
const {
  Model
} = require('sequelize');
const { enums } = require('../utils/common');
const {PENDING,SUCCESS,FAILED} = enums.NOTIFICATION_STATUS;
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    recipientEmail: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    status: {
      type:DataTypes.ENUM,
      allowNull:false,
      values:[PENDING,SUCCESS,FAILED],
      defaultValue:PENDING,
    },
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};