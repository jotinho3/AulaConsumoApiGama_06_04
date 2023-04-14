const $listar = document.querySelector('.listar')
const $formulario = document.getElementById('formulario')

async function getApi() {  
    const respostaFetch = await fetch('https://soundgarden-api.vercel.app/events', {
        method: 'GET'
    }) 

    const respostaConvertida = await respostaFetch.json()

    // map para criar as caixas e os botões para cada evento (item) dentro da API

    respostaConvertida.map((item) =>{
    

            const botao = document.createElement('a')
            botao.textContent = 'Editar'
            botao.setAttribute('href', `editar-evento.html?id=${item._id}`) 
            //ESSA LINHA É MUITO IMPORTANTE! : nela é possivel inserir em cada botao (<a>) o link de redirecionamento para a pagina editar-evento COM o id no URL, com isso
            //... podemos acessar o url enviado de uma pagina para a outra, podendo assim utilizar o id do item que quer ser editado/removido

            

            //adicionar a mesma classe em todos os botões(TAGS <a>) para poder dar um QuerySelectorAll e assim poder deletar os eventos individualmente
            botao.classList.add('botaoExcluir')
    


            const div = document.createElement('div')
            div.textContent = `${item.name}`

            //colocando as caixas criadas dentro da div principal da pagina
            $listar.append(div)

            //colocando cada botao em sua caixa
            div.appendChild(botao)
    
    })

    const listaBotoes = Array.from(document.querySelectorAll('.botaoExcluir'))
   
    listaBotoes.map((item) => {
    

        // item.addEventListener('click', async (e) => {
        //     const resposta = await fetch(`https://soundgarden-api.vercel.app/events/${e.target.id}`, {
        //         method: 'DELETE'
        //     })

        //     console.log(resposta)
           
        // }) 


        item.addEventListener('click',  (e) => {
            
           
        }) 
    })


listaBotoes.map((item) => {
        item.addEventListener('click', (e) => {
            
            localStorage.setItem('id,' `${e.target.id}`)

        })
    })
    
}


getApi()



