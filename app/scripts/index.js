var _ = require('underscore');
var handlebars = require('handlebars');
var $ = require('jquery');

var url = 'https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=whiskey&includes=Images,Shop&sort_on=score';
var results = $.ajax(url).then(start);

function start(data){
  console.log(data);

  displayTiles(data);
}

function displayTiles(data){
  var tiles = data.data.results;
  tiles.forEach(displayTiles);
}

function displayTiles(tile){
  var source = $('#tile-template').html();
  var template = handlebars.compile(source);
  var $tileHtml = $(template(tiles));

$('.tiles').append($tileHtml);
}
