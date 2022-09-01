const { dbConnection } = require("../database/config");


const emailExistRegister = async (email = '') => {

    //Verificar si el correo existe
    let Iquery = `select email from users where email = '${email}'`;
    let results = await dbConnection(Iquery);
    if (results.recordset.length > 0) {
        throw new Error(`El correo: ${email}, ya esta existente`);
    }
}



module.exports= {
    emailExistRegister,
}