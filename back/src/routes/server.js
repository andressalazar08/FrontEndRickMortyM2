const http = require('http');
const characters = require('../utils/data')


http.createServer((req,res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*') //para permitir el acceso del front end de hacer peticiones al back

    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split('/').at(-1);

        //aqui comparamos el id que se encuentra en el archivo data
        // con filter devuelve un array
        //let characterFilter = characters.filter(personaje=> personaje.id===Number(id));
        //otra forma de hacer con find devuelve un objeto
        let characterFilter = characters.find(personaje => personaje.id===Number(id))

        // console.log(characterFilter)

        res.writeHead(200, {'Content-type':'application/json'})
        res.end(JSON.stringify(characterFilter))

    }

}).listen(3001, '127.0.0.1')