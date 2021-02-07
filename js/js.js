$(document).ready(function () {
  $(".enquiries__list-item").click(function () {
    $(this).next().slideToggle(800);
  });
});
