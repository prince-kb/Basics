import React, { useEffect, useState } from 'react'
function Github() {
    
    const [data,setData]=useState([]);
    const [ImageUrl,setImageUrl]=useState("");
    useEffect(() => {
        const fetchData=async()=>{
        const response=await fetch("http://api.github.com/users/prince-kb")
        const json = await response.json()
        console.log(json)
        setData(json.followers);
        setImageUrl(json.avatar_url);
        }
        fetchData();
    },[])

   
    
  return (
    <div>
      <h1 className="h1">Github followers : {data}</h1>
      <img src={data}/>
      <h3 className="h3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, soluta?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores fugiat accusantium ab explicabo nobis dolor optio, facere quod nulla dignissimos eos quisquam pariatur eum libero commodi veritatis molestias laboriosam autem? Laborum delectus molestiae magnam maiores atque? Nemo quod dolorum laudantium. Perferendis quas nam provident labore nobis perspiciatis tempora cum?</p>

    </div>
  )
}

export default Github;