const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const config = require('./../config/database');

class Database {
    constructor() {
        this.connection = new Connection(config);
        this.connection.on('connect', (err) => {
            if (err) {
                console.error('Error connecting to database:', err);
            }
        });

        this.connection.connect();
    }
    
    async query(sql, paramenters) {
        return new Promise((resolve, reject) => {
            const rows = [];
            const request = new Request(sql, (err, _) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
            
            request.on('row', (columns) => {
                const row = {};
                columns.forEach((column) => {
                    row[column.metadata.colName] = column.value;
                });
                rows.push(row);
            });

            paramenters.map((paramenter) => {
                request.addParameter(paramenter.name, paramenter.type, paramenter.value);
            });
            
            this.connection.execSql(request);
        });
    }
}

module.exports = new Database();
