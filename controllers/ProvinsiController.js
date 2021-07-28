const express = require('express');
const models = require('../models');

const getAllProvinsi = async (req, res) => {
    // ambil seluruh data di tabel provinsi
    try {
        const getAllProvinsi = await models.provinsi.findAll({});
        res.status(200).send({
            'status': 'success',
            'data': getAllProvinsi
        });
    } catch (error) {
        res.status(503).send({
            'status': 'error',
            'message': error
        });
    }
}

module.exports = {
    getAllProvinsi
}