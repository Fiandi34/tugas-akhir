"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kabupaten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kabupaten.init(
    {
      Nama: DataTypes.STRING,
      Provinsi_id: DataTypes.STRING,
      Diresmikan: DataTypes.STRING,
      Foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kabupaten",
    }
  );
  return Kabupaten;
};
