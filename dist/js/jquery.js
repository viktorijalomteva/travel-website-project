//**** DATEPICKER ON CLICK INPUT FIELD ****//
$(function() {
  $("#datepicker-arrive").datepicker();
});

$(function() {
  $("#datepicker-depart").datepicker();
});


//**** ON CALENDAR BUTTON CLICK ****//
$(function() {
  $("#depart").datepicker();
});
function show_dp() {
  $("#depart").datepicker("show"); //Show on click of button
}

$(function() {
  $("#return").datepicker();
});
function show_dp2() {
  $("#return").datepicker("show"); //Show on click of button
}


//**** FOR FADE ANIMATION ****//
jQuery(function($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
      }
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});



//**** FOR STICKY NAVIGATION ****//
$(document).ready(function() {
  $(".js--section-about").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;"
    }
  );

  /* For scroll on button click*/
  $(".js--scroll-to-flights").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-flights").offset().top },
      1000
    );
  });

  /* Navigation scroll*/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });
});