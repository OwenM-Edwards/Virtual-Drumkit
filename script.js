var buttons = document.querySelectorAll(".button");

for(var i = 0;i < buttons.length; i++){
    buttons[i].addEventListener("mousedown", function(){
        this.classList.add("playing");
    });
    buttons[i].addEventListener("mouseup", function(){
        this.classList.remove("playing");
    });
}

// document.onkeypress = (event) => {
//     if (event.key === "p") playSound()
// }


// document.keydownb(e);
// function keydownb(e){
//     if (e.keyCode == 65) {
//         var audio = new Audio('/snd/beep-01a.mp3');
//         audio.play();
//     }
// }

// var audio = new Audio('beep-01a.mp3'); // define your audio

// $('.btn').click( () => audio.play() ); // that will do the trick !!

$(document).keydown(function(e){
    if (e.keyCode == 67) {
        document.getElementById('soundID').play();
        return false;
    }
});