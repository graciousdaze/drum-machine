const sounds = {
    q: 'sounds/bubbles.mp3',
    w: 'sounds/confetti.mp3',
    e: 'sounds/corona.mp3',
    a: 'sounds/dotted-spiral.mp3',
    s: 'sounds/glimmer.mp3',
    d: 'sounds/pinwheel.mp3',
    z: 'sounds/splits.mp3',
    x: 'sounds/veil.mp3',
    c: 'sounds/squiggle.mp3'
};

console.log("Connected!");

$(document).keydown(function(event) {
    if(sounds[event.key] !== undefined){
        playSound(sounds[event.key]);
    }
});

$(document).ready(function(){
    $('.drum-pad').click(function(){
        playSound(sounds[$(this).attr('id')]);
    });
});

function playSound(soundSrc){
    let makeNoise = new Howl({
        src: soundSrc
    });
    makeNoise.play();
};
