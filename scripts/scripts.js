$(document).ready(function(){

	// SCROLLSPY
	$('.scrollspy').scrollSpy({
		target: '.scrollspy',
		'scrollOffset': 200
	});
	// SIDENAV 
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	

	// ISOTOPE
	var $grid = $('.grid').isotope({

		});
		$('#front').click(()=>{
			$grid.isotope({filter: '.front'});
		});
		$('#back').click(()=>{
			$grid.isotope({filter: '.back'});
		});
		$('#dev').click(()=>{
			$grid.isotope({filter: '.dev'});
		});	
		$('#all').click(()=>{
			$grid.isotope({filter: ''});
		});

	// TOOLTIPPED
	$(document).ready(function(){
    	$('.tooltipped').tooltip({delay: 50});
 	});	


}); //end doc.ready
