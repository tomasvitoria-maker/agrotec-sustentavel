function exibirInfo(){
    alert("O Campo Verde promove inovação, produtividade e preservação ambiental.");
}

function calcular(){
    let hectares = Number(document.getElementById("hectares").value);

    if(hectares <= 0){
        document.getElementById("resultado").innerHTML =
        "Digite um valor válido.";
        return;
    }

    let arvores = hectares * 500;

    document.getElementById("resultado").innerHTML =
    `Impacto estimado: ${arvores} árvores preservadas.`;
}

