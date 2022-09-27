const express = require('express')
const app = express()
const PORT = 8000

const employers = {
    'seun kuti': {
        'age': 24,
        'occupation': 'project manager',
        'description': 'full-time'
        
    },
    'elizabeth moses':{
        'age': 22,
        'occupation': 'software engineer',
        'description': 'remote'
    },
    'duke milan':{
        'age': 26,
        'occupation': 'product markerter',
        'description': 'on-site'
    },
    'unknown':{
        'age': 'unknown',
        'occupation': 'unknown',
        'description': 'unknown'
        
    }
}

app.get('/', (req,res)=> {
    response.sendFile(__dirname + '/index.html')
})


app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT} ! Beta go catch it!`)
})


app.get('/api/:name', (request,response)=> {
    console.log(request.params.name.bright)
    response.json(employers)
})