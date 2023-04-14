const display = document.getElementById('display')

const url = window.location.href

const id = url.replace('http://127.0.0.1:5500/editar-evento.html?id=', '')  // aqui, separamos a URL do ID, substituindo a parte da URL por uma string vazia e deixando só o id

console.log(id)

async function getApi() {
    const firstResult = await fetch(`https://soundgarden-api.vercel.app/events/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }) //aqui inserimos o ID que foi enviado pela outra pagina
    
    const resultJSON = await firstResult.json()

    display.innerHTML += `${resultJSON.name}` // mostrando os dados desse item UNICO que foi passado de uma pagina para outra
    display.innerHTML += `<br> ${resultJSON._id}`
    display.innerHTML += `<br> ${resultJSON.poster}`

}

getApi()
