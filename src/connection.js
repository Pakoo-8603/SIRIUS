const mysql = require ('mysql');
const { promisify } = require('util'); 

/* The code below is used to connect to the database.
1. Create a connection with the database
2. Connect to the database
3. Select the database
4. Create a pool of connections to the database */
const connection = mysql.createPool({ 
    host: 'localhost',
    user: 'prueba',
    password: '123456',
    database: 'prueba'
});

/* The code below is used to test the connection to the database.
1. Connects to the MySQL database.
2. If there is an error, it is thrown and the program stops.
3. If there is no error, a message is displayed on the console. */
connection.getConnection(
    (err,conn)=>{
        if (err) throw err;
        console.log('Base de datos conectada correctamente.');
    }
);
connection.query = promisify(connection.query);
module.exports = connection;