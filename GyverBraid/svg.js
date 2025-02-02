function setup() {
  createCanvas(600, 600, SVG);
  strokeWeight(0.3);
  stroke(0, 0, 0, 170);
  noFill();
}

function get_xy_raw(x, y, r, cur, max) {
  x = x + r * Math.cos(2 * Math.PI * cur / max);
  y = y + r * Math.sin(2 * Math.PI * cur / max);
  x = Math.round(x);
  y = Math.round(y);
  return { x, y };
}

function draw() {
  let s = document.location.toString();
  s = s.slice(s.indexOf('?') + 1);
  let lines = atob(s).split('').map(function (v) { return v.codePointAt(0) });
  let amount = lines.pop();
  
  if (lines.length != 0) {
    for (let i = 1; i < lines.length; i++) {
      let xy0 = get_xy_raw(width / 2, height / 2, width / 2, lines[i], amount);
      let xy1 = get_xy_raw(width / 2, height / 2, width / 2, lines[i - 1], amount);
      line(xy0.x, xy0.y, xy1.x, xy1.y);
    }
    noLoop();
  }
}

function saveSVG() {
  save("canvas.svg");
}