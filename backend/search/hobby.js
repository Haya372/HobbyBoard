const { Op } = require("sequelize");
const { response } = require("express");
const models = require("../models");
const lunr = require("lunr");
require('lunr-languages/lunr.stemmer.support.js')(lunr);
require('lunr-languages/tinyseg.js')(lunr);
require('lunr-languages/lunr.ja.js')(lunr);
require('lunr-languages/lunr.multi')(lunr);

module.exports.lunr_promise = async function() {
    const hobbies = await models.Hobby.findAll();
    return lunr( function () {

        this.ref("id");
        this.field("title");
        this.field("content");
        this.use(lunr.multiLanguage("en", "ja"));
        
         hobbies.forEach(function (hobby) {
            this.add(hobby.dataValues);
            
        }, this);
    });
};



