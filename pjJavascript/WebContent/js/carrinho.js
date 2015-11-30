	
/*executa ações ao carregar a janela*/
	window.onload = onDocumentLoad;	

	/*verifica se existe mudança nos inputs */
function onDocumentLoad(){
	
	
	
	
	
	
	if(document.getElementsByClassName != undefined){
				
			var textEdits = document.getElementsByClassName("quantity");
		
			for(var i = 0; i < textEdits.length; i++){
				textEdits[i].onchange = quantidadeMudou;
			}
		alert("getElementsByClassName encontrada.");
	}else{
		document.getElementsByClassName = function(className){
			
			var todosElementos = document.getElementsByTagName("*");
			var resultados = [];
			var elemento;
			
			for (var i = 0; (elemento = todosElementos[i]) != null; i++){
				var elementoClass = elemento.className;
				if(elementoClass && elementoClass.indexOf(className) != -1){
					resultados.push(elemento);
					console.log("Elemento -->" + elemento);
					console.log("inner -->" + elemento.innerHTML);
				}
			}
			alert("Regozijai-vos, usuarios de Internet Explorer.");
			
			return resultados;
		}
	}
	
	
		
	}



	/* captura o elemento HTML da pagina a partir do ID e retorna o seu conteudo interno a partir da propriedade innerHTML*/
		var total = document.getElementById("total");
		//alert("Conteudo recuperado do elemento HTML a partir da propriedade innerHTML: " + total.innerHTML);
		
		function getObjectHTMLById(text){
			return document.getElementById(text);
		}
		
		function getInnerHTMLById(text){
			var obj = document.getElementById(text);
			return obj.innerHTML;
		}
		
		/* test para recuperar elemento e valor do elemento HTML com as funções abaixo*/
		//alert("Objeto retornado: " + getObjectHTMLById("total")+ "\n Valor do objeto: " + getInnerHTMLById("total"));
		
		/*function que converte text em float*/
		function moneyTextToFloat(text){
			var numeroFloat = text.replace("R$", "").replace(",",".");
			return numeroFloat;
		}
		
		
		/*teste de conversao de texto para numero float */
		//alert(" Text convertido para float a travez da function .replace() : " + moneyTextToFloat(total.innerHTML));
		
		
		/* function utiliza a função Math.floor() */
		function numeroWithMathFloor(){
			var numeroIn = 34.56;
			var numFloor = Math.floor(numeroIn);
			alert("Valor inicial: " + numeroIn + " \n Valor retornado utilizado Math.floor: " + numFloor + "\n A function Math.floor trunca as duas ultimas casas.");
			
			var numInMult100 = Math.floor(numeroIn) * 100;
		}
		
		/* Test function utilizando função Math.floot*/
		//numeroWithMathFloor();
		//alert("Numero inicial multiplicado por 100: " + numInMult100);
		
		/*function utiliza função Math.ceil() */
		function numeroWithMathceil(){
			var numIn2 = 35.62;
			var numeroCeil = Math.ceil(numIn2);
			alert("Valor inicial:   " + numIn2 + "\n Valor retornado utilizando Math.ceil:  " + numeroCeil +" \n A function Math.ceil arredonda para cima o valor.");
		}
		
		/*test function utilizando Math.ceil*/
		//numeroWithMathceil();
		
		
		/* function para converter float para text*/
		function floatToMoneyText(value){
			var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
			var valueTruncado = text.substr(0, text.length -2); //captura a string a partir da posicao 0 até o total da string - 2
			var valueCasasDecimais = text.substr(-2); //captura as duas ultimas posicoes da string
			//valueCasasDecimais++;
			
			text = "R$ " + valueTruncado + "," + valueCasasDecimais;
			return text;
		}
		
		/* test functions de conversao de text para float e de float para text */
		//alert("Valor total em formato FLOAT: " + moneyTextToFloat(total.innerHTML) + "\n Valor total em formato TEXT: " + floatToMoneyText(moneyTextToFloat(total.innerHTML)));
		
		var textoConc = "text-float: " + moneyTextToFloat(total.innerHTML) + " === " + "float-text: " + floatToMoneyText(moneyTextToFloat(total.innerHTML));
		
		var validacao = moneyTextToFloat(total.innerHTML) === floatToMoneyText(moneyTextToFloat(total.innerHTML));
		
		//alert( textoConc + "\n" + "Validacao: " + validacao);
		
		
		/* conversao e equivalencia */
		var eq1 = 2 == 2 ;
		var eq2 = 1 == "1";
		var eq3 = 0 == [];
		var eq4 = 0 == "";
				
		/* alert(	"Conversao/Equivalencia: \n"	+
				" 2 == 2  : " 	+ eq1 + "\n" +  
				" 1 == '1': " 	+ eq2 + "\n" + 
				" 0 == [] : " 	+ eq3 + "\n" + 
				" 0 == '' : " 	+ eq4 + "\n"				
		);
		*/
		
		
		/* igualdade */
		var ig1 = 2 === 2 ;
		var ig2 = 1 === "1";
		var ig3 = 0 === [];
		var ig4 = 0 === "";
				
		/*alert(	"Igualdade: \n"	+
				" 2 === 2  : " 	+ ig1 + "\n" +  
				" 1 === '1': " 	+ ig2 + "\n" + 
				" 0 === [] : " 	+ ig3 + "\n" + 
				" 0 === '' : " 	+ ig4 + "\n"				
		);
		*/
		
		/*function que lê e retorna o valor do campo total*/
		function readTotal(){
			var objTotal = document.getElementById("total");
			return moneyTextToFloat(objTotal.innerHTML);
		}
		
		
		//alert(readTotal());
		
		/*function que altera o valor do campo total*/ 	
		 function writeTotal(value){
			var objTotal = document.getElementById("total");
			objTotal.innerHTML = floatToMoneyText(value);
		 }
		
		writeTotal("3.14159");
		
		var produtos = document.getElementsByClassName("produto");
		
		console.debug("Passou por aqui");
		
		function calculateTotalProducts(produtosArray){
			var totalProdutos = 0;
			var count=0;
			for(var pos= 0; pos < produtosArray.length; pos++){
				var priceElements = produtosArray[pos].getElementsByClassName("price");
				var priceText = priceElements[0].innerHTML;
				var price = moneyTextToFloat(priceText);
				
				count++;
				//console.log(count +"- produto - " + price);
				
				
				var qtyElements = produtos[pos].getElementsByClassName("quantity");
				var qtyText = qtyElements[0].value;
				//console.log(qtyText);
				var qty = moneyTextToFloat(qtyText);
				
				var subTotal = qty * price;
				
				//console.log(qty);
				
				console.log(count +"- produto - " + price + " qtd: " + qty + " subtotal: " + subTotal);
				
				totalProdutos += subTotal; 
				
				total  = writeTotal(totalProdutos);
			}
			//console.log("Total: " + totalProdutos);
			
			return totalProdutos;
		}
		
				
		
		console.debug("Total: " + calculateTotalProducts(produtos));

		
		/* function que atualiza o valor total do carrinho*/
		function quantidadeMudou(){
			writeTotal(calculateTotalProducts(produtos));
		}
		
		
		
		
		
		
		
		
		
		
		