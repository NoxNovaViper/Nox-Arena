const MIN_X = 640;
const MIN_Y = 480;
export class pong{
    constructor(assets_path="/Games/assets"){
        //sound assets
        this.bounce=new Audio(`${assets_path}/asset_sound/bounce.mp3`);
        this.hit=new Audio(`${assets_path}/asset_sound/wall.mp3`);
        this.score_b=new Audio(`${assets_path}/asset_sound/score.mp3`);
        
        //image assets
        this.bg=new Image();
        this.bg_loaded=false;
        this.bg.onload=()=>{this.bg_loaded=true;};
        this.bg.onerror=()=>{console.error("THE BG FAILED TO LOAD: ",this.bg.src);};
        this.bg.src=`${assets_path}/asset_image/bg_g1.jpg`;

        // win/score vars
        this.score1=0;
        this.score2=0;
        this.w1=0;
        this.w2=0;
        
        //ball vars
        this.bx=MIN_X/2;
        this.by=MIN_Y/2;
        this.vx=1;
        this.vy=1;

        //paddle vars
        this.p1y=MIN_Y/2;
        this.p2y=MIN_Y/2;
        this.p1x=100;
        this.p2x=MIN_X-100;

        //Input states
        this.keys={};
        this.KeyDown=(e)=>{
            this.keys[e.key]=true;
        }
        this.KeyUp=(e)=>{
            this.keys[e.key]=false;
        }
        window.addEventListener("keydown",this.KeyDown);
        window.addEventListener("keyup",this.KeyUp);
    }
    destroy(){
        window.removeEventListener("keydown",this.KeyDown);
        window.removeEventListener("keyup",this.KeyUp);
    }
    update(){
        this.paddlechange();
        this.ballchange();
    }
    render(ctx){
        //bg
        if(this.bg_loaded){
            ctx.drawImage(this.bg,0,0,MIN_X,MIN_Y);
        }
        else{
            ctx.fillStyle="black";
            ctx.fillRect(0,0,MIN_X,MIN_Y)
        }
        //scores
        ctx.fillStyle="rgb(12,45,86)";
        ctx.font="24px Arial";
        ctx.fillText(String(this.score1),20,30);
        ctx.fillText(String(this.score2),MIN_X-40,30);
        //ball
        ctx.fillStyle="rgb(66, 24, 69)";
        ctx.beginPath();
        ctx.arc(this.bx,this.by,6,0,Math.PI*2);
        ctx.fill();
        //paddles
        ctx.fillStyle="rgb(181, 66, 77)";
        ctx.fillRect(this.p1x-3,this.p1y-40,6,80);
        ctx.fillRect(this.p2x-3,this.p2y-40,6,80);
    }
    paddlechange(){
        const speed=5;
        if(this.keys["ArrowUp"]){
            if(this.p2y>40){
                this.p2y-=speed;
            }
        }
        if(this.keys["ArrowDown"]){
            if(this.p2y<MIN_Y-40){
                this.p2y+=speed;
            }
        }
        if(this.keys["w"]||this.keys["W"]){
            if(this.p1y>40){
                this.p1y-=speed;
            }
        }
        if(this.keys["S"]||this.keys["s"]){
            if(this.p1y<MIN_Y-40){
                this.p1y+=speed;
            }
        }
    }
    ballchange(){
        if(this.by+this.vy>=MIN_Y-10&&this.vy>0){
            this.vy=-this.vy;
            this.bounce.play();
        }
        else if(this.by+this.vy<=10&&this.vy<0){
            this.vy=-this.vy;
            this.bounce.play();
        }
        else if(this.collide()){
            this.hit.play();
            if(this.bx<MIN_X/2){
                this.vx=this.velxcalc(this.p1y);
                this.vy=this.velycalc(this.p1y);
            }
            else{
                this.vx=this.velxcalc(this.p2y);
                this.vy=this.velycalc(this.p2y);
            }
            this.bx+=this.vx;
            this.by+=this.vy;
        }
        else{
            this.bx+=this.vx;
            this.by+=this.vy;
        }
        //scoring
        if(this.bx>MIN_X){
            this.score_b.play();
            this.score1+=1;
            if(this.score1>=10){
                this.w1+=1;
                this.score1=0;
                this.score2=0;
            }
            this.reset();
        }
        else if(this.bx<0){
            this.score_b.play();
            this.score2+=1;
            if(this.score2>=10){
                this.w2+=1;
                this.score1=0;
                this.score2=0;
            }
            this.reset();
        }
    }
    collide(){
        const num=this.vx+this.bx;
        if (num<=this.p1x+6&&num>=this.p1x-6&&Math.abs(this.p1y-this.by)<=40&&this.vx<0){
            return true;
        }
        if (num<=this.p2x+6&&num>=this.p2x-6&&Math.abs(this.p2y-this.by)<=40&&this.vx>0){
            return true;
        }
        return false;
    }
    play(ctx){
        this.update();
        this.render(ctx);
    }
    reset(){
        //ball vars
        this.bx=MIN_X/2;
        this.by=MIN_Y/2;
        this.vx=this.vx>0?-1:1;//ball foing diff dir
        this.vy=1;

        //paddle vars
        this.p1y=MIN_Y/2;
        this.p2y=MIN_Y/2;
        this.p1x=100;
        this.p2x=MIN_X-100;
    }
    gets1(){
        return this.w1;
    }
    gets2(){
        return this.w2;
    }
    velxcalc(y){
        const diff=(y-this.by)/10;
        let temp=-this.vx+diff;
        if(temp===0){
            return this.bx<MIN_X/2?1:-1;
        }
        if(temp>4){
            return 4;
        }
        if(temp<-4){
            return -4; 
        }
        return temp;
    }
    velycalc(y){
        const diff=(y-this.by)/10;
        let temp=-this.vy+diff;
        if(temp===0){
            return this.by<MIN_Y/2?1:-1;
        }
        if(temp>4){
            return 4;
        }
        if(temp<-4){
            return -4; 
        }
        return temp;
    }
};