$(document).on('ready', function() {
  
  // hide and show the form
	$('button').on('click',function(){
		if($(this).text() === 'Show Form'){
			$('div.form').removeClass('form-hidden');
			$(this).text('Hide Form');
		} else {
			$('div.form').addClass('form-hidden');
			$(this).text('Show Form');
		}

	});

	// prevent default form action and update profile information
	$('.submit').on('click', function(e){
		e.preventDefault();
		$('.infoBox').each( function(){
			var pClass = $(this).find('p').attr('class');
			console.log(pClass);
			var fClass = "."+ pClass.slice(1);
			console.log(fClass);
			console.log("this is the text of the form", $(fClass).val());
			var newText = $(fClass).val();
			$(this).find('p').text(newText);
		});
		$('button').click();

	});


});