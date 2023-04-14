function getApi() {
    fetch('https://soundgarden-api.vercel.app/events/', {
        method: 'GET'
    }) 

    .then((resposta) => {
        resposta.json()
        .then((respostaConvertida) => {
            console.log(respostaConvertida)
        })
    })

}

getApi()