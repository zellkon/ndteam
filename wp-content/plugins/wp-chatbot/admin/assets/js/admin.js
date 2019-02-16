
jQuery(document).ready(function($){
    
    // for support wp-color-picker
    // $('.htcc-color-wp').wpColorPicker();

    // $('select').material_select();
    // $('select').formSelect();   // v1.0.0.rc.2

    // $('.collapsible').collapsible();


/**
 * Customer Chat - Messenger - position
 */
var cc_i_position = document.querySelectorAll('.cc_i_position');
var cc_g_position = document.querySelectorAll('.cc_g_position');

var cc_i_position_mobile = document.querySelectorAll('.cc_i_position-mobile');
var cc_g_position_mobile = document.querySelectorAll('.cc_g_position-mobile');

//  incase display-block is added remove it ..
var cc_i_remove = function cc_i_remove() {
  cc_i_position.forEach(function (e) {
    e.classList.remove('display-block');
  });
};

var cc_g_remove = function cc_g_remove() {
  cc_g_position.forEach(function (e) {
    e.classList.remove('display-block');
  });
};

var cc_i_remove_mobile = function cc_i_remove_mobile() {
  cc_i_position_mobile.forEach(function (e) {
    e.classList.remove('display-block');
  });
};

var cc_g_remove_mobile = function cc_g_remove_mobile() {
  cc_g_position_mobile.forEach(function (e) {
    e.classList.remove('display-block');
  });
};


function cc_default_display() {

  // icon position
  var val = $('.cc_i_select').find(":selected").val();

  var cc_i_position2 = document.querySelector('.cc_i_position-2');
  var cc_i_position1 = document.querySelector('.cc_i_position-1');
  var cc_i_position3 = document.querySelector('.cc_i_position-3');
  var cc_i_position4 = document.querySelector('.cc_i_position-4');

  if (val == '1') {
    cc_i_position1.classList.add('display-block');
  } else if (val == '2') {
    cc_i_position2.classList.add('display-block');
  } else if (val == '3') {
    cc_i_position3.classList.add('display-block');
  } else if (val == '4') {
    cc_i_position4.classList.add('display-block');
  }


  // onchange - icon - postion 
  $(".cc_i_select").on("change", function (e) {
    var x = e.target;
    var val = e.target.value;

    if (val == '1') {
      cc_i_remove();
      cc_i_position1.classList.add('display-block');
    } else if (val == '2') {
      cc_i_remove();
      cc_i_position2.classList.add('display-block');
    } else if (val == '3') {
      cc_i_remove();
      cc_i_position3.classList.add('display-block');
    } else if (val == '4') {
      cc_i_remove();
      cc_i_position4.classList.add('display-block');
    }
  });


  // Greetings dialog position
  var val = $('.cc_g_select').find(":selected").val();

  var cc_g_position2 = document.querySelector('.cc_g_position-2');
  var cc_g_position1 = document.querySelector('.cc_g_position-1');
  var cc_g_position3 = document.querySelector('.cc_g_position-3');
  var cc_g_position4 = document.querySelector('.cc_g_position-4');

  if (val == '1') {
    cc_g_position1.classList.add('display-block');
  } else if (val == '2') {
    cc_g_position2.classList.add('display-block');
  } else if (val == '3') {
    cc_g_position3.classList.add('display-block');
  } else if (val == '4') {
    cc_g_position4.classList.add('display-block');
  }

  // onchange - Greetings - postion 
  $(".cc_g_select").on("change", function (e) {
    var x = e.target;
    var val = e.target.value;

    if (val == '1') {
      cc_g_remove();
      cc_g_position1.classList.add('display-block');
    } else if (val == '2') {
      cc_g_remove();
      cc_g_position2.classList.add('display-block');
    } else if (val == '3') {
      cc_g_remove();
      cc_g_position3.classList.add('display-block');
    } else if (val == '4') {
      cc_g_remove();
      cc_g_position4.classList.add('display-block');
    }
  });


  // icon position - mobile
  var val = $('.cc_i_select-mobile').find(":selected").val();

  var cc_i_position2_mobile = document.querySelector('.cc_i_position-2-mobile');
  var cc_i_position1_mobile = document.querySelector('.cc_i_position-1-mobile');
  var cc_i_position3_mobile = document.querySelector('.cc_i_position-3-mobile');
  var cc_i_position4_mobile = document.querySelector('.cc_i_position-4-mobile');

  if (val == '1') {
    cc_i_position1_mobile.classList.add('display-block');
  } else if (val == '2') {
    cc_i_position2_mobile.classList.add('display-block');
  } else if (val == '3') {
    cc_i_position3_mobile.classList.add('display-block');
  } else if (val == '4') {
    cc_i_position4_mobile.classList.add('display-block');
  }

  // onchange - icon - postion - mobile
  $(".cc_i_select-mobile").on("change", function (e) {
    var x = e.target;
    var val = e.target.value;

    if (val == '1') {
      cc_i_remove_mobile();
      cc_i_position1_mobile.classList.add('display-block');
    } else if (val == '2') {
      cc_i_remove_mobile();
      cc_i_position2_mobile.classList.add('display-block');
    } else if (val == '3') {
      cc_i_remove_mobile();
      cc_i_position3_mobile.classList.add('display-block');
    } else if (val == '4') {
      cc_i_remove_mobile();
      cc_i_position4_mobile.classList.add('display-block');
    }
  });


  // Greetings dialog position - mobile
  var val = $('.cc_g_select-mobile').find(":selected").val();

  var cc_g_position2_mobile = document.querySelector('.cc_g_position-2-mobile');
  var cc_g_position1_mobile = document.querySelector('.cc_g_position-1-mobile');
  var cc_g_position3_mobile = document.querySelector('.cc_g_position-3-mobile');
  var cc_g_position4_mobile = document.querySelector('.cc_g_position-4-mobile');

  if (val == '1') {
    cc_g_position1_mobile.classList.add('display-block');
  } else if (val == '2') {
    cc_g_position2_mobile.classList.add('display-block');
  } else if (val == '3') {
    cc_g_position3_mobile.classList.add('display-block');
  } else if (val == '4') {
    cc_g_position4_mobile.classList.add('display-block');
  }
  
  // onchange - Greetings - postion - mobile
  $(".cc_g_select-mobile").on("change", function (e) {
    var x = e.target;
    var val = e.target.value;

    if (val == '1') {
      cc_g_remove_mobile();
      cc_g_position1_mobile.classList.add('display-block');
    } else if (val == '2') {
      cc_g_remove_mobile();
      cc_g_position2_mobile.classList.add('display-block');
    } else if (val == '3') {
      cc_g_remove_mobile();
      cc_g_position3_mobile.classList.add('display-block');
    } else if (val == '4') {
      cc_g_remove_mobile();
      cc_g_position4_mobile.classList.add('display-block');
    }
  });




  



};

cc_default_display();












/**
 * Custom Image positions
 */
var ci_position = document.querySelectorAll('.ci_position');
var ci_position_mobile = document.querySelectorAll('.ci_position-mobile');

//  incase display-block is added remove it ..
var remove = function remove() {
  ci_position.forEach(function (e) {
    e.classList.remove('display-block');
  });
};

//  incase display-block is added remove it ..
var remove_mobile = function remove() {
  ci_position_mobile.forEach(function (e) {
    e.classList.remove('display-block');
  });
};


function ci_default_display() {

  var val = $('.select').find(":selected").val();

  var position1 = document.querySelector('.ci_position-1');
  var position2 = document.querySelector('.ci_position-2');
  var position3 = document.querySelector('.ci_position-3');
  var position4 = document.querySelector('.ci_position-4');

  if (val == '1') {
    position1.classList.add('display-block');
  } else if (val == '2') {
    position2.classList.add('display-block');
  } else if (val == '3') {
    position3.classList.add('display-block');
  } else if (val == '4') {
    position4.classList.add('display-block');
  }


  // onchange - postion 
  $(".select").on("change", function (e) {
    var x = e.target;
    var val = e.target.value;

    if (val == '1') {
      remove();
      position1.classList.add('display-block');
    } else if (val == '2') {
      remove();
      position2.classList.add('display-block');
    } else if (val == '3') {
      remove();
      position3.classList.add('display-block');
    } else if (val == '4') {
      remove();
      position4.classList.add('display-block');
    }
  });

};

ci_default_display();



function ci_default_display_mobile() {

  var val = $('.select-mobile').find(":selected").val();

  var position1 = document.querySelector('.ci_position-1-mobile');
  var position2 = document.querySelector('.ci_position-2-mobile');
  var position3 = document.querySelector('.ci_position-3-mobile');
  var position4 = document.querySelector('.ci_position-4-mobile');

  if (val == '1') {
    position1.classList.add('display-block');
  } else if (val == '2') {
    position2.classList.add('display-block');
  } else if (val == '3') {
    position3.classList.add('display-block');
  } else if (val == '4') {
    position4.classList.add('display-block');
  }

  // onchange - mobile position
$(".select-mobile").on("change", function (e) {
  var x = e.target;
  var val = e.target.value;

  if (val == '1') {
    remove_mobile();
    position1.classList.add('display-block');
  } else if (val == '2') {
    remove_mobile();
    position2.classList.add('display-block');
  } else if (val == '3') {
    remove_mobile();
    position3.classList.add('display-block');
  } else if (val == '4') {
    remove_mobile();
    position4.classList.add('display-block');
  }
});


};

ci_default_display_mobile();


















});













/**
 * makes an ajax call
 * by default service_content will hide using style="display: none;"
 * if ht_cc_service_content option is not set or not equal to hide
 * then show the card  - set display: block
 * ajax action at admin.php
 */
jQuery.post(    
    ajaxurl, 
    {
        'action': 'ht_cc_service_content',
    }, 
    function(response){
        if ( 'hide' !== response ) {
            var service_content = document.querySelector(".service-content");
            if ( service_content ) {
                service_content.style.display = "block";
            }
        }
    }
);
  
  
/**
 * when clicked on hide at admin - service content
 * makes an ajax call an update / create the ht_cc_service_content option to hide
 * ajax action at admin.php
 */
function ht_cc_admin_hide_services_content() {

jQuery.post(
    ajaxurl, 
    {
        'action': 'ht_cc_service_content_hide',
    }, 
);

var service_content = document.querySelector(".service-content");

if  ( service_content ) {
    service_content.style.display = "none";
}

}




// wpColorPicker
// jQuery(document).ready(function($){
//   $('.htcc-color-wp').wpColorPicker();
// });

jQuery(document).ready(function($){
  if ( $(".htcc-color-wp") ) {
    if ( $(".htcc-color-wp").spectrum ) {
      $(".htcc-color-wp").spectrum({
      preferredFormat: "hex",
      showInput: true,
      allowEmpty:true,
      chooseText:'Select',
      // showPalette: true,
      // showSelectionPalette: true,
      // palette: [ 'red', 'green', 'blue' ],
      // localStorageKey: "spectrum.homepage",
      });
    }
  }
});
