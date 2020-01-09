import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;

    if (!req.body) {
        res.status(400).send('Bad Request');
        return;
    }

    if(email !== 'rdd9223@gmail.com' || password !== 'qwerty') {
        res.status(401).send('Unauthorized');
        return;
    }

    res.send({
        id: 'haaa-am',
        email: email,
        name: '김개똥',
        age: 20
    })
})

module.exports = app.listen(3000, () => {
    console.log('Awesome TDD + ES6 app listening on port 3000!');
});