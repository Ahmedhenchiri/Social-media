const isEmpty = require("./isEmpty")
const validator = require ("validator")

module.exports= function ValidatePost(data){
    let error={}
    data.title = !isEmpty(data.title) ? data.title : ""
    data.content = !isEmpty(data.content) ?data.content : ""
}