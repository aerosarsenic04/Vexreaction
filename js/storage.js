const STORAGE_KEY = 'driver-reaction-trainer'

const state = {
    layout: 'vex-v5',
    mode: 'reaction',
    deadzone: '0.5',
    bindings: {},
    bests: {},
    history: [],
    lifetime: 0
};

function loadState() {
    try{
        Object.assign(state,JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch (error) {
        console.warn('could not read saved data uh oh', error);
    }
    if (!PROFILES[state.layout]) state.layout = 'vex-v5';
    if (!MODES[state.mode]) state.mode = 'reaction';
    if (!Array.isArray(state.history)) state.history = [];
    if (!(state.lifetime >=0)) state.lifetime = 0;
}

function save() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.warn('could not save uh oh', error);
    }
}

//cache stuff like highscores and whatever soooo no need to restart :))