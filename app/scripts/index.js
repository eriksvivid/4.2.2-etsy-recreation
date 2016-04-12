var _ = require('underscore');
var handlebars = require('handlebars');
var $ = require('jquery');

var url = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=whiskey&includes=Images,Shop";
function fetchJSONP(url, callback) {
  var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  var script = document.createElement('script');

  window[callbackName] = function(data) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };

  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);

}


function start(data){
  console.log(data);
  displayTiles(data);
}

fetchJSONP(url, start);


function displayTiles(tile){
  var source = $('#tile-template').html();
  var template = handlebars.compile(source);
  var html = template(tile);

$('.tiles').append(html);
}
