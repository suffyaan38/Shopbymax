// const mysql=require('mysql2');
// const pool=mysql.createPool({
//     host: 'localhost',
//     user:'root',
//     database: 'nodecomplete',
//     password:'password'
// });

// module.exports=pool.promise();

const Sequelize=require('sequelize');
const sequelize=new Sequelize('backendbymax','root','password',
{dialect:'mysql', 
host:'localhost'
});

module.exports=sequelize;