var CHs = [3.0,1.0,3.0,1.0,3.0,1.0,3.0,2.0,1.0];
var x = 0;
var LG = document.getElementById("LG");
function lg()
{
    x = 0;
}
function gp()
{
    x = 1;
}
function calc()
{
    var inpu = document.getElementsByClassName("in");
    var sum = 0.0;
    var poi = 0.0;
    var gra = "F";
    for (var i=0;i<9;i++)
    {
        gra = inpu[i].value;
        poi = 0.0;
        if (gra==="A+" || gra==="A") {
            poi = 4.0;
        }
        else if (gra==="A-") {
            poi = 3.7;
        }
        else if (gra==="B+") {
            poi = 3.3;
        }
        else if (gra==="B") {
            poi = 3.0;
        }
        else if (gra==="B-") {
            poi = 2.7;
        }
        else if (gra==="C+") {
            poi = 2.3;
        }
        else if (gra==="C") {
            poi = 2;
        }
        else if (gra==="C-") {
            poi = 1.7;
        }
        else if (gra==="D+") {
            poi = 1.3;
        }
        else if (gra==="D") {
            poi = 1;
        }
        else if (gra==="D-") {
            poi = 0.7;
        }
        else {
            poi = 0;
        }
        sum += (poi*CHs[i]);
    }
    var gpa = sum/18.0;
    var s = document.getElementById("gp");
    s.innerHTML = gpa.toFixed(4);
}
