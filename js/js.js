"use strict";
$(document).ready(function () {
  // *********CHAT**************
  //removing text from text area on focus
  $(".chat__textarea").focus(function () {
    $(".chat__textarea").val("");
  });
  //adding text to chat
  $(".chat__button").click(function () {
    const text = $(".chat__textarea").val();
    if (text != "") {
      $(".chat__content").prepend(
        "<p  class='chat__paragraph'><strong>Isabel:</strong> " + text + "</p>"
      );
    }
  });

  // *********SPORTS**************
  // FAQ slide effect
  $(".enquiries__list-item").click(function () {
    $(this).next().slideToggle(500);
  });
});
