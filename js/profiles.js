const AXIS_NAMES = ['Left Stick', 'Left Stick', 'Right Stick', 'Right Stick'];

function layer(name, input) {
    return { name, inputs: [input] };
}

function stick(name, ax, ay) {
    return { name, ax, ay, inputs: ['a' + ax + '-', 'a' + ax + '+', 'a' + ay + '-', 'a' + ay + '+'] };
}

const PROFILES = {
    'vex-v5': {
        skip: ['b8'],
        buttons: ['B', 'A', 'Y', 'X', 'L1', 'R1', 'L2', 'R2', '', '', '', '', 'Up Arrow', 'Down Arrow', 'Left Arrow', 'Right Arrow'],
        layers: [
            layer('l1', 'b4'), layer('l2', 'b6'), layer('r1', 'b5'), layer('r2', 'b7'),
            layer('up', 'b12'), layer('down', 'b13'), layer('left', 'b14'), layer('right', 'b15'),
            layer('x', 'b3'), layer('b', 'b0'), layer('y', 'b2'), layer('a', 'b1')
        ],
        sticks: [stick('left-stick', 0, 1), stick('right-stick', 2, 3)]
    },
    xbox: {
        buttons: ['A', 'B', 'X', 'Y', 'LB', 'RB', 'LT', 'RT', 'View', 'Menu', 'LS Click', 'RS Click', 'D-Pad Up', 'D-Pad Down', 'D-Pad Left', 'D-Pad Right'],
        layers: [
            layer('lb', 'b4'), layer('lt', 'b6'), layer('rb', 'b5'), layer('rt', 'b7'),
            layer('up', 'b12'), layer('down', 'b13'), layer('left', 'b14'), layer('right', 'b15'),
            layer('y', 'b3'), layer('a', 'b0'), layer('x', 'b2'), layer('b', 'b1')
        ],
        sticks: [stick('left-stick', 0, 1), stick('right-stick', 2, 3)]
    }
};