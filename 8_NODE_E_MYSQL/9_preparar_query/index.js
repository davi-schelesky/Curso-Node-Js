const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn');

const app = express();

// Config para ter acesso ao body da req em JSON
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pageqty = req.body.pagesqty;

    // Coloca-se as interregações para melhorar a segurança do sistema
    // ?? para a coluna e ? para a variável
    const query =`INSERT INTO books (??, ??) VALUES (?, ?)`;
    const data = ['title', 'pageqty', title, pageqty];

    pool.query(query, data, (error) => {
        if (error) {
            console.log(error);
            return;
        }
        res.redirect('/books');
    });
})

app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books';
    
    pool.query(query, (error, data) => {
        if(error) {
            console.log(error);
            return;
        }
        const books = data;
        res.render('books', { books });
    })
})
app.get('/book/:id', (req, res) => {
    const id = req.params.id;

    const query = `SELECT * FROM books WHERE ?? = ?`;
    const data = ['id', id];

    pool.query(query, data, (error, data) => {
        if(error) {
            console.log(error);
            return;
        }
        const book = data[0];
        res.render('book', { book });
    })
})
app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM books WHERE ?? = ?`;
    const data = ['id', id];

    pool.query(query, data, (error, data) => {
        if(error) {
            console.log(error);
            return;
        }
        const book = data[0];
        res.render('editbook', { book });
    })
})
app.post('/books/updatebook', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const pageqty = req.body.pagesqty;

    const query = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
    const data = ['title', title, 'pageqty', pageqty, 'id', id];

    pool.query(query, data, (error, data) => {
        if(error) {
            console.log(error);
            return;
        }
        res.redirect('/books');
    })
})
app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id;

    const query = `DELETE FROM books WHERE ?? = ?`;
    const data = ['id', id];

    pool.query(query, data, (error, data) => {
        if(error) {
            console.log(error);
            return;
        }
        res.redirect('/books');
    })
})

app.listen(3000, () => console.log(`Server rodando na porta 3000!`));