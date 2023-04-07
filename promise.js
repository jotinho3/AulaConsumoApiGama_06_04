// Promise permite a execução assíncrona de ações alternadas para um melhor tratamento de erro

// 1 caso de sucesso e 1 caso de fracasso em uma mesma função

let consultaDeFreteDoCorreios = new Promise((resolve, reject) => {

    let frete = '2.4R$/km'

    if (frete == '2.4R$/km') {
        resolve('O frete está num preço acessível (2.4R$/km) ')

    } else {
        reject('O frete está muito caro')
    }

})


consultaDeFreteDoCorreios.then((mensagem) => {
    console.log(mensagem)
}).catch((erro) => {
    console.log(erro)
})
//  then -> capturar o resultado do caso resolve (sucesso)
//  catch -> capturar o resultado do caso reject (fracasso)






