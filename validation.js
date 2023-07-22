const joi = require('@hapi/joi');

// Blueprint of Javascript objects
const registerValidation = (data) =>{
const schema = joi.object({
    username : joi.string().min(2).max().required(),
    email : joi.string().email().min(6).required(),
    password : joi.string().min(6).required()
});
 return schema.validate(data);

}





module.exports.registerValidation = registerValidation;