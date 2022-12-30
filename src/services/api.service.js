const axios = require('axios');
const qs = require('qs');

class ApiService {
    async post(data) {
        try {
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }

            const response = await axios.post(`http://138.68.29.250:8082/`, qs.stringify(data), { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getNameSurnameAndEmailCodes(name, surname, email) {
        const data = {
            nome: name,
            sobrenome: surname,
            email: email
        };

        return this.post(data)
            .then((response) => {
                // get everything surrounded by '#'
                const regex = /#(.*?)#/g

                return response.match(regex).join(" ").replace(/#/g, "").split(" ");
            })
            .catch((error) => {
                throw error;
            });
    }
}

module.exports = new ApiService();
