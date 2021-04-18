"use strict";

// *********CHAT**************
const num = $(".icons__icon-number").text();
localStorage.setItem("num", num);
//change number of chats when chat icon gets clicked
$(".icons__link--chat").click(function () {
  const newNum = $(".icons__icon-number").text("0");
  localStorage.setItem("num", newNum);
});

//removing text from text area on focus
$(".chat__textarea").focus(function () {
  $(".chat__textarea").val("");
});
//adding text to chat
$(".chat__button").click(function () {
  const text = $(".chat__textarea").val();
  if (text != "") {
    $(".chat__content").append(
      "<p  class='chat__paragraph'><strong>Isabel:</strong> " + text + "</p>"
    );
    //adding scroll effect to the chat anytime a new message is entered
    $(".chat__content")
      .stop()
      .animate({
        scrollTop: $(".chat__content")[0].scrollHeight,
      });
  }
});

//private chat functionality

//list item click

$(".chat__item")
  .not(":first")
  .on("click", function () {
    $(".chat__title").hide();
    $(".chat__content").find("p").remove();
    $(".chat__invisible").find("p").remove();
    $(".chat__textarea").val("Write anything...");
    $(".chat__invisible").css("display", "flex");

    let userName = $(this).text();

    $(".chat__invisible").prepend(
      "<p  class='chat__paragraph'>Say something to<strong> " +
        userName +
        ":</strong></p>"
    );
  });

//"back to general" button
$(".chat__button-general").click(function () {
  $(".chat__invisible").css("display", "none");
  $(".chat__content").find("p").remove();
  $(".chat__title").show();
});
// *********SPORTS**************
// FAQ slide effect
$(".enquiries__list-item").click(function () {
  $(this).next().slideToggle(800);
});

// / *********CHECKOUT**************

//card / paypal animation

$("#button__paypal").click(function () {
  $(".checkout__paypal").fadeIn("slow").addClass("checkout__active");
  $(".checkout__card").fadeOut("slow").removeClass("checkout__active");
});

$("#button__card").click(function () {
  $(".checkout__card").fadeIn("slow").addClass("checkout__active");
  $(".checkout__paypal").fadeOut("slow").removeClass("checkout__active");
});

//total price animation
let roomType;
let peopleNumber;

$(".room-type").change(function () {
  roomType = $(".room-type").val();
  console.log(roomType);
});

$(".people-number").change(function () {
  if (
    $(".people-number").val() != "" &&
    $(".people-number").val() <= 4 &&
    $(".people-number").val() >= 1
  ) {
    peopleNumber = $(".people-number").val();

    console.log(peopleNumber);

    $(".total-price").html(`Total price: £ ${peopleNumber * roomType}`);
  } else {
    $(".total-price").html("");
  }
});
