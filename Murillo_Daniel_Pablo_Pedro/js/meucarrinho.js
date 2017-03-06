$(document).ready(function() {
	
	
	//Botão Azul
	$('#produto').on('click', function(){
		$('#detalhes_desc').hide();
		$('#produto_desc').show();
		
	});
	//Botão Azul
	$('#detalhes').on('click', function(){
		$('#produto_desc').hide();
		$('#detalhes_desc').show();
	});
	
	/*
	
	// Item do carrinho
	$('.item-carrinho').on('click', function(){
		carinho_1.addProduto(this.value);
		
		// $('#clone').append($(this).parent().clone());
		
		$('#x_temp').html($(this).parent().clone());
		
		// // console.log(x_temp);
		// $('#x_temp').children().children('button').addClass('delThis');
		
		// $('#clone').append($('#x_temp').clone());
		
		// $('#x_temp').html('');
		// // addClass('hihi')
		
		
		$(".delThis").bind("click", function(){
			alert("The paragraph was clicked.");
		});
		
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
	*/
	
	
	
});