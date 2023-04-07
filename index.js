function getApiPosts() {
    // fetch 
    // utilizando o metodo GET

    fetch('https://jsonplaceholder.typicode.com/posts')

    .then((resposta) => {
        resposta.json()// .json() vai retornar um resolve ou um reject com a data formatada


        .then((data) => {
            console.log(data)

            data.map((item) => {
                return (
                    window.document.body.innerHTML += `
                       <div>${item.title}</div>     
                    
                    `
                )
            })


        })
        
    })
    .catch((erro) => {
        console.log(erro)
    })

}

getApiPosts()