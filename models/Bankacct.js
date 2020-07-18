"use strict"

const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;
const config        = require("../config/config");
const autoIncrement = require('mongoose-auto-increment');

// autoIncrement.initialize(mongoose.createConnection(config.dbUrl,{useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify: false,useCreateIndex: true}))

const bankacctSchema = new Schema({
    account_title: {
        type: String,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    account_number: {
        type: Number,
        unique: true,
        require: true
    },
    bank_code: {
        type: Number,
        required: true
    },
    bank_branch: {
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

// bankacctSchema.plugin(autoIncrement.plugin,{model: 'bankacctSchema', field: '_id',startAt:1,incrementBy:1});

const BankacctModel = mongoose.model('Bankaccount', bankacctSchema)

module.exports = BankacctModel
