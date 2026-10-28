const AXIS_NAMES = ['Left Stick', 'Left Stick', 'Right Stick', 'Right Stick']; ///CONTROLLER PROFILES except i dont have a playstation constroller, so only vex and xbox...

function dot(label, input, x, y) {
  return { label, inputs: [input], x, y, size: 8, bar: false };
}

function bar(label, input, x, y) {
  return { label, inputs: [input], x, y, size: 12, bar: true };
}

function stick(label, ax, ay, x, y) {
  const inputs = ['a' + ax + '-', 'a' + ax + '+', 'a' + ay + '-', 'a' + ay + '+'];
  return { label, inputs, x, y, size: 15, bar: false };
}

const PROFILES = {
  'vex-v5': {
    image: 'assets/vex-v5/controller.png',
    skip: ['b8'],
    buttons: ['B', 'A', 'Y', 'X', 'L1', 'R1', 'L2', 'R2', '', '', '', '', 'Up Arrow', 'Down Arrow', 'Left Arrow', 'Right Arrow'],
    spots: [
      bar('L2', 'b6', 20, 7), bar('L1', 'b4', 20, 17), bar('R2', 'b7', 80, 7), bar('R1', 'b5', 80, 17),
      dot('↑', 'b12', 21, 31), dot('↓', 'b13', 21, 53), dot('←', 'b14', 13, 42), dot('→', 'b15', 29, 42),
      dot('X', 'b3', 79, 31), dot('B', 'b0', 79, 53), dot('Y', 'b2', 70, 42), dot('A', 'b1', 88, 42),
      stick('LS', 0, 1, 36, 71), stick('RS', 2, 3, 64, 71)
    ]
  },
  xbox: {
    image: 'assets/xbox/controller.png',
    buttons: ['A', 'B', 'X', 'Y', 'LB', 'RB', 'LT', 'RT', 'View', 'Menu', 'LS Click', 'RS Click', 'D-Pad Up', 'D-Pad Down', 'D-Pad Left', 'D-Pad Right'],
    spots: [
      bar('LT', 'b6', 22, 6), bar('LB', 'b4', 22, 15), bar('RT', 'b7', 78, 6), bar('RB', 'b5', 78, 15),
      stick('LS', 0, 1, 27, 38), stick('RS', 2, 3, 62, 65),
      dot('↑', 'b12', 38, 55), dot('↓', 'b13', 38, 75), dot('←', 'b14', 31, 65), dot('→', 'b15', 45, 65),
      dot('Y', 'b3', 73, 27), dot('A', 'b0', 73, 47), dot('X', 'b2', 66, 37), dot('B', 'b1', 80, 37)
    ]
  }
};