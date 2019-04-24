// Faça o exercício dos parágrafos aqui
document.querySelectorAll('.botao-expandir-retrair').forEach( function(item) {
    item.addEventListener('click', function() {
        item.parentElement.classList.toggle("expandido")
        item.innerHTML = item.innerHTML === "+" ? "-" : "+"
    })
})