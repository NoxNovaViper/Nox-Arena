import {useEffect, useRef} from "react";
export default function Game_Canvas({game_class, game_factory, width=640, height=480}){
    const canvaref=useRef(null);
    const gameref=useRef(null);
    useEffect(()=>{
        const canvas=canvaref.current;
        if (!canvas) return;
        const ctx=canvas.getContext("2d");
        const game = game_class ? new game_class() : (game_factory ? game_factory() : null);
        if (!game) return;
        gameref.current=game;
        let frameid;
        function loop(){
            ctx.clearRect(0,0,width,height);
            if (typeof game.play === "function") {
                game.play(ctx);
            }
            frameid=requestAnimationFrame(loop);
        }
        loop();
        function handle_key_down(e){
            const validKeys = ["w","a","s","d","W","A","S","D","Enter","ArrowUp","ArrowDown","ArrowRight","ArrowLeft"];
            if(validKeys.includes(e.key)){
                e.preventDefault();
            }
            if (typeof game.Inputhandle === "function") {
                game.Inputhandle(e.key);
            } else if (typeof game.InputHabdle === "function") {
                game.InputHabdle(e.key);
            }
        }
        window.addEventListener("keydown", handle_key_down);
        return()=>{
            cancelAnimationFrame(frameid);
            window.removeEventListener("keydown",handle_key_down);
        };
    },[game_class,game_factory,width,height]);
    return(
        <canvas
            ref={canvaref}
            width={width}
            height={height}
            style={{border:"2px solid #444"}}
        />
    )
}