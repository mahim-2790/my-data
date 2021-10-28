const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from second node');
});

const users = [
    { id: 0, name: 'shabana', email: 'shabana@tuttut.com' },
    { id: 1, name: 'shabnoor', email: 'shabana@tuttut.com' },
    { id: 2, name: 'shusmmita', email: 'shabana@tuttut.com' },
    { id: 3, name: 'srabonti', email: 'shabana@tuttut.com' },
    { id: 4, name: 'soniya', email: 'shabana@tuttut.com' },
    { id: 5, name: 'kajal', email: 'shabana@tuttut.com' },
    { id: 6, name: 'dipikaa', email: 'shabana@tuttut.com' }
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
    // res.send(users);
});

app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    const user = users[index];
    res.send(user);
});

// app.get('/fruits', (req, res) => {
//     res.send(['mango', 'apple', 'passion fruit', 'orange']);
// })

// app.get('fruits/mangoes/fazli', (req, res) => {
//     res.send('fruits');
// });

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hiting the post", req.body);
    res.send('inserted');
})

app.listen(port, () => {
    console.log("listening to port:", port);

});