import React, { useState } from 'react'



export default function App() {
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);

  //DIFFERENT METHOD
  // const [selectedChildIndex, setSelectedChildIndex] = useState( <img src="./public/image1.jpg" alt="" />);


  //FOR THE DIFFERENT METHOD COMMENT THIS ARRAY
  const images = [
    './public/image1.jpg',
    './public/image2.jpg',
    './public/image3.jpg',
    './public/image4.jpg',
  ];

  return (
    <div className="gallery" style={{ backgroundImage: `url(${images[selectedChildIndex]})`}}>
      <div className="box" onClick={() => setSelectedChildIndex(0)} >
        <img src="./public/image1.jpg" alt="" />
      </div>
      <div className="box" onClick={() => setSelectedChildIndex(1)} >
        <img src="./public/image2.jpg" alt="" /> 
      </div>
      <div className="box" onClick={() => setSelectedChildIndex(2)} >
        <img src="./public/image3.jpg" alt="" />
      </div>
      <div className="box" onClick={() => setSelectedChildIndex(3)} >
        <img src="./public/image4.jpg" alt="" />
      </div>
    </div>


    
    // DIFFERENT METHOD

    // <div className="gallery">
    //   <div className="background">{selectedChildIndex}</div>
    //   <div className="box" onClick={() => setSelectedChildIndex(<img src="./public/image1.jpg" alt="" />)} >
    //     <img src="./public/image1.jpg" alt="" />
    //   </div>
    //   <div className="box" onClick={() => setSelectedChildIndex(<img src="./public/image2.jpg" alt="" /> )} >
    //     <img src="./public/image2.jpg" alt="" />
    //   </div>
    //   <div className="box" onClick={() => setSelectedChildIndex(<img src="./public/image3.jpg" alt="" />)} >
    //     <img src="./public/image3.jpg" alt="" />
    //   </div>
    //   <div className="box" onClick={() => setSelectedChildIndex(<img src="./public/image4.jpg" alt="" />)} >
    //     <img src="./public/image4.jpg" alt="" />
    //   </div>
    // </div>
  )
}

