function postApi() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Oi eu sou o jota',
            body: 'lorem ipsum sei la oq',
            userId: 3,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },


    }).then((resposta) => {
        resposta.json()
        .then((data) => {
            console.log(data)
        })
    })

}

postApi()
