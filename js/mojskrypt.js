(function($) {

$(document).ready(function () {

   var button = $("button");
   var input = $("input");
   var ul = $("<ul></ul>");
   var div = $(".center");

   button.on("click", function(e) {
      e.preventDefault();

      var inputVal = input.val();

      if ( inputVal !== "") {
         var li = $("<li></li>");
         li.text(inputVal);
         ul.append(li);
      }
      input.val(''); //czyści pole input po kliknięciu
   });
   div.append(ul);
});


})(jQuery);
