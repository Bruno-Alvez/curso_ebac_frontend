
const form = document.getElementById("formulário");
const resultadoElemento = document.getElementById("resultado");

function campo(campoA,campoB){
    if(campoB > campoA){
    return `Formulário Válido! ${campoB} é maior que ${campoA}.`;
    } else {
        return "[ERRO] O Formulário é INVÁLIDO o número do primeiro campo deve ser maior que o número do segundo !";
    }
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    
    const valorInputA = parseFloat(document.getElementById("inputA").value);
    const valorInputB = parseFloat(document.getElementById("inputB").value);
    const resultado = campo(valorInputA,valorInputB);
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = resultado;

});