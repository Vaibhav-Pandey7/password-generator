import {createRoot} from 'react-dom/client';
import { useState ,useEffect, use} from 'react';

function Main(){
    const [pass,setpass]=useState("");
    const [length,setlength]=useState(15);
    const [number,setnumber]=useState(false);
    const [char,setchar]=useState(false);


    function generatePass(){
        let s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(number){
            s+="1234567890";
        }
        if(char){
            s+="!@#$%^&*()_+><?:~`";
        }

        let passw="";

        for(let i=0;i<length;i++){
            passw+=s[Math.floor(Math.random()*(s.length))];
        }

        setpass(passw);
    };

    useEffect(generatePass,[length,number,char]);

    return (
        <>
        <h1>{pass}</h1>
        <div>
            <input type="range" min="5" max="50" value={length} onChange={(e)=>{let val=e.target.value;setlength(val);generatePass();}}/>
            <span>Length({length})</span>

            <input type="checkbox" checked={number} onChange={()=>{setnumber(!number);}}/>
            <label>Number</label>

            <input type="checkbox" checked={char} onChange={()=>{setchar(!char);}}/>
            <label>Character</label>

            <button style={{marginLeft:"5px"}} onClick={() => {setlength(15);setnumber(false);setchar(false);}}>Reset</button>
        </div>
        </>
    );
}

createRoot(document.getElementById('root')).render(<Main/>);
