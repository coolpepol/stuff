


class Gground {
    constructor(x,y,w,h){
        this.width = w 
        this.height = h
        var options = {
            isStatic:true

        }
        this.body = Bb.rectangle(x,y,w,h,options)
        Ww.add(warld,this.body)

    }
    show_(){
        var p = this.body.position
        rectMode (CENTER )
        fill ("Green")
        rect (p.x,p.y,this.width,this.height)
    }
}