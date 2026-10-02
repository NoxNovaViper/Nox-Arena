import { useEffect, useState, useRef } from 'react'
import { ttt } from './games/TTT/TTT.js'
import { pong } from './games/PP/PP.js'

//Registry: slug from DB => game class
const registery = {
  TTT: ttt,
  PP: pong,
};
import './App.css'
import b1_img from "./assets_mouse/b1.png"
import b2_img from "./assets_mouse/b2.png"
import b3_img from "./assets_mouse/b3.png"
import m1_img from "./assets_mouse/mouse_1.png"
import m2_img from "./assets_mouse/mouse_2.png"
import Canvas from "./Canvas"

function Bubble({inner_ref,size="w-2 h-2",src, color="bg-blue-400/80", z="z-40"}){
  if (src){
    return <img ref={inner_ref} src={src} className={`fixed ${size} ${z} pointer-events-none`} draggable={false} />
  }
  else{
    return <div ref={inner_ref} className={`fixed ${size} ${color} ${z} rounded-full pointer-events-none`}/>
  }
};
function GameCard({g,select}){
  return(
    <button
    onClick={()=>select(g)}
    className=
    "cursor-none group relative flex flex-col overflow-hidden rounded-2xl border-4 border-yellow-900/40 bg-black/30 backdrop-blur-sm shadow-lg shadow-black/40 transition-transform duration-200 hover:-translate-y-1 hover:rotate-[-1deg] hover:border-teal-300 active:scale-[0.97]"
    >
      <div className='relative aspect-video w-full overflow-hidden bg-black/40'>
        {g.thumbnail?(
          <img
            src={g.thumbnail}
            alt={g.title}
            draggable="false"
            className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 '
          />
        ):(
          <div className='flex h-full w-full items-center justify-center text-yellow-100/60 text-xs'>
            no cover :(
          </div>
        )
      }
      {g.tag &&(
        <span className='absolute top-2 left-2 rounded-full bg-red-600/90 px-2 pt-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow'>
          {g.tag}
        </span>
      )}
      </div> 
      <div className='flex flex-col gap-1 p-3 text-left'>
        <h3 className='truncate text-sm font-bold text-yellow-50'>
          {g.title}
        </h3>
        {g.description &&(
          <p className='line-clamp-2 text-xs text-yellow-100/70'>{g.description}</p>
        )}
      </div>
    </button>
  );
}
function Grid({games,select}){
  if(!games||games.length===0){
    return(
      <p className='p-6 text-center text-yellow-100/70'>No games are loaded rn :P</p>
    );
  }
  return(
    <div className='grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4'>
      {games.map((g)=>(
        <GameCard key={g.id??g.title} g={g} select={select}/>
      ))}
    </div>
  );
}
function Bg({games,select}){
  const cursor_ref=useRef(null);
  const b1=useRef(null);
  const b2=useRef(null);
  const b3=useRef(null);
  const mouse_pos=useRef({x:0,y:0});
  const bubble_pos=useRef([{x:0,y:0},{x:0,y:0},{x:0,y:0}]);
  const [isclicked,setclicked]=useState(false);
  const set_transform=(ref,x,y,scale=1)=>{
    if(ref.current){
      ref.current.style.transform=`translate(${x}px,${y}px) translate(-50%, -50%)`;
    }
  }; 

    const handle_mouse_move=(e)=>{
      mouse_pos.current={x:e.clientX,y:e.clientY};
    set_transform(cursor_ref,e.clientX,e.clientY);
    };
    
/*
  const handle_mouse_move=(e)=>{
    set_transform(cursor_ref,e.clientX,e.clientY,isclicked?1.6:1);
    setTimeout(()=>set_transform(b1,e.clientX+17,e.clientY+19),100);
    setTimeout(()=>set_transform(b1,e.clientX+8,e.clientY+25),200);
    setTimeout(()=>set_transform(b1,e.clientX+6,e.clientY+15),300);
  };
*/

  useEffect(()=>{
    const bubbles=[b1,b2,b3];
    const ease=[0.1,0.2,0.05];
    const b_pos=[{x:17,y:19},{x:8,y:25},{x:6,y:15}];

    let frame_id;
    function animate(){
      bubbles.forEach((b,i)=>{
        const pos=bubble_pos.current[i];
        pos.x+=(mouse_pos.current.x+b_pos[i].x-pos.x)*ease[i];
        pos.y+=(mouse_pos.current.y+b_pos[i].y-pos.y)*ease[i];
        set_transform(b,pos.x,pos.y);
      });
      frame_id=requestAnimationFrame(animate);
    }
    animate();
    return ()=>cancelAnimationFrame(frame_id);
  },[])
  return(
    <div className='bg-gradient-to-b from-green-400 to-blue-700 min-h-screen w-full cursor-none select-none' 
    onMouseMove={handle_mouse_move}
    onMouseDown={()=>setclicked(true)}
    onMouseUp={()=>setclicked(false)}
    >
      <Bubble inner_ref={b1} src={b1_img} size='w-4 h-4'/>
      <Bubble inner_ref={b2} src={b2_img} size='w-4 h-4'/>
      <Bubble inner_ref={b3} src={b3_img} size='w-4 h-4'/>
      <Bubble inner_ref={cursor_ref} src={isclicked?m2_img:m1_img} size='w-12 h-12' z='z-50'/>
      <Grid games={games} select={select}/>
    </div>
  );
}
function GameHost(){
  const [games,setgames]=useState([]);
  const [selected_game,setselected_game]=useState(null);
  const [game_class,setgame_class]=useState(null);
  useEffect(()=>{
    fetch("http://localhost:4000/games")
    .then((res)=>res.json())
    .then((res)=>{
      if (res && res.data) setgames(res.data);
    })
    .catch((err)=>console.error("Failed to fetch games:", err));
  },[])
  useEffect(()=>{
    if(!selected_game){
      return;
    }
    const slug = selected_game.slug || 'TTT';
    const GameClass = registery[slug];
    if(GameClass){
      //Use a microtask to avoid setState synchronously in effect body
      const t = setTimeout(()=>setgame_class(()=>GameClass), 0);
      return ()=>clearTimeout(t);
    } else {
      console.error(`No game registered for slug: ${slug}`);
    }
  },[selected_game])
  if(selected_game){
    return(
      <div className='bg-gradient-to-b from-red-400 to-purple-700 min-h-screen w-full flex flex-col items-center justify-center gap-4'>
        <div className='gradBorder relative rounded ml-4 self-start'>
          <i></i>
          <button
            onClick={()=>{ setselected_game(null); setgame_class(null); }}
            className='text-blue-300/80 hover:text-green-400 text-sm pr-2 pl-2'
          >
            {'→'}Back
          </button>
        </div>
        {game_class?(<Canvas game_class={game_class}/>):(
          <p className='text-white'>Loading game...</p>
        )}
      </div>
    );
  }
  return(<Bg games={games} select={setselected_game}/>);
}
export default GameHost
