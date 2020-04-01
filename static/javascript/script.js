let pot='';
let design='';
let main_color='';
let secondary_color='';

$('#hoverlink').hover(function(){
    $('.hover_text_link').toggleClass('show');
    }, function(){
    $('.hover_text_link').toggleClass('show');
  });

$('#hovertwitter').hover(function(){
    $('.hover_text_twitter').toggleClass('show');
    }, function(){
    $('.hover_text_twitter').toggleClass('show');
  });

$('#hoverfb').hover(function(){
    $('.hover_text_fb').toggleClass('show');
    }, function(){
    $('.hover_text_fb').toggleClass('show');
  });

function pot_selector() {
    $('.pot-selector').toggleClass('show');

}

function design_selector() {
    $('.design-selector').toggleClass('show');
}

function main_color_selector() {
    $('.main_color-selector').toggleClass('show');
}

function secondary_color_selector() {
    $('.secondary_color-selector').toggleClass('show');
}

function change_pot(pot_temp) {
    $('.pot-selector').toggleClass('show');
    console.log(`pot changed to ${pot_temp}`);
    pot=pot_temp;
}

function change_desing(design_temp){
    $('.design-selector').toggleClass('show');
    console.log(`design changed to ${design_temp}`);
    design=design_temp;
}

function change_main_color(main_color_temp){
    $('.main_color-selector').toggleClass('show');
    console.log(`main color changed to ${main_color_temp}`);
    main_color=main_color_temp;
}

function change_secondary_color(secondary_color_temp){
    $('.secondary_color-selector').toggleClass('show');
    console.log(`secondary color changed to ${secondary_color_temp}`);
    secondary_color=secondary_color_temp;
}

function back(tab){
    $('.'+tab).toggleClass('show');
}

function render(){

}

function share(){
    
    $('.facebook').toggleClass('show');
    $('.twitter').toggleClass('show');
    $('.link').toggleClass('show');
    $('.plink').toggleClass('show');
    $('.ptwitter').toggleClass('show');
    $('.pfb').toggleClass('show');

   
    $('#arrow').toggleClass('show');
    $('#arrow_2').toggleClass('show');
    $('.small_lines').toggleClass('show');
    $('#cross').toggleClass('show');
    $('#cross_2').toggleClass('show');
    $('#vertical_line').toggleClass('show');
    $('#horizontal_line').toggleClass('show');

}




function facebook(){
     window.open('https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcatalogo.kindler.design%2F&amp%3Bsrc=sdkpreparse','_blank','height=400,width=400');


    $('.link').toggleClass('show');
    $('.twitter').toggleClass('show');
    $('.facebook').toggleClass('show');
    
    $('#arrow').toggleClass('show');
    $('#arrow_2').toggleClass('show');
    $('.small_lines').toggleClass('show');
    $('#cross').toggleClass('show');
    $('#cross_2').toggleClass('show');
    $('#vertical_line').toggleClass('show');
    $('#horizontal_line').toggleClass('show');
}

function twitter(){
    window.open('https://twitter.com/intent/tweet?text=Look%20at%20whaaaaaat%20I%20did%20on%20http://catalogo.kindler.design%20!','_blank','height=400,width=400');
    
    $('.facebook').toggleClass('show');
    $('.twitter').toggleClass('show');
    $('.link').toggleClass('show');
    
    $('#arrow').toggleClass('show');
    $('#arrow_2').toggleClass('show');
    $('.small_lines').toggleClass('show');
    $('#cross').toggleClass('show');
    $('#cross_2').toggleClass('show');
    $('#vertical_line').toggleClass('show');
    $('#horizontal_line').toggleClass('show');
}

function link(){
let test = document.createElement('input');
test.setAttribute('Value',document.getElementById('test').innerHTML);
document.body.appendChild(test);
test.select();
document.execCommand('copy');
document.body.removeChild(test);

$('.facebook').toggleClass('show');
$('.twitter').toggleClass('show');
$('.link').toggleClass('show');

$('#arrow').toggleClass('show');
$('#arrow_2').toggleClass('show');
$('.small_lines').toggleClass('show');
$('#cross').toggleClass('show');
$('#cross_2').toggleClass('show');
$('#vertical_line').toggleClass('show');
$('#horizontal_line').toggleClass('show');
$('.hover_text_link.show').removeClass('plus');
}


