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
        var playSound = '';
    if(event.which == 81){
        playSound = sounds.q;
    } else if (event.which == 87){
        playSound = sounds.w;
    } else if (event.which == 69){
        playSound = sounds.e;
    } else if (event.which == 65){
        playSound = sounds.a;
    } else if (event.which == 83){
        playSound = sounds.s;
    } else if (event.which == 68){
        playSound = sounds.d;
    } else if (event.which == 90){
        playSound = sounds.z;
    } else if (event.which == 88){
        playSound = sounds.x;
    } else if (event.which == 67){
        playSound = sounds.c;
    }
    let makeNoise = new Howl({
        src: playSound
    });
    makeNoise.play();
});

/* Add on-click logic
// Refactor so the above code can be used for both onClick and KeyPress events
// Maybe if(e.which == # || div.id == "letter")
// Or...create a react/redux library?
// Create Objects for Each Letter: 
// var sounds = [
    {
        id: q,
        key: 81,
        src: 'sounds/squiggle.mp3'
    },
    {
        id: w,
        key: 87,
        src: 'sounds/confetti.mp3'
    }
];
//Put the HTML in the JS and map through each div, adding "OnClick" and "OnKeyPress" events 
*/
