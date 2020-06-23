$(document).ready(function () {
  $(".btn").on("click", function () {
    // $("#app").toggleClass("mobile");
    $('#app').toggleClass("open");
  });
  $(".wrap").on("click", function () {
    $('#app').toggleClass("open");
  });
//   $(".wrap").on("scroll", function () {
//     // $('#app').toggleClass("mobile");
//     console.log(1234)
//   });
});

