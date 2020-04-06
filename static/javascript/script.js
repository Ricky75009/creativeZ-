let pot='huevo';
let design='';
let main_color='';
let secondary_color='';
let countpot=0;
let  countdesign=0;
let countmain=0;
let countsecondary=0;

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
    if (countpot==0){
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("GET", "http://127.0.0.1:5000/api/pots");
        xhr.onload = function () {
           let list_pots = xhr.response;
           for (let i = 0; i < list_pots.length; i++){
                let paragraph = document.createElement('p');
                paragraph.textContent = list_pots[i];
              paragraph.setAttribute("onclick", "change_pot('"+list_pots[i]+"')");
              document.getElementById('pot_options').appendChild(paragraph);
            }
        }
         xhr.send();
    }
    countpot++;
    countdesign=countmain=countsecondary=0;
}

function design_selector() {
    $('.design-selector').toggleClass('show');
    if (countdesign==0){
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("GET", "http://127.0.0.1:5000/api/design");

        xhr.onload = function () {
           let list_design = xhr.response;
           console.log('list', list_design)
           for (let i = 0; i < list_design.length; i++){
            console.log('ET ICI')
                let paragraph = document.createElement('p');
                paragraph.textContent = list_design[i];
              paragraph.setAttribute("onclick", "change_design('"+list_design[i]+"')");
              document.getElementById('design_options').appendChild(paragraph);
            }
        }
         xhr.send();
         countdesign++;
    }else{
        var element = document.getElementById('design_options');
        element.parentNode.removeChild(element);
        let xhrxhr = new XMLHttpRequest();
        xhrxhr.responseType = 'json';
        xhrxhr.open("GET", "http://127.0.0.1:5000/api/design");
        xhrxhr.onload = function () {
           let list_design = xhrxhr.response;
           console.log('list', list_design)
           for (let i = 0; i < list_design.length; i++){
            console.log('ET ICI')
            let paragraph = document.createElement('p');
            paragraph.textContent = list_design[i];
            paragraph.setAttribute("onclick", "change_design('"+list_design[i]+"')");
            document.getElementById('design_options').appendChild(paragraph);
            }
        }
         xhr.send();
    }
}

function main_color_selector() {
    $('.main_color-selector').toggleClass('show');
    if (countmain==0){
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("GET", "http://127.0.0.1:5000/api/main_color");
        xhr.onload = function () {
           let list_main_color = xhr.response;
           for (let i = 0; i < list_main_color.length; i++){
                let paragraph = document.createElement('p');
                paragraph.textContent = list_main_color[i];
              paragraph.setAttribute("onclick", "change_main_color('"+list_main_color[i]+"')");
              document.getElementById('main_color_options').appendChild(paragraph);
            }
        }
         xhr.send();
    }
    countmain++;
    countdesign=countpot=countsecondary=0;
}

function secondary_color_selector() {
    $('.secondary_color-selector').toggleClass('show');
    if (countsecondary==0){
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("GET", "http://127.0.0.1:5000/api/secondary_color");
        xhr.onload = function () {
           let list_secondary_color = xhr.response;
           for (let i = 0; i < list_secondary_color.length; i++){
                let paragraph = document.createElement('p');
                paragraph.textContent = list_secondary_color[i];
              paragraph.setAttribute("onclick", "change_secondary_color('"+list_secondary_color[i]+"')");
              document.getElementById('secondary_color_options').appendChild(paragraph);
            }
        }
         xhr.send();
    }
    countsecondary++;
    countdesign=countmain=countpot=0;
}

function change_pot(pot_temp) {
    $('.pot-selector').toggleClass('show');
    console.log(`pot changed to ${pot_temp}`);
    pot=pot_temp;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/api/change_pot');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ 'pot': pot }));


}

function change_design(design_temp){
    $('.design-selector').toggleClass('show');
    console.log(`design changed to ${design_temp}`);
    design=design_temp;


    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/api/change_design');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ 'design': design }));

}

function change_main_color(main_color_temp){
    $('.main_color-selector').toggleClass('show');
    console.log(`main color changed to ${main_color_temp}`);
    main_color=main_color_temp;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/api/change_main_color');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ 'main_color': main_color }));

}

function change_secondary_color(secondary_color_temp){
    $('.secondary_color-selector').toggleClass('show');
    console.log(`secondary color changed to ${secondary_color_temp}`);
    secondary_color=secondary_color_temp;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/api/change_secondary_color');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ 'secondary_color': secondary_color }));

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
     window.open('https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcatalogo.kindler.design%2F&amp%3Bsrc=sdkpreparse','_blank','height=500,width=500');


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

    $('.plink').toggleClass('show');
    $('.ptwitter').toggleClass('show');
    $('.pfb').toggleClass('show');
}

function twitter(){
    window.open('https://twitter.com/intent/tweet?text=Look%20at%20whaaaaaat%20I%20did%20on%20http://catalogo.kindler.design%20!','_blank','height=500,width=500');
    
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

    $('.plink').toggleClass('show');
    $('.ptwitter').toggleClass('show');
    $('.pfb').toggleClass('show');
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

$('.plink').toggleClass('show');
$('.ptwitter').toggleClass('show');
$('.pfb').toggleClass('show');
}

function get_all_pots(){
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET", "http://127.0.0.1:5000/api/pots")
    xhr.onload = function () {
        let lits_pots = xhr.response;
        for (let i = 0; i < lits_pots.length; i++){
            let paragraph = document.createElement('p');
            paragraph.textContent = lits_pots[i];
            paragraph.setAttribute("onclick", "love()");
            document.getElementById('misss').appendChild(paragraph);
        }
    }
    xhr.send();
    $('.pot-selector').toggleClass('show');
}

