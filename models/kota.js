'use strict';

module.exports = (sequelize, DataTypes) => {
  const kota = sequelize.define(
    "kota",
    {
      provinsi_id: DataTypes.INTEGER,
      type: DataTypes.STRING,
      nama_kota: DataTypes.STRING,
      
      kode_pos: DataTypes.STRING,
    },
    {
      tableName: 'kota',
      timestamps: false
    }
  )
  kota.associate = function (models) {

  }
  return kota;
}