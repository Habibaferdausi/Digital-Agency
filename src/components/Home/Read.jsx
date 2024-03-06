import React from 'react';

const apiData = [
  { img: './images/img1.png', title: 'Andrew Rathore', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
  { img: './images/img2.png', title: 'Vera Duncan', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
  { img: './images/img3.png', title: 'Mark Smith', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
];

export default function Read() {
  return (
    <div className="layout-container margin-top-section margin-top">
      <h1 className="r-text">TESTIMONIALS</h1>
      <h1 className="secondary-header1">Read What Others <br/> Have to Say</h1>
      <div className="card-flex">
        {apiData.map((item, index) => (
          <div key={`card-${index}`} >
            <img src={item.img} alt={item.title} />
            <h2 className="card-title">{item.title}</h2>
            <p className="card-subtitle">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
