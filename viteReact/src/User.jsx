import React from 'react'
import { useParams } from 'react-router-dom';
function User() {
    const {useridd}=useParams();
  return (
    <div>
      <h1 className='h1'>User : {useridd}</h1>
      <h3 className='h3'>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
      <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae magni hic dignissimos praesentium, natus provident. Iste, maiores voluptate itaque id modi dicta deserunt consequatur quia ut ipsa enim rem quas sed nostrum cumque eaque? Unde quod quibusdam sit exercitationem voluptate est consequatur id soluta repellat, ab maiores dolor earum incidunt provident consequuntur ut blanditiis placeat, commodi odio, perferendis accusantium illum nobis? Voluptatum, hic aut atque explicabo, commodi rerum impedit inventore libero perferendis eaque iure unde, animi voluptatibus laborum nesciunt accusamus?</p>
    </div>
  )
}

export default User
