var haritasayi = 0;


//turkiyeharitasi();
//$('[name="trharita"]').hide();	



$(document).ready(function(){
	
	$('.logout_btn').click(function(e){
		e.preventDefault();
		$.post('/action.php',{action:'logout'},function(){
			window.location.reload(true);
		},'json');
	});		
	
	$('body').tooltip({selector: '[data-toggle="tooltip"]'});
});