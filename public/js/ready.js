$(document).ready(function () {
  // PAGE TABS
  $("#tab-container").easytabs({
    updateHash: false,
    animate: false,
    transitionIn: "fadeIn",
    transitionOut: "fadeOut",
    tabActiveClass: "active",
    transitionInEasing: "linear",
    transitionOutEasing: "linear",
  });

  // PORTFOLIO ISOTOPE
  $(".portfolio_items").isotope({
    itemSelector: ".single_item",
    layoutMode: "fitRows",
    columnWidth: ".col-sm-3",
  });

  // isotope click function

  $(".portfolio_filter ul li").click(function () {
    $(".portfolio_filter ul li").removeClass("select-cat");
    $(this).addClass("select-cat");

    var selector = $(this).attr("data-filter");
    $(".portfolio_items").isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });

  // MAGNIFIC POPUP FOR PORTFOLIO PAGE
  $(".image-link").magnificPopup({
    type: "image",
  });

  //PAGE SMOOTH SCROLL
  $(function () {
    $("a.page-scroll").bind("click", function (event) {
      if ($(window).width() < 750) {
        $(".top-menu li").slideUp();
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top - 91,
            },
            1000
          );
        event.preventDefault();
      }
    });
  });

  // GOOGLE MAP
  $("#wrapper").bind("easytabs:after", function () {
    //   var myOptions = {
    //     zoom: 14,
    //     center: new google.maps.LatLng(
    //       40.801485408197856,
    //       -73.96745953467104
    //     ), //change the coordinates
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     scrollwheel: false,
    //     mapTypeControl: false,
    //   };
    //   var map = new google.maps.Map(
    //     document.getElementById("map"),
    //     myOptions
    //   );
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     position: new google.maps.LatLng(
    //       40.801485408197856,
    //       -73.96745953467104
    //     ), //change the coordinates
    //   });
    //   var infowindow = new google.maps.InfoWindow({
    //     content:
    //       "<b>CHRIS JOHNSON</b><br/>2550 Santa Monica Boulevard<br/> Los Angeles", //add your address
    //   });
    //   google.maps.event.addListener(marker, "click", function () {
    //     infowindow.open(map, marker);
    //   });
    //   infowindow.open(map, marker);
  });

  // TOP MENU ACTIVE

  $("ul.top-menu li a").click(function () {
    $("ul.top-menu li a").removeClass("selected");
    $(this).addClass("selected");
  });
});
