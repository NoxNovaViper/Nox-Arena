const MIN_X = 640;
const MIN_Y = 480;
export class ttt{
    constructor(assets_path="/Games/TTT/asset_image"){
        this.score1=0;
        this.score2=0;
        this.p1w=false;
        this.p2w=false;
        this.pd=false;
        this.t=Array(9).fill(" ");
        this.select=0;
        this.turn=1;
        this.grid=Array.from({length:9},()=>({
            x:0,y:0,w:60,h:60,color:"rgb(12,4,12)",
        }));
        this.bg=new Image();
        this.bg_loaded=false;
        this.bg.onload=()=>{this.bg_loaded=true;};
        this.bg.onerror=()=>{console.error("THE BG FAILED TO LOAD: ",this.bg.src);};
        this.bg.src=`${assets_path}/bg_g2.jpg`;
    }
    render(ctx){
        if(this.bg_loaded){
            ctx.drawImage(this.bg,0,0,MIN_X,MIN_Y);
        }
        else{
            ctx.fillStyle="black";
            ctx.fillRect(0,0,MIN_X,MIN_Y);
        }
        for(let i=0;i<9;i++){
            const cell=this.grid[i];
            cell.x=210+(i%3)*70;
            cell.y=150+Math.floor(i/3)*70;
            cell.color=i===this.select?"rgb(80,80,160)":"rgb(12,42,75)";
            ctx.fillStyle=cell.color;
            ctx.fillRect(cell.x,cell.y,cell.w,cell.h);
            let mark=" ";
            let mark_color="white";
            if (this.istick(i)){
                mark="X";
                mark_color="red";
            }
            else if(this.istoe(i)){
                mark="O";
                mark_color="yellow";
            }
            ctx.fillStyle=mark_color;
            ctx.font="50px Arial";
            ctx.fillText(mark,220+(i%3)*70,150+Math.floor(i/3)*70+45);
        }
        ctx.fillStyle="white";
        ctx.font="24px Arial";
        ctx.fillText(String(this.score1),100,50+20);
        ctx.fillText(String(this.score2),MIN_X-100,50+20);
    }
    play(ctx){
        this.render(ctx);
    }
    gets1(){
        return this.score1;
    }
    gets2(){
        return this.score2;
    }
    Inputhandle(key){
        if(key==="ArrowUp"||key==="W"||key==="w"){
            this.select=Math.floor(this.select/3)===0?this.select+6:this.select-3;
        }
        else if(key==="ArrowDown"||key==="S"||key==="s"){
            this.select=Math.floor(this.select/3)===2?this.select-6:this.select+3;
        }
        else if(key==="ArrowRight"||key==="D"||key==="d"){
            this.select=(this.select%3)===2?this.select-2:this.select+1;
        }
        else if(key==="ArrowLeft"||key==="A"||key==="a"){
            this.select=(this.select%3)===0?this.select+2:this.select-1;
        }
        else if(key==="Enter"){
            const ch=this.turn===1?"X":"O";
            if (this.t[this.select]===" "){
                this.settile(ch,this.select);
                if(this.iswin(ch)){
                    if(this.turn===1){
                        this.p1w=true;
                    }
                    else{
                        this.p2w=true;
                    }
                    this.win();
                    this.reset();
                }
                else if(this.draw_()){
                    this.pd=true;
                    this.win();
                    this.reset();
                }
                else{
                    this.turn=(this.turn%2)+1;
                }
            }
        }
    }
    InputHabdle(key){
        this.Inputhandle(key);
    }
    win(){
        if(this.p1w){
            this.score1+=1;
            this.p1w=false;
        }
        else if(this.p2w){
            this.score2+=1;
            this.p2w=false;
        }
        else if(this.pd){
            this.pd=false;
        }
    }
    reset(){
        this.turn=1;
        this.p1w=false;
        this.p2w=false;
        this.pd=false;
        this.t=Array(9).fill(" ");
    }
    istick(n){
        return this.t[n]==="X";
    }
    istoe(n){
        return this.t[n]==="O";
    }
    rowcheck(r,ch){
        for(let i=0;i<3;i++){
            if(this.t[r*3+i]!==ch){
                return false;
            }
        }
        return true;
    }
    colcheck(c,ch){
        for(let i=0;i<3;i++){
            if(this.t[c+i*3]!==ch){
                return false;
            }
        }
        return true;
    }
    d1check(ch){
        return this.t[0]===ch && this.t[4]===ch && this.t[8]===ch;
    }
    d2check(ch){
        return this.t[2]===ch && this.t[4]===ch && this.t[6]===ch;
    }
    iswin(ch){
        for(let i=0;i<3;i++){
            if(this.colcheck(i,ch)){
                return true;
            }
            else if(this.rowcheck(i,ch)){
                return true;
            }
        }
        return this.d1check(ch)||this.d2check(ch);
    }
    settile(ch,n){
        if(this.t[n]==" "){
            this.t[n]=ch;
        }
    }
    draw_(){
        return this.t.every((c)=>c!==" ");
    }
}
