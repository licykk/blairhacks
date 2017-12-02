/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function NeededGrade () {
  /*var PointsInClass = document.getElementById("num").value;
  var CurrentPoints = document.getElementById("dem").value;
  var TargetGrade = document.getElementById("test").value;
  var TestPoints = document.getElementById("target").value;
  var NeededGrade;
  NeededGrade = (TargetGrade*(PointsInClass+TestPoints)-CurrentPoints)/(100*TestPoints);*/
  document.getElementById("needed").innerHTML = "Points needed on test:";
  /*return NeededGrade;*/
}
