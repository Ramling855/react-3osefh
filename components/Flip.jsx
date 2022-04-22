import './flip.css'
import axios, { Axios } from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Like from "./Like";
const Flip = () => {
  const [data, setData] = useState([]);
const[like,setLike]=useState([])
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setData(res.data.results);
    });
  }, []);
const handle=(r)=>{
  const rr=[];
  rr.push(r);
  setLike(rr);
}
  return (
    <div>
      <Like like={like}/>
      <h1>
        {data.map((e, i) => {
          return (<>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={e.image} alt="Avatar" />
                </div>
                <div class="flip-card-back">
                  <h1>{e.title}</h1>
                  <p>{e.name}</p>
                  <p>{e.status}</p>
                  <p>{e.species}</p>
                  <p>{e.type}</p>
                </div>
              </div>
              
            </div>
          <button onClick={()=>handle(e)}>like</button>
          </>);
        })}
      </h1>
    </div>
  );
};
export default Flip;
