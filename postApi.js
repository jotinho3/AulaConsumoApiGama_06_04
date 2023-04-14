async function postApi() {

    try {
         const resultado = await fetch('https://soundgarden-api.vercel.app/events', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        },
        body: JSON.stringify({
            "name": "Evento do Jota",
            "poster": "link da imagem",
            "attractions": [
                "Cantor 1"
            ],
            "description": "Evento incrivel do jota",
            "scheduled": "2022-03-24T00:57:37.761Z",
            "number_tickets": 10
        }),

    })

    console.log(await resultado.json())
    } 
    catch (error) {
        console.log(error)
        
    }
    
   
    
}

postApi()