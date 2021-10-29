var altura = '';
var largura = '';
var vidas = 1;
var tempo = 3 ;
var nivel = window.location.search.replace('?', '') //Variável que guarda a url da pagina e seu parametro, retirando o ? com o método replace
var tempoMosca = 0;

//Criando niveis de dificuldade para o jogo
if(nivel === 'normal'){
	tempoMosca = 1500;
}else if(nivel ==='dificil'){
	tempoMosca = 1000;
}else if(nivel === 'chucknorris'){
	tempoMosca = 750;
}

//Função para capturar o tamanho da janela
function ajustarPalcoJogo(){
	altura = window.innerHeight;//Capturando altura da janela.
	largura = window.innerWidth;//Capturando largura da janela.
} //Essa função será rodada com 'onsize' na tag <body> então a cada vez que a redimenção mudar ele irá capturar o valor.
ajustarPalcoJogo();

//Função que cria um cronometro descrescente
var cronometro = setInterval(function(){ 
		tempo -= 1; 
		if (tempo < 0 ) {
			window.location.href = 'vitoria.html';
			clearInterval(cronometro)
		}else {
			document.getElementById('cronometro').innerHTML = tempo 
		}
	}, 1000);

//Função que faz surgir a mosca na tela
function posicionarRandomico(){

	//Deixando que exista apenas um mosquito por ID
	var element_mosca = document.getElementById('mosca')
	if (element_mosca) {
		element_mosca.remove();
		document.getElementById('v'+vidas).src = 'img/coracao_vazio.png';
		vidas++
		if (vidas > 3) {
			window.location.href = 'fim_do_jogo.html'
		}
	} 

	var posicaoX = Math.floor(Math.random() * largura) - 130;//Utilizando o 'Math.random' para definir numeros aleatórios e 'Math.flor' para arredondar para baixo.
	var posicaoY = Math.floor(Math.random() * altura) - 130;// ''

	posicaoX = posicaoX < 0 ? 0 : posicaoX; //Verificando se a posição ultrapassa a tela
	posicaoY = posicaoY < 0 ? 0 : posicaoY; //''

	var mosca = document.createElement('img');//Criando o elemento HTML
	mosca.src = 'img/mosca.png'; //Colocando a imagem através do propriedade 'src'  do elemento
	mosca.className = aumentarTamanho() +' '+mudarLado(); //Colocando o classe através da propriedade 'class'  do elemento
	mosca.style.left = posicaoX +'px'//Colocando estilo css através da propriedade 'style' do elemento
	mosca.style.top = posicaoY +'px'//''
	mosca.style.position = 'absolute'//''
	mosca.id = 'mosca' //Colocando identificação para o mosquito
	mosca.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosca);//Colocando o elemento como filha do body

	aumentarTamanho()
	mudarLado()
}

//Função para alternar o tamanho da mosca
function aumentarTamanho(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0: 
			return 'mosquito1'
			
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

//Função para mudar a imagem da mosca de lado
function mudarLado(){
	var lados = Math.floor(Math.random() * 2)

	switch(lados){
		case 0: 
			return 'lado1'
			
		case 1:
			return 'lado2'

	}
}

