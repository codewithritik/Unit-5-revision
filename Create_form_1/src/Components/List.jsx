import { useState } from 'react'
import styled from 'styled-components'
import "../module/module.css"
let Data = [ {
    id: 1,
    name:"Annette Murphy",
    Email:"sara.cruz@example.com",
    mobile:9643943996
  },
  {
    id:2,
    name:"Theresa Watson",
    Email:"michael.mitchell@example.com",
    mobile:9643943996
  },
  {
    id:3,
    name:"Cody Howard",
    Email:"glen.lane@example.com",
    mobile:9643943996
  },
  {
    id:4,
    name:"Max Lane",
    Email:"dwight.fleming@example.com",
    mobile:9643943996
  },
  {
    id:5,
    name:"Marvin Fisher",
    Email:"kelly.howard@example.com",
    mobile:9643943996
  },
  {
    id:6,
    name:"Brooklyn Mccoy",
    Email:"chad.stephens@example.com",
    mobile:9643943996
  }
     ] 
export const Lists = () => {
    const [Show, setshow] = useState(false)
    // const Handlechange=(id)=>{
    //     let ans  = Data.filter(function (obj) { 
    //         return obj.id== id; 
    //     });
    //     // localStorage.setItem('Item',JSON.stringify(ans));
    // }

return <div>
    {Data.map((e) => {
    return <div key={e.id} className="Maindiv" onClick={()=>{
        setshow(!Show)
    }}>
            <div key={e.id} className="imgdiv">
                <img src="https://via.placeholder.com/50x50" alt=""  />
            </div>
            <div key={e.name} className="namediv">
            <h3>{e.name}</h3>
            <p>{e.Email}</p>
            {Show ? <p>{e.mobile}</p>:null}
            </div>
        </div>
    })}
   
</div>

}