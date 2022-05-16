export const Lists = () => {
    let Data = JSON.parse(lcalStorage.getItem("date"));

    const Handlechange=(id)=>{
        let ans  = Data.filter(function (obj) { 
            return obj.id== id; 
        });
        localStorage.setItem('Item',JSON.stringify(ans));
    }

return <div>
    {Data.map((e) => {
    return <div key={e.id} className="Maindiv" onClick={()=>{
    
    }}>
            <div key={e.id} className="imgdiv">
                <img src="https://via.placeholder.com/50x50" alt=""  />
            </div>
            <div key={e.name} className="namediv">
            <h3>{e.name}</h3>
            <p>{e.Email}</p>
            </div>
        </div>
    })}
   
</div>

}