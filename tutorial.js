function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //ellipse(200, 200, 80, 80);
  let x = 0;
  let y = 0;
  let h = 10;
  let v = 10;
  let count = 0;
  while (count <= 40) {
     x += 10
     y += 10
     //h += 10
     //v += 10
     ellipse(x, y, h, v);
     count++
  }
}
