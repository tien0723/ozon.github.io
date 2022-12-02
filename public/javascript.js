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
     if($(this).scrollTop()){
         $('header').addClass('sticky');
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