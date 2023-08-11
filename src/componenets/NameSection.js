import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/NameSection.css";
import NameImage from "../componenets/assets/images/myname.jpg";

const NameSection = () => {
  return (
    <div className='container-Myname'>
    
        <img src={NameImage} style={{ width: '100%' }} alt="My Name" />
     
        <div class="namedesc">
      <h4><b>My Name</b></h4>
      <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
    </div>
    </div>
  )
}

export default NameSection;
