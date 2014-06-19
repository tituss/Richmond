a5.hooks.interactionShowed.add(function(interaction) {
  $(".crossword_view > .grid").css("height", function() {
    var height = 0;
    $(this).find(".cell").each(function(i,e) {
      var bottom = e.offsetTop + e.offsetHeight;
      if (bottom > height) {
        height = bottom;
      }
    });
    var clue_height = 0;
    try {
      clue_height = $(this).siblings(".clue-list").height();
    }
    catch (error) {}
    return clue_height > height ? clue_height : height;
  });
  interaction.$(".content:has(>.playbutton:only-child)").css("text-align", "center");
});
