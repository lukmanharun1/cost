'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('provinsi', 
   [
    {
        "nama_provinsi": "Bali"
    },
    {
        "nama_provinsi": "Bangka Belitung"
    },
    {
        "nama_provinsi": "Banten"
    },
    {
        "nama_provinsi": "Bengkulu"
    },
    {
        "nama_provinsi": "DI Yogyakarta"
    },
    {
        "nama_provinsi": "DKI Jakarta"
    },
    {
        "nama_provinsi": "Gorontalo"
    },
    {
        "nama_provinsi": "Jambi"
    },
    {
        "nama_provinsi": "Jawa Barat"
    },
    {
        "nama_provinsi": "Jawa Tengah"
    },
    {
        "nama_provinsi": "Jawa Timur"
    },
    {
        "nama_provinsi": "Kalimantan Barat"
    },
    {
        "nama_provinsi": "Kalimantan Selatan"
    },
    {
        "nama_provinsi": "Kalimantan Tengah"
    },
    {
        "nama_provinsi": "Kalimantan Timur"
    },
    {
        "nama_provinsi": "Kalimantan Utara"
    },
    {
        "nama_provinsi": "Kepulauan Riau"
    },
    {
        "nama_provinsi": "Lampung"
    },
    {
        "nama_provinsi": "Maluku"
    },
    {
        "nama_provinsi": "Maluku Utara"
    },
    {
        "nama_provinsi": "Nanggroe Aceh Darussalam (NAD)"
    },
    {
        "nama_provinsi": "Nusa Tenggara Barat (NTB)"
    },
    {
        "nama_provinsi": "Nusa Tenggara Timur (NTT)"
    },
    {
        "nama_provinsi": "Papua"
    },
    {
        "nama_provinsi": "Papua Barat"
    },
    {
        "nama_provinsi": "Riau"
    },
    {
        "nama_provinsi": "Sulawesi Barat"
    },
    {
        "nama_provinsi": "Sulawesi Selatan"
    },
    {
        "nama_provinsi": "Sulawesi Tengah"
    },
    {
        "nama_provinsi": "Sulawesi Tenggara"
    },
    {
        "nama_provinsi": "Sulawesi Utara"
    },
    {
        "nama_provinsi": "Sumatera Barat"
    },
    {
        "nama_provinsi": "Sumatera Selatan"
    },
    {
        "nama_provinsi": "Sumatera Utara"
    }
])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('provinsi', null, {});
  }
};
