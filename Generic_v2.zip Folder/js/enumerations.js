$(function() {
  var enumeration_updater = function(interaction) {
    $(".content-wrap").each(function(){
      var blocks = $(this).find(".contentblock");
      var enums = blocks.children(".enum");
      var gap = parseInt(enums.css("padding-right"), 10);
      var widest = 0;
      enums.each(function() {
        if ($(this).width() > widest) {
          widest = $(this).width();
        }
      });
      if (widest>0){
        blocks.css("padding-left", widest + gap);
        enums.css("width", widest);
        blocks.css("display", "none");
        blocks.offsetHeight;
        blocks.show();
      }
    });
  }

  a5.hooks.interactionShowed.add(enumeration_updater);
});
