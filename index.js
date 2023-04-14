function melhorComida(comida) {
    return new Promise((resolve, reject) => {
        if (comida == 'macarrão') {
            resolve(comida + ' é a melhor comida!')
        }

        else {
            reject(comida + ' não é a melhor comida, macarrão que é!')
        }
    })
}

melhorComida('pão').then((resposta) => {
    console.log(resposta)
}).catch((erro) => {
    console.log(erro)
})

// then = então/ quando