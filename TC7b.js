$('body').append('<div id="frame_div"></div>');
var frame = ('<img id="img_frame" src="//cdn.optimizely.com/img/2098360248/e515d93aa1cd4e03a0206850ebab4499.png">');
$('#frame_div').append(frame);
console.log("Lägg bild i DIV");

$('#frame_div').insertAfter('#bestsellers');
console.log("Lagt till DIV efter Bestsellers");

var produkt1 = $('grid_1 prod 541181-skal-iphone-6-47-genomskinlig-tpu');

$('#frame_div').append(produkt1);
console.log("Lagt till produkt");

