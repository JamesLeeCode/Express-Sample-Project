const express = require('express');

const app = express();


app.use(express.json());
const PORT = 3000;


let users = [
    {id:1, username: 'James', department: 'IT'},
    {id:2, username: 'John', department: 'HR'},
    {id:3, username: 'Mary', department: 'Finance'} 
]

app.get('/users', (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));


    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

app.post('/users', (req, res) => {
    const newUser = {
        id: Date.now(),
        username: req.body.username,
        department: req.body.department
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
       
app.delete('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});   

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});