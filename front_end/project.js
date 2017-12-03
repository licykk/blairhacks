/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function NeededGrade() {
  var PointsInClass = parseInt(document.getElementById("num").value);
  var CurrentPoints = parseInt(document.getElementById("den").value);
  var TestPoints = parseInt(document.getElementById("test").value);
  var TargetGrade = parseInt(document.getElementById("target").value);

  TargetGrade = TargetGrade/100;
  var NeededGrade = TargetGrade*(CurrentPoints+TestPoints)-PointsInClass;
  /*return NeededGrade;*/
  /*If A*/
  if(TargetGrade < .97 && TargetGrade >= .895){
    document.getElementById("meme").src = "https://memegenerator.net/img/instances/43224700.jpg";
  }else {
    /*If B*/
    if((TargetGrade < .895 && TargetGrade >= .795) || (NeededGrade-TestPoints > 0 && NeededGrade-TestPoints < 10)){
      document.getElementById("meme").src = "https://i.imgflip.com/bocqd.jpg";
    }else {
      /*If C*/
      if(TargetGrade < .795 && TargetGrade >= .695){
        document.getElementById("meme").src = "http://s2.quickmeme.com/img/9c/9c060090c221032744230f1d7516769f3e1a443d2b9ddba1e04b24428ce6d426.jpg";
      }else {
        /*If D*/
        if(TargetGrade < .695 && TargetGrade >= .595){
          document.getElementById("meme").src = "https://pics.me.me/waiter-please-bring-me-something-ive-never-tasted-good-grades-17987772.png";
        }else {
          /*If E*/
          if(TargetGrade < .595 && TargetGrade != 55){
            document.getElementById("meme").src = "http://s2.quickmeme.com/img/4b/4b2cb223c055cdffeaa8ef90a92fa9a8ebdceea4a90369db0e38a53f933456ae.jpg";
          }else {
            if(TargetGrade == 55){
              document.getElementById("meme").src = "https://i.imgur.com/VhbqsNZ.jpg";
            }else{
              document.getElementById("meme").src = "";
            }
          }
        }
      }
    }
  }



  if(PointsInClass == 0){
    document.getElementById("meme").src = "https://smithhousedesign.com/wp-content/uploads/2015/04/242601.png";
  }





  if (NeededGrade > TestPoints){
    document.getElementById("needed").innerHTML = "You are utterly screwed. L053r5 ";
    document.getElementById("meme").src = "http://s2.quickmeme.com/img/b4/b42bed86371a06e0b3956d6d3130544935d5a1300d3f58081d8788a5dee0872c.jpg";
  }else if (PointsInClass/CurrentPoints > TargetGrade) {
    document.getElementById("needed").innerHTML = "You already have the grade you need! What are you doing with your life?";
    document.getElementById("meme").src = "https://i.ytimg.com/vi/hC1CzXxBcKY/hqdefault.jpg";
  }
  else{
    document.getElementById("needed").innerHTML = "Points needed on test: " + NeededGrade;
  }
}

function ProCalc() {
  var duedate = new Date(document.getElementById("date").value);
  var points = parseInt(document.getElementById("worth").value);
  var subject = document.getElementById("class").value;

  var today = new Date();
  var timeDiff = Math.abs(duedate - today);
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  var end = 0;
  if(points < 20){
    end = 1;
  }else if (points < 40 && points >= 20) {
    end = 2;
  }else if (points < 100 && points >= 40) {
    end = 3;
  }else if (points >= 100){
    end = 4;
  }

  var d = new Date();
  d.setDate(d.getDate() - end);
  console.log(d.toString());

  // First of month
  var c = new Date(2017,1,1); // 1 Feb -> 30 Jan
  c.setDate(c.getDate() - end);
  console.log(c.toString());

  // First of year
  var b = new Date(2018,0,1); // 1 Jan -> 30 Dec
  b.setDate(b.getDate() - end);
  console.log(b.toString());
    document.getElementById("time").innerHTML = "Time you should start: " + end + " days before due date <br> Which is: " + d;
  }
