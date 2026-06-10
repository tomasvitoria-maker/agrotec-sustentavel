const chuva = document.getElementById("chuva");
const valorChuva = document.getElementById("valorChuva");

chuva.addEventListener("input", () => {
    valorChuva.textContent = chuva.value;
});

function captarAgua(){

    let mm = parseInt(chuva.value);

    let volume = mm * 10;

    let porcentagem = mm;

    if(porcentagem > 100){
        porcentagem = 100;
    }

    document.getElementById("nivelAgua").style.height =
        porcentagem + "%";

    document.getElementById("resultado").innerHTML =
        `💧 Foram armazenados aproximadamente <strong>${volume} litros</strong> de água da chuva para irrigação sustentável.`;
}
