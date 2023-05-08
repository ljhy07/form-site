const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    datebase: 'friend'
});
// const user = {
//     name = 
// };

const app = express();
app.set('port', process.env.PORT || 3000);

connection.connect();

app.get('/', (rep, res) => {
    res.send('Root');
});

app.set('/users', (rep, res) =>{
    connection.query('select * from friend.users', (error, rows) => {
        if (error) throw error;
        console.log ('User info is: ', rows); 
        res.send(rows);
    });
});

/*
app.set('/users', (rep, res) =>{
    connection.query(`insert into users (id, userId, password, name, email, phone) values('${userId}', '${pw}', '${name}', '${email}', '${phone}');`)
});
*/

app.listen(app.set('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});

connection.end();