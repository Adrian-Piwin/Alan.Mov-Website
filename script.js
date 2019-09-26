
// Loading dom
(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        var navLoaderContainer = document.getElementsByClassName("nav-loader-container");
        var navOpt = document.getElementsByClassName('nav-opt');

        var infoContentLine = document.getElementById("info-content-line");
        var infoWrap = document.getElementById("info-wrap");
        var navInfo = document.getElementById("nav-info");

        // On click of info button
        $(navOpt).one('click', function() {

          $(this).addClass('no-hover'); 

          // Stop animation when finished
          $(this).children(".nav-loader-container").children(".load-one").one('animationiteration', function() {
            $(this).css("animation", "none");
          });

          $(this).children(".nav-loader-container").children(".load-two").one('animationiteration', function() {
            $(this).css("animation", "none");
          });

          // Speed up
          $(this).children(".nav-loader-container").css("animation", "navSpinContainer ease-in-out 1.5s 1 0s");

          // Draw nav line when completed
          $(this).next().css({"animation":"drawLine ease-in-out 1.5s 1 1.5s", "animation-fill-mode":"forwards"});

          // Reveal next option
          $(this).next().next().show();
        });
      
        // On hover of button, reveal name
        $(navLoaderContainer).one('mouseenter', function() {
          $(this).prev().css("animation", "fadeIn 1s ease-in-out 0s 1 forwards");
        });

        $(navInfo).one('click', function() {
          // Draw line to reveal content
          drawContentLine(infoContentLine);
          $(infoWrap).show();
        });

        function drawContentLine(canvasEle) {
          var ctx = canvasEle.getContext("2d");
          ctx.beginPath();
          ctx.lineWidth = 6;
          ctx.strokeStyle = "#0a7599";
          ctx.moveTo(0, 3.5);
          ctx.lineTo(canvasEle.width/6, 3.5);
          ctx.stroke();

          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#0a7599";
          ctx.moveTo(canvasEle.width/6, 3.5);
          ctx.lineTo(canvasEle.width/6+20, canvasEle.height - 3.5);
          ctx.stroke();

          ctx.beginPath();
          ctx.lineWidth = 6;
          ctx.strokeStyle = "#0a7599";
          ctx.moveTo(canvasEle.width/6+20, canvasEle.height - 3.5);
          ctx.lineTo(canvasEle.width-100, canvasEle.height - 3.5);
          ctx.stroke();
        }
      }
    })(window, document, undefined);

