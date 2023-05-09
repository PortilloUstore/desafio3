/**
 * Cria uma API REST que recebe um objeto employee e o salva em um arquivo JSON.
 * Cria uma API REST que retorna um objeto employee a partir de um id, caso exista, de um arquivo JSON.
 * Se a não existir um objeto employee com o id informado, retorna um erro com status 404.
 * O objeto employee deve ter os seguintes atributos: id, name, email, department e admissionDate.
 */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/employee/:id', (req, res) => {
    const { id } = req.params;
    const employees = JSON.parse(fs.readFileSync('./employees.json', 'utf8'));
    const employee = employees.find((e) => e.id === id);
    if (employee) {
        res.send(employee);
    } else {
        res.status(404).send({ error: 'Employee not found' });
    }
}
);
app.post('/employee', (req, res) => {
    const { id, name, email, department, admissionDate } = req.body;
    const employees = JSON.parse(fs.readFileSync('./employees.json', 'utf8'));
    const employee = { id, name, email, department, admissionDate };
    employees.push(employee);
    fs.writeFileSync('./employees.json', JSON.stringify(employees));
    res.send(employee);
}
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/**
 * Como executar o código acima?
 * 1. Instale o Node.js (https://nodejs.org/en/download/)
 * 2. Instale o NPM (https://www.npmjs.com/get-npm)
 * 3. Instale o nodemon (npm install -g nodemon)
 * 4. Instale o express (npm install express)
 * 5. Instale o body-parser (npm install body-parser)
 * 6. Execute o comando "nodemon index.js" na pasta onde está o arquivo index.js
 * 7. Acesse o endereço http://localhost:3000/employee/1
 * 8. Acesse o endereço http://localhost:3000/employee/2
 * 9. Acesse o endereço http://localhost:3000/employee/3
 */
/**
 * Mostre um exemplo de requisição POST para a API acima, usando CURL
 * curl -X POST \
 *  http://localhost:3000/employee \
 * -H 'Content-Type: application/json' \
 * -d '{
 * "id": "1",
 * "name": "John Doe",
 * "email": "",
 * "department": "IT",
 * "admissionDate": "2019-01-01"
 * }'
 */
