var CHs = [3.0,1.0,3.0,1.0,3.0,1.0,3.0,2.0,1.0];
function calc()
{
    var inpu = document.getElementsByClassName("in");
    var sum = 0.0;
    for (var i=0;i<9;i++)
    {
        sum += (parseFloat(inpu[i].value)*CHs[i]);
    }
    console.log(sum);
    var gpa = sum/18.0;
    var s = document.getElementById("gp");
    s.innerHTML = gpa.toFixed(4);
}