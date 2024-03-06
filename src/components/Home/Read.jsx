import React from 'react'

const apiData = [
    { img: '../../../public/images/img1.png', title: 'Andrew Rathore', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
    { img: '../../../public/images/img2.png', title: 'Vera Duncan', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
    { img: '../../../public/images/img3.png', title: 'Mark Smith', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
    
  ];

export default function Read() {
  return (
    <div className="layout-container margin-top-section margin-top">
        <h1 className="r-text ">TESTIMONIALS</h1>
  
  <h1 className="secondary-header1 ">Read What Other <br/> have to Say</h1>
  <div>
      {apiData.map((item, index) => (
        <div
          key={`card-${index}`}
          img={item.img}
          title={item.title}  
          subtitle={item.subtitle}
        />
        
      ))}
    </div>

    </div>
  )
}
