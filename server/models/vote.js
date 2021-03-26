'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){
      //runs when json is returned
      return {

        ...this.get(), id:undefined
      }
    }
  };
  Vote.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {msg: 'Name must be entered'},
        notNull: {msg: 'Name must not be empty'},
      }
    },
    choice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate:{
        notEmpty: {msg: 'Choice must be entered'},
        notNull: {msg: 'Choice must not be empty'},
      }
    },
    casted_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate:{
        notEmpty: {msg: 'Date must be entered'},
        notNull: {msg: 'Date must not be empty'},
      }
    }
  }, {
    sequelize,
    tableName: 'votes',
    modelName: 'Vote',
  });
  return Vote;
};