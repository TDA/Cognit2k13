$(document).ready(function() {

$('html').removeClass('nojs').addClass('js');
$('body').addClass('ofhidden');
//$('nav ul').click(function(){$(this).addClass('in')});

//$('.reveal-modal').css({'visibility':'hidden'});
	
$('nav.prim a:not(a[href="http://mnmjec.ac.in/default.htm"])').click(function(evt){
	$('.curr').removeClass('curr');
	$('.active').removeClass('active').addClass('inactive');
	$($(this).attr('href')).removeClass('inactive').addClass('active');
	$(this).addClass('curr');
	
	return false;
	
});
$('nav.prim a:not(a[href="#reg"])').click(function(evt){
launchFullScreen(document.getElementById('container'));
});

$('nav.sec a:not(a[href="http://mnmjec.ac.in/default.htm"])').click(function(){
	$('.curr').removeClass('curr');
	$('.active').removeClass('active').addClass('inactive');
	$('html,body').animate({scrollTop:$($(this).attr('href')).position().top},800);
	return false;
	
	});

$('a[href="#reg"]').click(function(){
	cancelFullscreen();
	});

$('html').bind("keydown", function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 32 || code == 37 || code == 38 || code == 39 || code == 40 || code == 9) {
        e.preventDefault();
    }

});


var html = [];


/*for (i = 0; i < 30; i++) {
var randomX = Math.random() * (100 - 1) + 1;
var randomY = Math.random() * (500 - 1) + 1;
var randomZ = Math.random() * (50 - 1) + 1;
var bin=Math.round(Math.random());
html.push('<div style="left:'+randomX+'%;top:'+randomY+'px;width:'+randomZ+'px;height:'+randomZ+'px" class="bub">'+bin+'</div>');
}
$("body").append( html.join('') );
*/

function attrSupported(attr) {
  return (attr in document.createElement("input"));
}
if(!attrSupported('required')){
$('#cus').submit(function(){	
$('input[required]').each(function(){
	if(!$(this).val()){}
	//Atleast One required field is empty
	$(this).next().text("Please fill this field");
	return false;
	});
});
}

var formValidationRules = {
"name":
  {
   "pattern":"[a-zA-Z -\.]{5,25}",
   "message":"Please Enter a name without special characters."
  },
"email":
  {
   "pattern":"^[a-zA-Z.-_]+@[a-zA-Z-_]+(\.[a-zA-Z]{2,4})+$",
   "message":"Please enter valid email.Eg: Name@site.com"
  },
"phone":
  {
   "pattern":"^\d{8,10}$",
   "message":"Please enter valid phone number of 8-10 digits."
  }
}

// Validates input value according to the rules
function validateRegExp(inputValue, formValidationRule,elt) {
  if (inputValue) {   
    var regExpObj = new RegExp(formValidationRule.pattern);
    if (!regExpObj.test(inputValue)) {
     $(elt).next().text((formValidationRule.message));
    }
  }
}

//Pattern attribute fallback
if (!attrSupported("pattern") || ($.browser.safari)) {
  //If pattern attribute is not supported or browser is Safari,then check the field.
  $('#cus').submit(function(){	
	$('#name').validateRegExp($(this).val(), formValidationRules.name,$(this));
   $('#email').validateRegExp($(this).val(), formValidationRules.name,$(this));
   $('#phone').validateRegExp($(this).val(), formValidationRules.name,$(this));
  });
} 
});


function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

function cancelFullscreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}





