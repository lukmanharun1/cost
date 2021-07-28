'use strict';

module.exports = (sequelize, DataTypes) => {
  const provinsi = sequelize.define(
    "provinsi",
    {
        nama_provinsi: DataTypes.STRING
    },
    {
      tableName: 'provinsi',
      timestamps: false
    }
  )
  provinsi.associate = function (models) {
  }
  return provinsi;
}