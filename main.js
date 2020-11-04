document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.carousel');
   M.Carousel.init(elems, {
      duration: 150,
      indicators: true});
      
      
   });

(document).ready(function(){
(".carousel").carousel();


setInterval(function(){
   (".carousel").carousel("next");
}, 2000);

});
   