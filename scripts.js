$(function() {
  // var $blocks = $('.animBlock.notViewed');
  var $window = $(window);

  function isScrolledIntoView(elem) {
    // these first two variables change on every scroll
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemOffset = 0;
    
    if(elem.data('offset') !== undefined) {
      elemOffset = elem.data('offset');
    }

    //check where the current element is on the page and its full height
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    
    if(elemOffset !== 0) { // custom offset is updated based on scrolling direction
      if(docViewTop - elemTop >= 0) {
        // scrolling up from bottom
        elemTop = $(elem).offset().top + elemOffset;
      } else {
        // scrolling down from top
        elemBottom = elemTop + $(elem).height() - elemOffset;
      }
    }

    if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
      // once an element is visible exchange the classes
      $(elem).removeClass('notViewed').addClass('viewed');
      
      var animElemsLeft = $('.animBlock.notViewed').length;
      if(animElemsLeft === 0){
        // with no animated elements left debind the scroll event
        $(window).off('scroll');
      }
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

  var previousDirection = "left";
  girls.forEach(function(name, index) {
    var randomFont = fontClasses[Math.floor(Math.random()*fontClasses.length)];
    var elem = '<div id="devices" data-position="'+ previousDirection +'" class="notViewed animBlock floatl '+randomFont+'"><h4 id='+ index +' style="line-height: 250%">'+ name +'</h4></div>';
    $(elem).appendTo('#nameList');
    $('#' + index).fitText(0.9);
    previousDirection = previousDirection === "left" ? "right" : "left";
  });

  $window.on('scroll', function(e){
    var $blocks = $('.animBlock.notViewed');
    $blocks.each(function(i,elem){
      if($(this).hasClass('viewed')) {
        return;
      }
      isScrolledIntoView($(this));
    });
    console.log('scroll');
    
  });

});