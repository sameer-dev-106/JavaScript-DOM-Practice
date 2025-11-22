const audioMap = {
    // Octave 1 - White Keys (C1-B1)
    KeyQ: './Piano sound/28.mp3',  // C1
    KeyW: './Piano sound/30.mp3',  // D1
    KeyE: './Piano sound/32.mp3',  // E1
    KeyR: './Piano sound/33.mp3',  // F1
    KeyT: './Piano sound/35.mp3',  // G1
    KeyY: './Piano sound/37.mp3',  // A1
    KeyU: './Piano sound/39.mp3',  // B1

    // Octave 2 - White Keys (C2-B2)
    KeyZ: './Piano sound/40.mp3',  // C2
    KeyX: './Piano sound/42.mp3',  // D2
    KeyC: './Piano sound/44.mp3',  // E2
    KeyV: './Piano sound/45.mp3',  // F2
    KeyB: './Piano sound/47.mp3',  // G2
    KeyN: './Piano sound/49.mp3',  // A2
    KeyM: './Piano sound/51.mp3',  // B2

    // Octave 3 - White Keys (C3-B3)
    KeyA: './Piano sound/52.mp3',  // C3
    KeyS: './Piano sound/54.mp3',  // D3
    KeyD: './Piano sound/56.mp3',  // E3
    KeyF: './Piano sound/57.mp3',  // F3
    KeyG: './Piano sound/59.mp3',  // G3
    KeyH: './Piano sound/61.mp3',  // A3
    KeyJ: './Piano sound/63.mp3',  // B3

    // Octave 4 - White Keys (C4)
    KeyK: './Piano sound/63.mp3',  // C4 

    // Octave 1 - Black Keys
    Digit1: './Piano sound/29.mp3',  // C#1
    Digit2: './Piano sound/31.mp3',  // D#1
    Digit3: './Piano sound/34.mp3',  // F#1
    Digit4: './Piano sound/36.mp3',  // G#1
    Digit5: './Piano sound/38.mp3',  // A#1

    // Octave 2 - Black Keys
    Digit6: './Piano sound/41.mp3',  // C#2
    Digit7: './Piano sound/43.mp3',  // D#2
    Digit8: './Piano sound/46.mp3',  // F#2
    Digit9: './Piano sound/48.mp3',  // G#2
    Digit0: './Piano sound/50.mp3',  // A#2

    // Octave 3 - Black Keys
    Minus: './Piano sound/53.mp3',      // C#3
    Equal: './Piano sound/55.mp3',      // D#3
    BracketLeft: './Piano sound/58.mp3',   // F#3
    BracketRight: './Piano sound/60.mp3',  // G#3
    Backslash: './Piano sound/62.mp3'      // A#3
};

const pressedKeys = new Set();
const allKeys = document.querySelectorAll('.key');

// Preload audio
const audioCache = {};
Object.keys(audioMap).forEach(key => {
    audioCache[key] = new Audio(audioMap[key]);
});

// Play sound function
function playSound(keyCode) {
    if (audioCache[keyCode]) {
        audioCache[keyCode].currentTime = 0;
        audioCache[keyCode].play().catch(err => console.log('Audio play error:', err));
    }
}

// Keyboard events
document.addEventListener('keydown', (e) => {
    if (pressedKeys.has(e.code)) return;
    if (e.code === 'CapsLock') return;

    pressedKeys.add(e.code);

    const keyElement = document.querySelector(`[data-key="${e.code}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        playSound(e.code);
    }
});

document.addEventListener('keyup', (e) => {
    pressedKeys.delete(e.code);

    const keyElement = document.querySelector(`[data-key="${e.code}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});

// Mouse/Touch events
allKeys.forEach(key => {
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
        playSound(key.getAttribute('data-key'));
    });

    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });

    key.addEventListener('mouseleave', () => {
        key.classList.remove('active');
    });

    // Touch support
    key.addEventListener('touchstart', (e) => {
        e.preventDefault();
        key.classList.add('active');
        playSound(key.getAttribute('data-key'));
    });

    key.addEventListener('touchend', (e) => {
        e.preventDefault();
        key.classList.remove('active');
    });
});