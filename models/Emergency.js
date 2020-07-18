"use strict"

const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;
const config        = require("../config/config");

const emergencySchema = new Schema({
    relationship: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    primary_cont: {
        type : Boolean,
        required: true,
        default: false
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    home_phone: {
        type: Number,
        required: true
    },
    work_phone: {
        type: Number,
        required: false
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: true
    },
    zip_code:{
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },    
    date_created: {
        type: Date,
        default: Date.now
    },
    date_modified: {
        type: Date
    },
    owned_by: {
        type: Number,
        ref: 'User'
    }

});

const EmergencyModel = mongoose.model('Emergencycontact', emergencySchema)

module.exports = EmergencyModel

