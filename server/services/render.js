const { response } = require("express");

exports.renderHome = (req,res)=>{
    res.render("index");
}