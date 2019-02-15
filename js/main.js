function showHide() {
  document.getElementsByClassName("lighting_menu_wrap")[0].classList.toggle("show");
    if (document.getElementsByClassName("lighting_menu_wrap")[0].classList.contains('show')) {
        document.getElementsByClassName("lamps_menu")[0].classList.remove("slideLeft");
        document.getElementsByClassName("pendants_menu")[0].classList.remove("slideLeft");
        document.getElementsByClassName("item_7_menu")[0].classList.remove("slideLeft");
        document.getElementsByClassName("industrial_menu")[0].classList.remove("slideLeft");
    }
}

function slideLeft() {
  document.getElementsByClassName("lamps_menu")[0].classList.add("slideLeft");
  var height1 = document.getElementsByClassName("lamps_menu")[0].clientHeight;
  document.getElementsByClassName("lighting_menu_wrap")[0].style.height = height1 + "px";

}
function slideRight() {
  document.getElementsByClassName("lamps_menu")[0].classList.remove("slideLeft");
  var height1 = document.getElementsByClassName("lighting_menu")[0].clientHeight;
  document.getElementsByClassName("lighting_menu_wrap")[0].style.height = height1 + "px";
}

function slidePendantsLeft() {
	document.getElementsByClassName("pendants_menu")[0].classList.add("slideLeft");
	var height1 = document.getElementsByClassName("pendants_menu")[0].clientHeight;
  	document.getElementsByClassName("lighting_menu_wrap")[0].style.height = height1 + "px";
}
function slidePendantsRight() {
	document.getElementsByClassName("pendants_menu")[0].classList.remove("slideLeft");
	var height1 = document.getElementsByClassName("lighting_menu")[0].clientHeight;
  	document.getElementsByClassName("lighting_menu_wrap")[0].style.height = height1 + "px";
}

function slideItemLeft() {
	document.getElementsByClassName("item_7_menu")[0].classList.add("slideLeft");
	var height1 = document.getElementsByClassName("item_7_menu")[0].clientHeight;
  	document.getElementsByClassName("lighting_menu_wrap")[0].style.height = height1 + "px";
}
function slideItemRight() {
	document.getElementsByClassName("item_7_menu")[0].classList.remove("slideLeft");
	var height1 = document.getElementsByClassName("lamps_menu")[0].clientHeight;
  	document.getElementsByClassName("lighting_menu_wrap")[0].style.height = height1 + "px";
}

function slideIndustrialLeft() {
	document.getElementsByClassName("industrial_menu")[0].classList.add("slideLeft");
	var height1 = document.getElementsByClassName("industrial_menu")[0].clientHeight;
  	document.getElementsByClassName("lighting_menu_wrap")[0].style.height = height1 + "px";
}
function slideIndustrialRight() {
	document.getElementsByClassName("industrial_menu")[0].classList.remove("slideLeft");
	var height1 = document.getElementsByClassName("pendants_menu")[0].clientHeight;
  document.getElementsByClassName("lighting_menu_wrap")[0].style.height = height1 + "px";
}

window.onclick = function(e) {
  if (!e.target.closest('.lighting')) {
  	var myMenu = document.getElementsByClassName("lighting_menu_wrap");
    	if (myMenu[0].classList.contains('show')) {
        document.getElementsByClassName("lamps_menu")[0].classList.remove("slideLeft");
        document.getElementsByClassName("pendants_menu")[0].classList.remove("slideLeft");
        document.getElementsByClassName("item_7_menu")[0].classList.remove("slideLeft");
        document.getElementsByClassName("industrial_menu")[0].classList.remove("slideLeft");
    		myMenu[0].classList.remove('show');
    	}
  	}
}
