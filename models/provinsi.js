'use strict';


module.exports = (sequelize, DataTypes) => {
  const provinsi = sequelize.define(
    "provinsi",
    {
        nama_provinsi: DataTypes.STRING
    },
    {}
  )
  provinsi.associate = function (models) {

  }
  return provinsi;
}
  // class Kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
      // define association here
    // }
  // };
//   Kota.init({
//     provinsi: DataTypes.STRING,
//     type: DataTypes.STRING,
//     nama_kota: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Kota',
//   });
//   return new Kota;
// }
// module.exports = kota;
 


// 'use strict';
// const {
//   Model,
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Provinsi extends Model {
//     static init ()
//     // options.tableName = 'provinsi';
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here

//     }
    
//   };
//   Provinsi.init( {
//     nama_provinsi: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'Provinsi',
//   });
//   return Provinsi;
// };