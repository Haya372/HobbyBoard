const { Op } = require("sequelize");
const { response } = require("express");
const models = require("../models");
const lunr = require("lunr");
require('lunr-languages/lunr.stemmer.support.js')(lunr);
require('lunr-languages/tinyseg.js')(lunr);
require('lunr-languages/lunr.ja.js')(lunr);
require('lunr-languages/lunr.multi')(lunr);

module.exports.lunr_promise = async function() {
    const gathers = await models.Gather.findAll();
    return lunr( function () {

        this.ref("id");
        this.field("title");
        this.field("content");
        this.use(lunr.multiLanguage("en", "ja"));
        
         gathers.forEach(function (gather) {
            this.add(gather.dataValues);
            
        }, this);
    });
};



