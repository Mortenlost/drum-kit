

document.addEventListener('keydown', cymbat)

function cymbat(event){

    var key = event.which || event.keyCode;
    
    console.log(key);

     if (key == 81) {
         var cymbal_a = new Audio('aud/Crash-Cymbal.mp3');
         cymbal_a.play();
     } else if (key == 83){
        var floor_top_a = new Audio('aud/floor_tom.wav');
        floor_top_a.play();
     }  else if (key == 68){
        var mid_tom_a = new Audio('aud/mid_tom.wav');
        mid_tom_a.play();
     } else if (key == 32){
        var kick_a = new Audio('aud/basic-drum-kick.wav');
        kick_a.play();
     } else if (key == 75){
        var high_tom_a = new Audio('aud/high-tom.wav');
        high_tom_a.play();
     } else if (key == 76){
        var snare_a = new Audio('aud/snare-basic_C_minor.wav');
        snare_a.play();
     } else if (key == 80){
        var hi_hat_a = new Audio('aud/Hi-Hat-Closed-Hit.mp3');
        hi_hat_a.play();
     } else {
        alert("Press a correct key")
     }
}
