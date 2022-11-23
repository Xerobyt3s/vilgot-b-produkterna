function compare(){
    let slidevalue = document.getElementById("slider").value * 0.1;
    document.getElementById("ray-pic").style.clipPath = "polygon(0 0," + slidevalue + "% 0, " + slidevalue + "% 100%, 0 100%)";
}