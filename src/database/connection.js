import sql from 'mssql'
import config from '../config'

const dbSettings = {
    user: config.dbUser,
    password : config.dbPassword,
    server: config.dbPassword,
    database: config.dbDatabase,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }, 
}

export async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings);
        return pool;    
    }catch(error){
        console.log(error);
    }
}

export {sql};