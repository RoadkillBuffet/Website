var title = $('h1');
var colors = ['red', 'blue', 'green']
var i = 0;
$('body').click(function(){
    title.css('color', colors[i]);
    i++;
    i = i % 3;
});
