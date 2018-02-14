$(document).ready(function() {
  $("#js-site-nav__menu").click(function() {
    $("#js-site-nav__list--mobile").toggleClass("is-open");
    $("#js-site-nav__list--mobile").fadeIn("slow");
  });
});
