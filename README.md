# API LinkedInd

Esta foi uma API criada como Segundo Exercício do curso Aprofunda PretaLab em um ambiente de execução NodeJS usando o Framework Express para gerenciamento de endpoints e também Nodemon para automação de execução no terminal.

## 1. Endpoints

| Método   | Rota  |
|--------  |----- |
| GET      | **/posts** <p>Retorna um array de objetos com todos os posts na API. </p> <p>Retorna Status Code 200 e os dados dos posts no formato JSON descrito no item 1.1</p> 
| GET    | **/post/:id** <p>Retorna um post da API que tem o mesmo ID que o informado na URl no formato JSON descrito no item 1.2</p><p>**Se o post não for encontrado na base de dados:** Retorna um Status Code 404 e a mensagem ```Post não encontrado na base de dados, verifique se o ID digitado está correto.```</p>
| POST   | **/post** <p>Permite a inserção de um novo POST na API no formato descrito do item 1.3</p><p>**Se os dados estiverem corretos:** Insere o post na API, retorna Status Code 201 e a mensagem ```Criado o novo post```</p> <p>**Em caso de dados incorretos/inconsistentes**: Retorna Status Code 400 e a mensagem  ```A solicitação foi feita em formato incorreto, verifique e tente novamente.```</p>
| PUT | **/post/:id** <p>Permite a alteração completa dos dados do post com id igual ao do informado na URL. Também grava/atualiza no objeto o horário que foi feita a última alteração através do atributo ```changed_at```. Exige que os dados do corpo da requisição estejam no formato descrito no item 1.3</p><p>**Se os dados estiverem corretos e o post for encontrado:** Faz a alteração dos dados do post, retorna Status Code 200, a mensagem ```O post foi alterado com sucesso``` e também uma cópia do post pós-alteração</p><p>**Se o post não for encontrado na base de dados:** Retorna um Status Code 404 e a mensagem ```Post não encontrado na base de dados, verifique se o ID digitado está correto.```</p> <p>**Se o corpo da requisição estiver incompleto (diferente do item 1.3):** Retorna um Status Code 400 e a mensagem ```Solicitação incompleta, verifique e tente novamente.```</p>
| PATCH | **/post/:id** <p>Permite a alteração de 1 ou mais atributos de um post específico. Também grava/atualiza no post o horário da sua última modificação através do atributo ``` changed_at```</p><p>**Se os dados estiverem corretos e o post for encontrado:** Faz a alteração dos dados do post, retorna Status Code 200, a mensagem ```Post alterado com sucesso``` e também uma cópia do post pós-alteração</p><p>**Se o post não for encontrado na base de dados:** Retorna um Status Code 404 e a mensagem ```Post não encontrado na base de dados, verifique se o ID digitado está correto.```</p>
| DELETE | **/post/:id** <p>Permite a exclusão de um post da base de dados.</p><p>**Se o post for encontrado:** Deleta o post, retorna um Status Code 200 e a mensagem ```Post deletado com sucesso```</p><p>**Se o post não for encontrado na base de dados:** Retorna um Status Code 404 e a mensagem ```Post não encontrado na base de dados, verifique se o ID digitado está correto.```</p>

### 1.1 Formato de JSON devolvido pela API no Endpoint GET /posts

```
[
    {
        "id": number,
        "content": string,
        "format": string,
        "created_at": string,
     ?  "changed_at": string
    },
    {
        "id": number,
        "content": string,
        "format": string,
        "created_at": string,
     ?  "changed_at": string
    }
    {
        "id": number,
        "content": string,
        "format": string,
        "created_at": string,
     ?  "changed_at": string
    }
]
```

### 1.2 Formato de JSON devolvido pela API no Endpoint GET /post

```
{
    "id": number,
    "content": string,
    "format": string,
    "created_at": string,
 ?  "changed_at": string
}
```

### 1.3. Formato de JSON aceito no Endpoint POST /post e PUT /post/:id

```
{
    "content": string,
    "format": string,
}  

```



# 2. Testagem de Endpoints no Insomnia


---------

API desenvolvida or *Mariana Amina*. Todos os direitos reservados. 