// 1. Seletores
const formPost = document.querySelector('#form-post');
const tituloInput = document.querySelector('#titulo');
const conteudoInput = document.querySelector('#conteudo');

const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');

// 2. Adicionar evento de submit
formPost.addEventListener('submit', function(event) {
    // 2.3 Prevenir comportamento padrão
    event.preventDefault();

    // 2.4 Montar o objeto data
    const data = {
        title: tituloInput.value,
        body: conteudoInput.value,
        userId: 1
    };

    // Chamada Fetch
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        // Segundo then: renderização do retorno
        tituloRenderizar.innerHTML = json.title;
        conteudoRenderizar.innerHTML = json.body;
        
        // Limpa o formulário após o envio
        formPost.reset();
    })
    .catch((error) => {
        console.error('Erro na requisição:', error);
    });
});
