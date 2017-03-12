$(function() {

  var $window = $(window);

  function isScrolledIntoView(elem) {
    // these first two variables change on every scroll
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    //check where the current element is on the page and its full height
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    // If the element is in view
    if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
      // once an element is visible give it a viewed class
      $(elem).removeClass('notViewed').addClass('view');

      // If the element is above the view
    } else if((elemBottom <= docViewTop) && (elemTop < docViewTop)) {
      $(elem).removeClass('view').addClass('notViewed');

      // If the element is lower than the view
    } else if((elemBottom > docViewBottom) && (elemTop > docViewBottom)) {
      // once an element is visible give it a viewed class
      $(elem).removeClass('view').addClass('notViewed');
      
    }
    
    var animElemsLeft = $('.animBlock.notViewed').length;
    if(animElemsLeft === 0){
      // with no animated elements left debind the scroll event
      $(window).off('scroll');
    }
  }

  var girls = ["Jessica",
  "Ashley",
  "Brittany",
  "Amanda",
  "Samantha",
  "Sarah",
  "Stephanie",
  "Jennifer",
  "Elizabeth",
  "Lauren",
  "Megan",
  "Emily",
  "Nicole",
  "Kayla",
  "Amber",
  "Rachel",
  "Courtney",
  "Danielle",
  "Heather",
  "Melissa",
  "Rebecca",
  "Michelle",
  "Tiffany",
  "Chelsea",
  "Christina",
  "Katherine",
  "Alyssa",
  "Jasmine",
  "Laura",
  "Hannah",
  "Kimberly",
  "Kelsey",
  "Victoria",
  "Sara",
  "Mary",
  "Erica"];

  var fontClasses = ['pangolin', 'barrio', 'amatic', 'bahina', 'droid', 'cinzel', 'sigmar', 'pinyon'];

  // Logic for putting the names on the page

  var previousDirection = "left";
  // Add items to the page but not as visible
  girls.forEach(function(name, index) {
    var randomFont = fontClasses[Math.floor(Math.random()*fontClasses.length)];
    var elem = '<div id="devices" data-position="'+ previousDirection +'" class="notViewed animBlock floatl '+randomFont+'"><h4 id='+ index +' style="line-height: 250%">'+ name +'</h4></div>';
    $(elem).appendTo('#nameList');
    $('#' + index).fitText(0.9);
    previousDirection = previousDirection === "left" ? "right" : "left";
  });

  // on scroll display them
  $window.on('scroll', function(e){
    var $blocks = $('.animBlock');
    $blocks.each(function(i,elem){
      isScrolledIntoView($(this));
    });
  });

});