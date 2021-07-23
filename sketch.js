const Ee = Matter.Engine
const Ww = Matter.World
const Bb = Matter.Bodies
const Cc = Matter.Constraint
//e
var eee
var warld
var Gg
function setup () {
  createCanvas(400,400)
  eee = Ee.create()
  warld = eee.World
  console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  Gg = new Gground(200,380,400,18)

}
function draw(){
  background("brown")
  Ee.update(eee)
  Gg.show()
}