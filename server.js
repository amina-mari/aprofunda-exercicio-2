const express = require('express')
const {v4: uuidv4} = require('uuid')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3333)

let posts = []

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
})

app.get('/post/:id', (req, res) => {
    foundedPost = posts.find(post => post.id === req.params.id)

    if(foundedPost) res.status(200).send(foundedPost);
    else res.status(404).send({message: "Post não encontrado na base de dados, verifique se o ID digitado está correto."})
})

app.post('/post', (req, res) => {
    if(req.body.content 
    && req.body.format
    && Object.keys(req.body).length === 2) {
        const newPost = {
            id: uuidv4(),
            content: req.body.content,
            format: req.body.format,
            created_at: new Date().toLocaleString('pt-br')
        }

        posts.push(newPost);

        res.status(201).send({message: "Criado o novo post", post: newPost})
    }
    else {
        res.status(400).send({message: "A solicitação foi feita em formato incorreto, verifique e tente novamente."})
    }
})

app.put('/post/:id', (req, res) => {
    post = posts.find(post => post.id === req.params.id);
    
    if(post){
        if(req.body.content 
            && req.body.format
            && post){
                post.content = req.body.content;
                post.format = req.body.format;
                post.changed_at = new Date().toLocaleString('pt-br')
        
                res.status(200).send({message: "O post foi alterado com sucesso", post})
        } else {
            res.status(400).send({message: "Solicitação incompleta, verifique e tente novamente."})
        }
    } else res.status(404).send({message: "Post não encontrado na base de dados, verifique se o ID digitado está correto."})
})

app.patch('/post/:id', (req, res) => {
    post = posts.find(post => post.id === req.params.id);

    if(post){
        post.content = req.body.content || post.content;
        post.format = req.body.format || post.format;
        post.changed_at = new Date().toLocaleString('pt-br');

        res.status(200).send({message: "Post alterado com sucesso", post})
    } else res.status(404).send({message: "Post não encontrado na base de dados, verifique se o ID digitado está correto."})
    
})

app.delete('/post/:id', (req, res) => {
    post = posts.find(post => post.id === req.params.id);

    if(post) {
        posts = posts.filter(post => post.id !== req.params.id) 
        res.status(200).send({message: "Post deletado com sucesso"});     
    } else res.status(404).send({message: "Post não encontrado na base de dados, verifique se o ID digitado está correto."})
})