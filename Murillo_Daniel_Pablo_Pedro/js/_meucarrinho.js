$(document).ready(function() {
	/*
	// var total = 610;
	var total = 0;
	$('#total_vlr').html(total);
	*/
	var x_temp;
	//Botão Azul
	
	var produto = [];
	// produto[produto.length] = 'Ola';
	// produto[produto.length] = 'Ola2';
	
	// console.log(produto);
	
	
	
	$('#produto').on('click', function(){
		$('#detalhes_desc').hide();
		$('#produto_desc').show();
		
	});
	//Botão Azul
	$('#detalhes').on('click', function(){
		$('#produto_desc').hide();
		$('#detalhes_desc').show();
	});
	
	
	// Item do carrinho
	// $('.item-carrinho-remove').on('click', function(){
		// // produto[produto.length] = 
		// alert(1);
	// });
	

	
	
	
	text_1 = '<div class="col-lg-12 well" style="background-color: #eeeeee;"><h4>Fone De Ouvido R$25</h4><img src="images/fone.jpg" width="60" height="60" class="img pull-left" alt="Generic placeholder thumbnail" style="margin: 10px;"><button class="item-carrinho-remove btn btn-primary pull-right" value="25">-</button></div>';
	
	$('.clone').html(text_1);
	
	$(".item-carrinho-remove").bind("click", function(){
		alert("The paragraph was clicked.");
	});
	
	
	


	
	
	

	

	
	
	
	
	
	
	
	
	
	//Inicia Objeto
	function Carrinho(){}
	
	
	Carrinho.prototype.exibeTotal = function(){
		$('#total_vlr').html(this.total);
	}
	
	Carrinho.prototype.addProduto = function(valor){
		valor = parseInt(valor);
		this.total = this.total + valor;
		this.exibeTotal();
	}
	
	Carrinho.prototype.total = 600;
	var carinho_1 = new Carrinho();
	carinho_1.exibeTotal();
	
	
	
	
});

