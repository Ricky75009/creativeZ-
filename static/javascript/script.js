let pot='';
let design='';
let main_color='';
let secondary_color='';


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

