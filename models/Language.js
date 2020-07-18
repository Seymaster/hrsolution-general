"use strict"

const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;
const config        = require("../config/config");

const languageSchema = new Schema({
    language: {
        type: String,
        required: true
    },
    proficiency: {
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

const LanguageModel = mongoose.model('Language', languageSchema)

module.exports = LanguageModel