var darkEnabled = false;
$(document).ready(function() {
  // Contents of Ready 1 (This one)
  $("#dark2").on("click", switchDarkMode);
  $("#reset").on("click", reset);
  $("#dark1").on("click", switchDarkMode);
  // Contents of Ready 2
  $('.parallax').parallax();
  // Contents of Ready 3
  $('.button-collapse').sideNav({
    menuWidth: '300',
    edge: 'left',
    closeOnClick: 'true',
    draggable: 'true',
  });
});

function switchDarkMode() {
  darkEnabled = !darkEnabled;
  if(darkEnabled) $("body").addClass("darkmode");
  else $("body").removeClass("darkmode");
}

function reset() {
  darkEnabled = false;
  $("body").removeClass("darkmode");
}
