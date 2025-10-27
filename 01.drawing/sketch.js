function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(144,238,144);
  // L yellow circle base
  fill(255,255,0)
  circle(175,175,100)

  // L left eye
  fill(255,255,255)
 circle(150,170,10)
 fill(0,0,0)
  circle(149,170,5)

 //L right eye
  fill(0,0,0)
 circle(190,170,10)

 // R yellow circle base
  fill(255,255,0)
  circle(230,175,100)

 //R left eye
  fill(255,255,255)
 circle(200,170,10)
 fill(0,0,0)
 circle(199,170,5)
 
 //R right eye
  fill(255,255,255)
 circle(250,170,10)
 fill(0,0,0)
 circle(249,170,5)

 // R smile 
 fill(0,0,0)        
 curve(190,160,250,190,200,200,10,15)

 //L frown
 line(150,200,185,200)

 // L eyebrow
 line(142,155,160,150)

 // R left eyebrow
 line(190,155,210,155)

 // R right eyebrow
 line(245,155,265,155)
}
