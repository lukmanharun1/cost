const express = require('express');
const models = require('../models');

const getAllKota = async (req, res) => {
    // ambil seluruh data di tabel kota
    try {
        const getAllKota = await models.kota.findAll({});
        res.status(200).send({
            'status': 'success',
            'data': getAllKota
        });
    } catch (error) {
        res.status(503).send({
            'status': 'error',
            'message': error
        });
    }
}

const getKotaById = async (req, res) => {
    // ambil data kota berdasarkan id
    try {
        const id = req.params.id;
        const getKota = await models.kota.findAll({
            where: {
                id
            }
        });
        res.status(200).send({
            'status': 'success',
            'data': getKota
        });
    } catch (error) {
        res.status(503).send({
            'status': 'error',
            'message': error
        });
    }
}

module.exports = {
    getAllKota,
    getKotaById
}