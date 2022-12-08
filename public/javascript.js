  //go to top--------------------------------------------------------------------
  // Get the button
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
//slick slider--------------------------------------------------------
  $(".slideshow").slick({

      infinite: true,
      autoplay: false,
      dots: true,
      arrows: true,
      autoplaySpeed: 4000,

      //  toc do chieu dai khong khoang cach
      speed: 1000,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
  });
  $(".slideshow1").slick({

      infinite: true,
      autoplay: false,
      dots: true,
      arrows: true,
      autoplaySpeed: 4000,
  });
//header----------------------------------------------------------------
$(document).ready(function(){
    $(window).scroll(function(){
      console.log($(this).scrollTop())
     if($(this).scrollTop()){
         $('header').addClass('sticky');
        //  $('header').css("background", "#fff");
         console.log("asdasdasda")
     }else{
         $('header').removeClass('sticky');
     }
    })
 })
 //Tabs---------------------------------------------------------------
 function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
   
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // processbar
  var i = 0;
  function move() {
    if (i == 0) { 
      i = 1;
      var elem = document.getElementById("myBar");
      var pt = document.getElementById("pt").innerText;
      var elemPT = document.getElementById("pt");
      var elemTT = document.getElementById("TT");
      var elem92 = document.getElementById("myBar-92");
      var pt92 = document.getElementById("pt-92").innerText;
      var elemPT92 = document.getElementById("pt-92");
      var elemTT92 = document.getElementById("TT-92");
      var elem87 = document.getElementById("myBar-87");
      var pt87 = document.getElementById("pt-87").innerText;
      var elemPT87 = document.getElementById("pt-87");
      var elemTT87 = document.getElementById("TT-87");
      var elem98 = document.getElementById("myBar-98");
      var pt98 = document.getElementById("pt-98").innerText;
      var elemPT98 = document.getElementById("pt-98");
      var elemTT98 = document.getElementById("TT-98");
      var width = 1;
      var width92 =1;
      var width87 =1;
      var width98 =1;
      var marginLeft =1;
      var marginLeft92 =1;
      var marginLeft87 =1;
      var marginLeft98 =1;
      var marginRight= 1;
      var marginRight92= 1;
      var marginRight87= 1;
      var marginRight98= 1;
      setInterval(frame, 10);
  
      function frame() {
        if(width+"%"!=pt ){
          width++;
          elem.style.width = width + "%";
        }
        if(marginLeft<69 ){
          marginLeft++;
            elemPT.style.marginLeft = marginLeft +"%";
          }
         
      }
      setInterval(frame92, 10);
      function frame92(){
        if(width92 + "%" != pt92){
          width92++;
          elem92.style.width = width92 + "%";
        }
        if(marginLeft92<60){
          marginLeft92++;
            elemPT92.style.marginLeft = marginLeft92 +"%";
          }
      }
      setInterval(frame87, 10);
      function frame87(){
        if(width87 + "%" != pt87){
          width87++;
          elem87.style.width = width87 + "%";
        }
        if(marginLeft87<66){
          marginLeft87++;
            elemPT87.style.marginLeft = marginLeft87 +"%";
          }
      }
      setInterval(frame98, 10);
      function frame98(){
        if(width98 + "%" != pt98){
          width98++;
          elem98.style.width = width98 + "%";
        }
        if(marginLeft98<77){
          marginLeft98++;
            elemPT98.style.marginLeft = marginLeft98 +"%";
          }
        
      }
     }
  }
 

