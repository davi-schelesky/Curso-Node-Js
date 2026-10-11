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

    const query =`INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;
    pool.query(query, (error) => {
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

    const query = `SELECT * FROM books WHERE id = ${id}`;

    pool.query(query, (error, data) => {
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
    const query = `SELECT * FROM books WHERE id = ${id}`;

    pool.query(query, (error, data) => {
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

    const query = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id}`;
    pool.query(query, (error, data) => {
        if(error) {
            console.log(error);
            return;
        }
        res.redirect('/books');
    })
})
app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id;

    const query = `DELETE FROM books WHERE id = ${id}`;

    pool.query(query, (error, data) => {
        if(error) {
            console.log(error);
            return;
        }
        res.redirect('/books');
    })
})

app.listen(3000, () => console.log(`Server rodando na porta 3000!`));