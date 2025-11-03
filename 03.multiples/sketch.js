let theText= ["WAKEUP","EAT","SMILE","FAKEIT","WORK","STUDY","GRIND","FAKE IT","REPEAT","REPEAT", "REPEAT"];
let word =theText[0];
let i = 0;
let index = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(2)
}

function draw() {
  background(0, 0, 0);

  //text
  textSize(40)
  fill(110, 255, 107)
  textFont("Courier New")
  text(word,130,200)

  word=theText[i];
  i=i+5
  if(i>theText.length)
  i=0

}
 console.log(i);