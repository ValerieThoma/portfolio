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
	
	// SHOW SKILLS
	$(".showskill").hide();	
	$(".element-item").hover(
		function () { $(this).children('.showskill').show(); },
		function () { $(this).children('.showskill').hide(); }
	);

	// $('.element-item').hover((event) => {
	// 	$('.showskill').filter($(event.target).siblings()).removeClass('hide');
	// 	$('.element-item').not($(event.target)).each((index, element) => {
	// 		element = $(element);
	// 		element.addClass('showskill');
	// 	})
	// }, () => {
	// 	$('.element-item').each((index, element) => {
	// 		$('.showskill').filter($(event.target).siblings()).addClass('hide');
	// 		element = $(element);
	// 		element.removeClass('showskill');
	// 	})
	// });


	// TOOLTIPPED
	$(document).ready(function(){
    	$('.tooltipped').tooltip({delay: 50});
 	});	


}); //end doc.ready
