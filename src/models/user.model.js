const TYPES = require('tedious').TYPES;

class User {
    constructor(database) {
        this.database = database;
    }

    insertNameSurnameAndEmail(name, nameCod, surname, surnameCod, email, emailCod) {
        const paramenters = [
            {
                name: 'name',
                type: TYPES.NVarChar,
                value: name
            },
            {
                name: 'name_cod',
                type: TYPES.Int,
                value: nameCod
            },
            {
                name: 'surname',
                type: TYPES.NVarChar,
                value: surname
            },
            {
                name: 'surname_cod',
                type: TYPES.Int,
                value: surnameCod
            },
            {
                name: 'email',
                type: TYPES.NVarChar,
                value: email
            },
            {
                name: 'email_cod',
                type: TYPES.Int,
                value: emailCod
            }
        ];

        const query = `
            INSERT INTO tbs_nome (nome, cod) VALUES (@name, @name_cod);
            INSERT INTO tbs_sobrenome (sobrenome, cod) VALUES (@surname, @surname_cod);
            INSERT INTO tbs_email (email, cod) VALUES (@email, @email_cod);
        `;

        return this.database.query(query, paramenters)
    }

    getNameSurnameAndEmailSum(nameCod, surnameCod, emailCod) {
        const paramenters = [
            {
                name: 'name_cod',
                type: TYPES.Int,
                value: nameCod
            },
            {
                name: 'surname_cod',
                type: TYPES.Int,
                value: surnameCod
            },
            {
                name: 'email_cod',
                type: TYPES.Int,
                value: emailCod
            }
        ];

        const query = `
            SELECT TOP 1 cod, soma FROM tbs_cod_nome WHERE cod = @name_cod;
            SELECT TOP 1 cod, soma FROM tbs_cod_sobrenome WHERE cod = @surname_cod;
            SELECT TOP 1 cod, soma FROM tbs_cod_email WHERE cod = @email_cod;
        `;

        return this.database.query(query, paramenters);
    }

    getAnimalColorAndCountry(total) {
        const paramenters = [
            {
                name: 'total',
                type: TYPES.BigInt,
                value: total
            }
        ];

        const query = `
            SELECT TOP 1 animal AS name FROM tbs_animais WHERE total = @total;
            SELECT TOP 1 pais AS name FROM tbs_paises WHERE total = @total;
            SELECT TOP 1 tbs_cores.cor AS name FROM tbs_cores
                LEFT JOIN tbs_cores_excluidas ON tbs_cores.cor = tbs_cores_excluidas.cor
                AND tbs_cores.total = tbs_cores_excluidas.total
            WHERE
                tbs_cores_excluidas.cor IS NULL
                AND tbs_cores.total = @total;
        `;

        return this.database.query(query, paramenters);
    }
}

module.exports = (database) => {
    return new User(database);
}
