/**
 * On this page 
 *		https://sistemas.unesp.br/sentinela/common.openMessage.action?emailTipo=recebidas
 * Trasform this shit
 *

<a href="javascript:submitVisualizarMensagem('26314345');">
	<b>Oportunidades e-Deploy</b>
</a>

 * 
 * Into this working piece of art
 *		https://sistemas.unesp.br/sentinela/common.viewMessage.action?txt_id=26314345&emailTipo=recebidas
 *

<a href="common.viewMessage.action?txt_id=26314345&emailTipo=recebidas">
	<b>Oportunidades e-Deploy</b>
</a>

**/

(function (){
	var shittyHref = /javascript\:submitVisualizarMensagem/i;
	var lookFor = /javascript:submitVisualizarMensagem\(\'(\d+)\'\);/gi;
	var replaceWith = 'common.viewMessage.action?txt_id=$1&emailTipo=recebidas';

	var matches = Array.from( document.getElementsByTagName('a') )
		.filter(function f(el){
				return shittyHref.test( el.getAttribute('href') );
		})
		.map(function f(el){
			el.setAttribute('href', el.getAttribute('href').replace(lookFor, replaceWith));
			return el;
		 });
	console.log('got ' + matches.length + ' matches');
})();
