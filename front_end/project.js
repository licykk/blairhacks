/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function NeededGrade () {
  var PointsInClass = parseInt(document.getElementById("num").value);
  var CurrentPoints = parseInt(document.getElementById("den").value);
  var TestPoints = parseInt(document.getElementById("test").value);
  var TargetGrade = parseInt(document.getElementById("target").value);

  TargetGrade = TargetGrade/100;
  var NeededGrade = TargetGrade*(CurrentPoints+TestPoints)-PointsInClass;
  document.getElementById("needed").innerHTML = "Points needed on test: " + NeededGrade;
  /*return NeededGrade;*/
}
