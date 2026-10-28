const ACTIONS = [
    {id: 'drive', label: 'drive', input: 'a1-'},
    { id: 'left', label: 'turn left', input: 'a0-' },
    { id: 'right', label: 'turn right', input: 'a0+' },
    { id: 'intake', label: 'intake', input: 'b0' },
    { id: 'outtake', label: 'outtake', input: 'b3' },
    { id: 'lifts', label: 'lifts', input: 'b5' }
];

const WAIT_MIN_MS = 1500;
const WAIT_MAX_MS = 4000;
const HISTORY_LIMIT = 100;

const $ = (id) => document.getElementById(id);

function actionLabel(id) {
  return ACTIONS.find((a) => a.id === id).label;
}
