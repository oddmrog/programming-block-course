var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.what3words.com/v2/reverse?coords=51.521251%2C-0.203586&key=FE325Z4V&lang=en&format=json&display=full",
  "method": "GET",
  "headers": {}
}

var datetimes = new Date().toLocaleString();


$.ajax(settings).done(function (response) {

	
  $('.w3w').each(function(){
  	console.log('lol');
  	$(this).html(response.words);
  });
  $('.datetime').each(function(){
  	console.log(datetimes);
  	$(this).html(datetimes);
  });
  
  
  console.log(response.words);
});

