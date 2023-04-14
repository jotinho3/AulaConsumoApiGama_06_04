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




async function mostrarMelhorComida() {
    try {
        const melhorComidaResposta = await melhorComida('pão')
        console.log(melhorComidaResposta)
    } catch (error) {
        console.log(error)
    }
        
    
   
}

mostrarMelhorComida()