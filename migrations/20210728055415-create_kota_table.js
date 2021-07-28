'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('kota', { 
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER
        },
        provinsi_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'provinsi', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
         }
        },
        type: {
          type: Sequelize.STRING,
        },
        nama_kota: {
          type: Sequelize.STRING,
        },
        kode_pos: {
          type: Sequelize.STRING,
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('kota');
  }
};
