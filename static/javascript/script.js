/* DECLARATION OF GLOBAL VARAIABLES */
let pot = "chico angular";
let design = "color sólido";
let main_color = "negro";
let secondary_color = "";
let path = "static/assets/images_visualisator/"+pot+"-"+design+"-"+main_color+"-"+secondary_color+".png"


/* SHOW 'COPY LINK'*/
$("#hoverlink").hover(
  function () {
    $(".hover_text_link").toggleClass("show");
  },
  function () {
    $(".hover_text_link").toggleClass("show");
  }
);

/*SHOW 'SHARE ON TWEETER'*/
$("#hovertwitter").hover(
  function () {
    $(".hover_text_twitter").toggleClass("show");
  },
  function () {
    $(".hover_text_twitter").toggleClass("show");
  }
);

/*SHOW 'SHARE ON FACEBOOK'*/
$("#hoverfb").hover(
  function () {
    $(".hover_text_fb").toggleClass("show");
  },
  function () {
    $(".hover_text_fb").toggleClass("show");
  }
);

/*GET ALL THE POTS IN THE DATABASE*/
function pot_selector() {
  $(".pot-selector").toggleClass("show");
  $("#pot_options").empty();
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("GET", "/api/pots");
  xhr.onload = function () {
    let list_pots = xhr.response;
    for (let i = 0; i < list_pots.length; i++) {
      let image = document.createElement("img");
      image.setAttribute(
        "src",
        "static/assets/flavicons/" + list_pots[i] + ".png"
      );
      image.setAttribute("alt", "flavicon of " + pot);
      image.setAttribute("margin_top", "0px");
      image.setAttribute("display", "absolute");
      image.setAttribute("onclick", "change_pot('" + list_pots[i] + "')");
      document.getElementById("pot_options").appendChild(image);

      let paragraph = document.createElement("p");
      paragraph.textContent = list_pots[i];
      paragraph.setAttribute("onclick", "change_pot('" + list_pots[i] + "')");
      document.getElementById("pot_options").appendChild(paragraph);
    }
  };
  xhr.send();
}

/*GET ALL THE DESIGNS IN THE DATABASE ACCORDING TO THE POT CHOSEN*/
function design_selector() {
  $(".design-selector").toggleClass("show");
  $("#design_options").empty();
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("GET", "/api/design");
  xhr.onload = function () {
    let list_design = xhr.response;
    console.log("list", list_design);
    for (let i = 0; i < list_design.length; i++) {
      let paragraph = document.createElement("p");
      paragraph.textContent = list_design[i];
      paragraph.setAttribute(
        "onclick",
        "change_design('" + list_design[i] + "')"
      );
      document.getElementById("design_options").appendChild(paragraph);
    }
  };
  xhr.send();
}

/*GET ALL THE MAIN COLORS IN THE DATABASE ACCORDING TO THE POT AND THE DESIGN CHOSEN*/
function main_color_selector() {
  $(".main_color-selector").toggleClass("show");
  $("#main_color_options").empty();
  let list_hex='';
  let xhr_hex = new XMLHttpRequest();
  xhr_hex.responseType = "json";
  xhr_hex.open("GET", "/api/main_color_hex");
  xhr_hex.onload = function () {
    list_hex = xhr_hex.response;
  };
  xhr_hex.send();
 

  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("GET", "/api/main_color");

  xhr.onload = function () {
    let list_main_color = xhr.response;
    console.log("list", list_main_color);
    for (let i = 0; i < list_main_color.length; i++) {
      let div = document.createElement("div");
      div.setAttribute("id", list_main_color[i]);
      div.setAttribute("display", "inline-block");
      document.getElementById("main_color_options").appendChild(div);

      let dot = document.createElement("div");
      dot.setAttribute("id", "dot");
      if (list_hex[i] == "ffffff") {
        dot.setAttribute(
          "style",
          "background-color:#" + list_hex[i] + ";border: 2px solid black;"
        );
      } else {
        dot.setAttribute("style", "background-color:#" + list_hex[i]);
      }

      let paragraph = document.createElement("p");
      paragraph.textContent = list_main_color[i];
      paragraph.setAttribute(
        "onclick",
        "change_main_color('" + list_main_color[i] + "')"
      );
      paragraph.setAttribute("float", "left");
      paragraph.setAttribute("style", "margin-left:200px");

      $("#" + list_main_color[i]).append(dot, paragraph);
    }
  };

  xhr.send();
}

/*GET ALL THE SECONDARY COLOR IN THE DATABASE ACCORDING TO THE POT, THE DESIGN AND THE MAIN COLOR CHOSEN*/
function secondary_color_selector() {
  $(".secondary_color-selector").toggleClass("show");
  $("#secondary_color_options").empty();

  let list_shex='';
  let xhr_shex = new XMLHttpRequest();
  xhr_shex.responseType = "json";
  xhr_shex.open("GET", "/api/secondary_color_hex");
  xhr_shex.onload = function () {
    list_shex = xhr_shex.response;

  };
  xhr_shex.send();

  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("GET", "/api/secondary_color");
  xhr.onload = function () {
    let list_secondary_color = xhr.response;
    console.log("list", list_secondary_color);
    console.log("hex", list_shex);
    for (let i = 0; i < list_secondary_color.length; i++) {
      let div = document.createElement("div");
      div.setAttribute("id", list_secondary_color[i]);
      div.setAttribute("display", "inline-block");
      document.getElementById("secondary_color_options").appendChild(div);
      let dot = document.createElement("div");
      dot.setAttribute("id", "dot");
      if (list_shex[i] == "ffffff") {
        dot.setAttribute(
          "style",
          "background-color:#" + list_shex[i] + ";border: 2px solid black;"
          
        );
        console.log('hex : '+list_shex[i]);
      } else {
        dot.setAttribute("style", "background-color:#" + list_shex[i]);
        console.log('hex : '+list_shex[i]);
      }
      let paragraph = document.createElement("p");
      paragraph.textContent = list_secondary_color[i];
      paragraph.setAttribute(
        "onclick",
        "change_secondary_color('" + list_secondary_color[i] + "')"
      );
      paragraph.setAttribute("float", "left");
      paragraph.setAttribute("style", "margin-left:200px");
      $("#" + list_secondary_color[i]).append(dot, paragraph);
    }
  };
  xhr.send();

}

/* CHANGE THE POT GLOBAL VARIABLE IN THE JAVASCRIPT FILE AND IN THE BACKEND*/
function change_pot(pot_temp) {
  $(".pot-selector").toggleClass("show");
  console.log(`pot changed to ${pot_temp}`);
  pot = pot_temp;


  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/change_pot");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ pot: pot }));

  render(pot, design, main_color, secondary_color);
}

/* CHANGE THE DESIGN GLOBAL VARIABLE IN THE JAVASCRIPT FILE AND IN THE BACKEND*/
function change_design(design_temp) {
  $(".design-selector").toggleClass("show");
  console.log(`design changed to ${design_temp}`);
  design = design_temp;


  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/change_design");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ design: design }));
  render(pot, design, main_color, secondary_color);
}

/* CHANGE THE MAIN COLOR GLOBAL VARIABLE IN THE JAVASCRIPT FILE AND IN THE BACKEND*/
function change_main_color(main_color_temp) {
  $(".main_color-selector").toggleClass("show");
  console.log(`main color changed to ${main_color_temp}`);
  main_color = main_color_temp;

  
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/change_main_color");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ main_color: main_color }));

  render(pot, design, main_color, secondary_color);
}

/* CHANGE THE SECONDARY COLOR GLOBAL VARIABLE IN THE JAVASCRIPT FILE AND IN THE BACKEND*/
function change_secondary_color(secondary_color_temp) {
  $(".secondary_color-selector").toggleClass("show");
  console.log(`secondary color changed to ${secondary_color_temp}`);
  secondary_color = secondary_color_temp;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/change_secondary_color");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ secondary_color: secondary_color }));

  render(pot, design, main_color, secondary_color);
}

/* BRINGS BACK TO THE MAIN MENU IN THE SIDEBAR*/
function back(tab) {
  $("." + tab).toggleClass("show");
}

/* SHOWS THE SHARE POSSIBILITIES AND ANIMATE THE SHARE BUTTON*/
function share() {
  $(".facebook").toggleClass("show");
  $(".twitter").toggleClass("show");
  $(".link").toggleClass("show");
  $(".plink").toggleClass("show");
  $(".ptwitter").toggleClass("show");
  $(".pfb").toggleClass("show");

  $("#arrow").toggleClass("show");
  $("#arrow_2").toggleClass("show");
  $(".small_lines").toggleClass("show");
  $("#cross").toggleClass("show");
  $("#cross_2").toggleClass("show");
  $("#vertical_line").toggleClass("show");
  $("#horizontal_line").toggleClass("show");
}

/* OPEN A NEW FACEBOOK WINDOW IN THE BROWSER*/
function facebook() {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcatalogo.kindler.design%2F&amp%3Bsrc=sdkpreparse",
    "_blank",
    "height=500,width=500"
  );

  $(".link").toggleClass("show");
  $(".twitter").toggleClass("show");
  $(".facebook").toggleClass("show");

  $("#arrow").toggleClass("show");
  $("#arrow_2").toggleClass("show");
  $(".small_lines").toggleClass("show");
  $("#cross").toggleClass("show");
  $("#cross_2").toggleClass("show");
  $("#vertical_line").toggleClass("show");
  $("#horizontal_line").toggleClass("show");

  $(".plink").toggleClass("show");
  $(".ptwitter").toggleClass("show");
  $(".pfb").toggleClass("show");
}

/* OPEN A NEW TWITTER WINDOW IN THE BROWSER*/
function twitter() {
  window.open(
    "https://twitter.com/intent/tweet?text=Look%20at%20whaaaaaat%20I%20did%20on%20http://catalogo.kindler.design%20!",
    "_blank",
    "height=500,width=500"
  );

  $(".facebook").toggleClass("show");
  $(".twitter").toggleClass("show");
  $(".link").toggleClass("show");

  $("#arrow").toggleClass("show");
  $("#arrow_2").toggleClass("show");
  $(".small_lines").toggleClass("show");
  $("#cross").toggleClass("show");
  $("#cross_2").toggleClass("show");
  $("#vertical_line").toggleClass("show");
  $("#horizontal_line").toggleClass("show");

  $(".plink").toggleClass("show");
  $(".ptwitter").toggleClass("show");
  $(".pfb").toggleClass("show");
}

/* COPY THE LINK TO THE CLIPBOARD*/
function link() {
  let copy = document.createElement("input");
  copy.setAttribute("Value", document.getElementById("copy").innerHTML);
  document.body.appendChild(copy);
  copy.select();
  document.execCommand("copy");
  document.body.removeChild(copy);

  $(".facebook").toggleClass("show");
  $(".twitter").toggleClass("show");
  $(".link").toggleClass("show");
  $("#arrow").toggleClass("show");
  $("#arrow_2").toggleClass("show");
  $(".small_lines").toggleClass("show");
  $("#cross").toggleClass("show");
  $("#cross_2").toggleClass("show");
  $("#vertical_line").toggleClass("show");
  $("#horizontal_line").toggleClass("show");
  $(".hover_text_link.show").removeClass("plus");

  $(".plink").toggleClass("show");
  $(".ptwitter").toggleClass("show");
  $(".pfb").toggleClass("show");
}

/* RENDERS THE IMAGE IN THE VISUALISATOR*/
function render(pot, design, main_color, secondary_color) {
  $("#image_visualisator").empty();
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    "static/assets/images_visualisator/" +
      pot +
      "-" +
      design +
      "-" +
      main_color +
      "-" +
      secondary_color +
      ".png"
  );
  image.setAttribute(
    "alt",
    "photo of " + pot + " " + design + " " + main_color + " " + secondary_color
  );
  image.setAttribute("width", "550px");
  // image.setAttribute("onerror",'print_an_image("' + pot + '","' + design + '")');
  document.getElementById("image_visualisator").appendChild(image);

  path = "static/assets/images_visualisator/"+pot+"-"+design+"-"+main_color+"-"+secondary_color+".png"

  $("#done").removeAttr("href");
  $("#done").attr("href",path);
  // $("#bite").setAttr("class","love");
  
}

function print_an_image(pot,design){
  $("#image_visualisator").empty();
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    "static/assets/images_visualisator/" +
      pot +
      "-color sólido" +
      "-negro-"+".png"
  );
  image.setAttribute(
    "alt",
    "photo of " + pot + " " + design
  );
  image.setAttribute("width", "550px");
  document.getElementById("image_visualisator").appendChild(image);
}
/* WHEN DONE BUTTON IS CLICKED...*/
function done() {
  alert("THIS IS DONE");
}

render(pot, design, main_color, secondary_color);
