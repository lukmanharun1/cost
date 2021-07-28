const express = require('express');
const models = require('../models');
const axios = require('axios');

const API_KEY = 'e4dd6ae85f21c3e8a0ec8e2661b0f592';

const createCost = async (req, res) => {
    const asal = req.body.asal;
    const tujuan = req.body.tujuan;
    const berat = req.body.berat;
    const kurir = req.body.kurir;
    if (typeof asal === 'undefined') {
        res.status(400).send({
           'status': 'validation error',
            'message': 'asal harus integer!'
        });
    } else if (typeof tujuan === 'undefined') {
        res.status(400).send({
            'status': 'validation error',
             'message': 'tujuan harus integer!'
         });
    } else if (typeof berat === 'undefined') {
        res.status(400).send({
            'status': 'validation error',
             'message': 'berat harus integer!'
         });
    } else if (typeof kurir === 'undefined' || typeof tujuan === 'integer') {
        res.status(400).send({
            'status': 'validation error',
             'message': 'tujuan harus jne, pos, tiki.'
         });
    } else if (kurir === 'jne' || kurir === 'pos' || kurir === 'tiki') {
        const asalKota = await axios.get(`http://localhost:5000/api/kota/${asal}`);
        const provinsiId = asalKota.data.data[0].provinsi_id;
        if (!provinsiId) {
            res.status(400).send({
                'status': 'error',
                'message': 'asal kota / kabupaten tidak ada'
            });
        }
        const asalProvinsi = await axios.get(`http://localhost:5000/api/provins/${asal}`)
        // await axios.get()
        //  await axios.post(`https://api.rajaongkir.com/starter/cost`, {
        //     key: API_KEY,
        //     origin: asal,
        //     destination: tujuan,
        //     weight: berat,
        //     courier: kurir
        // }).then(success => {

        //     console.log(success.data);
        //     res.status(200).send(success.data);
        // }).catch(err => {
        //     res.status(400).send({
        //         'status': 'error rajangokir',
        //         'message': err
        //     });
        // });
    } else {
        
        res.status(400).send({
            'status': 'validation error',
             'message': 'kurir harus jne, pos, tiki.'
         });
    }
}

module.exports = {
    createCost
}

