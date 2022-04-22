import React from 'react'
const Like=({like})=>{



const del=(r)=>{
r.Splice(r)

}

return<div>
{like.map((e)=>{
  return<>
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
<button onClick={()=>del(r)}>dislike</button>
</>
})}
</div>

}
export default Like;