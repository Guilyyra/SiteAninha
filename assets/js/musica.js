var tocando = 0
var audio = new Audio("/assets/sounds/ArmandinhoOutraVida.mp3", true);


function playSound(){
    audio.play();
    audio.volume = 0.1;
    iconeSom.style.opacity = 0;
    setTimeout(function() {
        iconeSom.src="assets/imgs/speaker.svg";
        iconeSom.style.opacity = 1;
        
    }, 400);
    
}
function muteAudio(){
    audio.volume = 0;
    iconeSom.style.opacity = 0;
    setTimeout(function() {
        iconeSom.src="assets/imgs/mute.svg";
        iconeSom.style.opacity = 1;
        
    }, 400);
    
}
function play(){
    const iconeSom = document.getElementById("iconeSom");
    if(tocando == 0){
        playSound()
        tocando = 1;
    }else{
        muteAudio()
        tocando = 0;
    }
}