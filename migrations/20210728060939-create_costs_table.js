'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('cost', { 
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      code: Sequelize.STRING,
      name: Sequelize.STRING,
      deskripsi: Sequelize.STRING,
      harga: Sequelize.INTEGER,
      hari: Sequelize.STRING,
      catatan: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('cost');
     */
     await queryInterface.dropTable('cost');
  }
};
