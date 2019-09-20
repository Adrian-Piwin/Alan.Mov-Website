
// Loading dom
(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        var navOpt = document.getElementsByClassName("nav-opt");
        var navName = document.getElementsByClassName("nav-name");
        var navInfo = document.getElementById("info");
        var loadOne = document.getElementsByClassName("load-one");
        var loadTwo = document.getElementsByClassName("load-two");
        var loadContainer = document.getElementsByClassName("nav-loader-container");
        var navLine = document.getElementsByClassName("nav-line");

        // On click of info button
        $(navInfo).one('click', function() {
          $(navOpt).addClass('no-hover'); 

          // Stop animation when finished
          $(loadOne).one('animationiteration', function() {
            $(this).css("animation", "none");
          });

          $(loadTwo).one('animationiteration', function() {
            $(this).css("animation", "none");
          });

          // Speed up
          $(loadContainer).css("animation", "navSpinContainer ease-in-out 1.5s 1 0s");

          // Draw nav line when completed
          $(navLine).css("animation", "drawLine ease-in-out 1.5s 1 1.5s");
          $(navLine).css("animation-fill-mode", "forwards");
        });
      

        // On hover of button, reveal name
        $(loadContainer).one('mouseover', function() {
          $(navName).css("animation", "fadeIn 1s ease-in-out 0s 1 forwards");
        });
      }
    })(window, document, undefined);

