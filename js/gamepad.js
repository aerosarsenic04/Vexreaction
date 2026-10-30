const pad = { connected: false, id: '', frame: null };
const padListeners = { connect: [], disconnect: [], frame: [] };
let deadzone = 0.5;

function onPad(type, fn) {
    padListeners[type].push(fn);
}

function emitPad(type, data) {
    padListeners[type].forEach((fn) => {
        try {
            fn(data);
        } catch (error) {
            console.error(error);
        }
    });
}

function setDeadzone(value) {
    deadzone = Math.min(0.95, Math.max(0.05, Number(value) || 0.5));
}

function firstPad() {
    const pads = navigator.getGamepads ? Array.from(navigator.getGamepads()) : [];
    return pads.find((p) => p && p.connected) || null;
}

function readInputs(p) {
    const inputs = new Set();
    p.buttons.forEach((button, i) => {
        if (button.pressed || button.value > 0.5) inputs.add('b' + i);
    });
    p.axes.forEach((value, i) => {
        if (value > deadzone) inputs.add('a' + i + '+');
        if (value < -deadzone) inputs.add('a' + i + '-');
    });
    return inputs;
}

function pollGamepad() {
    requestAnimationFrame(pollGamepad);
    const p = firstPad();
    if (!p) {
        if (pad.connected) {
            pad.connected = false;
            pad.frame = null;
            emitPad('disconnect', pad.id);
        }
        return;
    }
    if (!pad.connected) {
        pad.connected = true;
        pad.id = p.id;
        emitPad('connect', p.id);
    }
    pad.frame = { time: performance.now(), inputs: readInputs(p), axes: Array.from(p.axes) };
    emitPad('frame', pad.frame);
}

requestAnimationFrame(pollGamepad);