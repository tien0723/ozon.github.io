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

// processbar
// Github verson (1 file .html): https://github.com/Soooda/progress_bar_lite/blob/master/index.html

// function increase() {
//     // Change the variable to modify the speed of the number increasing from 0 to (ms)
//     let SPEED = 40;
//     // Retrieve the percentage value
//     let limit = parseInt(document.getElementById("value1").innerHTML, 10);

// }
// window.onscroll = function () { scrollFunction1() };
// function scrollFunction1() {
//     if (document.body.scrollTop == 10 || document.documentElement.scrollTop == 10) {
//        increase();
//     } else{
//         return 0;
//     }
// }

// $(document).ready(function() {
// 	$(window).scroll(function(event) {
// 		var pos_body = $('html,body').scrollTop();
// 		if(pos_body>1000){
// 			increase();
// 		}
// 	});
// });