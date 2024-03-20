document.getElementById("btnPesquisar").addEventListener("click",function(){
    var cep = document.getElementById("cep").value //pega o valor do id cep
    var url = "https://viacep.com.br/ws/"+ cep + "/json/"; //link da apí
    var resultado = document.getElementById("resultado"); //pega a div resultado

    //Função Fetch é responsavel por fazer uma busca
    fetch(url).then(response => response.json()).then(dados => {
        if(dados.erro){
            resultado.innerHTML = "CEP não encontrado"
        } else {
            resultado.innerHTML = "Rua: " + dados.logradouro + " Bairro: " + dados.bairro
        }
    }).catch(error => console.error(error))
})