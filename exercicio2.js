// Faça o exercício da galeria de imagens aqui
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/'
const todasAsImagens = [
  'philae-parts.jpg',
  'philae-rosetta.jpg',
  'philae-separation.jpg',
  'philae-67-picture.jpg',
  'philae-collecting.jpg'
];

let img = document.querySelector('#slide')
let imgAtual = 0

document.querySelector('#anterior').addEventListener('click', function() {
  imgAtual = imgAtual > 0 ? --imgAtual : 4
  img.src = servidorDasImagens + todasAsImagens[imgAtual]
})

document.querySelector('#proximo').addEventListener('click', function() {
  imgAtual = imgAtual < 4 ? ++imgAtual : 0
  img.src = servidorDasImagens + todasAsImagens[imgAtual]
})
