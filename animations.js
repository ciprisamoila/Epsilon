// open a link with key press
document.addEventListener('keydown', e => {
    if(e.keyCode === 69) {
        window.location.href = "camera.html";
    } 
});

//video
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Not adding `{ audio: true }` since we only want video now
  navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      let video = document.querySelector('video');
      if("srcObject" in video){
          video.srcObject = stream;
      }
      else{
          video.src = window.URL.createObjectURL(stream);
      }
      video.play();
  } , function(){
      window.location.replace("haaatz.html");
  });
}

//navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-52px";
  }
  prevScrollpos = currentScrollPos;
}


function add()
{
    var x = document.getElementById("nr");
    var y = Number(x.innerHTML) + 1;
    x.innerHTML = String(y);

    if(y%10==0)
    {
        if(confirm("Felicitari! Ai agonisit " + String(y) + " Epsilon! Doresti sa ii extragi?"))
        {
            window.open("https://setpichecccu.000webhostapp.com/","_blank");
        }
    }

    
}
