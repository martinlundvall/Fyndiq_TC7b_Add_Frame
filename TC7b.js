
//Lägg till Div för Frame

$('body').append('<div id="frame_div"></div>');
var frame = ('<img src="//cdn.optimizely.com/img/2098360248/e515d93aa1cd4e03a0206850ebab4499.png">');


//Lägg till Frame i Div

$('#frame_div').append(frame);


//Lägg bild efter Bestseller-bild

$('#frame_div').insertAfter('#bestsellers');
console.log("Lagt till DIV efter Bestsellers");


//Lägg till Div för Produkterna

$('body').append('<div id="hot_products_div"></div>');


//Klonar och lägger till specifika produkter i Div

$('.grid_1.prod.607042-skal-iphone-6-47-genomskinlig-tpu-100').clone().appendTo('#hot_products_div');
$('.grid_1.prod.474013-2-m-trasselfri-usb-kabel-laddare-ipho').clone().appendTo('#hot_products_div');
$('.grid_1.prod.636786-hardat-glas-skarmskydd-samsung-galaxy').clone().appendTo('#hot_products_div');
$('.grid_1.prod.578358-pull-tab-laderficka-planbok-iphone-6').clone().appendTo('#hot_products_div');
$('.grid_1.prod.600895-headset-till-iphonesamsungsony-htc-no').clone().appendTo('#hot_products_div');


//Lägg till produkterna i bilden

$('#hot_products_div').insertAfter('#frame_div');