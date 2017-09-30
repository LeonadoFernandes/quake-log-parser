# Quake Log Parser

Parser de logs do game Quake que retorna os resultados das partidas

### Pré-requisitos

```
NodeJS (Versão 8.0.0 ou acima)
```

### Instalando

Após realizar a clonagem do projeto, entre na projeto da aplicação e execute o código abaixo para instalar as dependências do webserver.

```
npm install
```

Depois de finalizar a execução do código acima, inicie a aplicação executando o código abaixo no terminal/CMD

```
npm start
```

## Executando os testes

A aplicação foi completamente testada usando Jasmine JS e Istanbul para validar a taxa de coverage, para executar a rotina de testes, simplesmente cole o código abaixo em seu terminal

```sh
npm test
```

## Estrutura do Projeto

```
quake-log-parser
├── data
│   └── games.log
├── server
│   ├── controllers
│   │   └── games_controller.js
│   ├── models
│   │   ├── game.js
│   │   ├── parser.js
│   │   └── player.js
│   ├── index.js
│   └── routes.js
├── spec
│   ├── helpers
│   │   └── logHelper.log
│   ├── server
│   │   ├── controllers
│   │   │   └── games_controller_spec.js
│   │   └── models
│   │       ├── game_spec.js
│   │       ├── parser_spec.js
│   │       └── player_spec.js
│   └── support
│       └── jasmine.json
├── .gitignore
├── index.js
└── package.json
```

## Rotas

**LISTAR TODOS OS GAMES**

**GET** ```/api/v1/games```

**200** ```OK```

**Exemplo de retorno**
```
{
    "game_1": {
        "hostname": "Code Miner Server",
        "version": "ioq3 1.36 linux-x86_64 Apr 12 2009",
        "total_kills": 0,
        "players": [
            "Isgalamido"
        ],
        "kills": {
            "Isgalamido": 0
        }
    },
    
    "game_2": {
        "hostname": "Code Miner Server",
        "version": "ioq3 1.36 linux-x86_64 Apr 12 2009",
        "total_kills": 11,
        "players": [
            "Isgalamido",
            "Mocinha"
        ],
        "kills": {
            "Isgalamido": 4,
            "Mocinha": 0
        }
    }
}
```


----------
**BUSCAR UM GAME ESPECÍFICO**

Retorna um game específico a partir de um ID informado 

**POST** ```/api/v1/games/{id}```

**200** ```OK```

**Exemplo de retorno**
```
{
    "hostname": "Code Miner Server",
    "version": "ioq3 1.36 linux-x86_64 Apr 12 2009",
    "total_kills": 14,
    "players": [
        "Zeh",
        "Isgalamido",
        "Zeh",
        "Assasinu Credi"
    ],
    "kills": {
        "Zeh": 0,
        "Isgalamido": 2,
        "Assasinu Credi": 1
    }
}
```

## Técnologias utilizadas

* [Hapi](https://hapijs.com/) - Framework NodeJS
* [Jasmine](https://jasmine.github.io/) - Behavior-Driven Javascript
* [Istanbul](https://istanbul.js.org/) - Javascript Coverage
* [Nodemon](https://nodemon.io/) - Utilitário para atualizar automaticamente o webserver

## Author

* **Paulo Henrique da Silva**