function go(link) {
    if(link.startsWith('http') || link.startsWith('https')){
        window.open(link)
    } else {
        location.href = link;
    }
}

// POP UP CON JQUERY. CODICE COPIATO DAL SEGUENTE SITO: https://blog.persaper.it/creare-un-popup-in-html-responsive-e-animato/
function pop_init( my_content ) {

	var pop_height = "30%";
	var pop_html = "<div class='pop-bg'></div><div class='pop-wrap'><p class='pop-x'>X</p><div class='pop-content'></div></div>";

	$("body").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function() {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("body").unbind("click");
}

$(document).ready(function() {

	$(".popup-me").click(function(){

		pop_init( "L'obiettivo 13 dell'agenda 2030 è la lotta contro il cambiamento climatico. Con la nostra applicazione vogliamo ridurre le emissioni di CO2  e salvaguardiare l'ambiente!" );

	});

	$(".uil-instagram").click(function(){

		go('https://www.instagram.com/arcoo_team')

	});
	$(".uil-presentation-play").click(function(){

		go('https://docs.google.com/presentation/d/1JmvDMI0I2cAnkA64EjpzKruRCvoZik1ZkRuNJ8HHRcQ/edit?usp=sharing')

	});
	$(".uil-bell-school").click(function(){

		go('https://www.parentucelli-arzela.edu.it/')

	});

});