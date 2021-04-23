import React from 'react';
import './Categories.css';
import CardItem from './CardItem';

function Categories() {
  return (
    <div className='category'>
      <h1>POPULAR CATEGORIES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Accounting.jpg'
              text='Accounting/ Finance'
              path='/Jobads'
            />
            
          
          
          <CardItem
              src='images/IT.jpg'
              text='IT/ Software'
              path='/Jobads'
            />

              <CardItem
              src='images/Engineering.jpg'
              text='Engineering/ Manufacturing'
              path='/Jobads'
            />

            <CardItem
              src='images/Health.png'
              text='Nursing/ Healthcare'
              path='/Jobads'
            />

            <CardItem
              src='images/Business.png'
              text='Business management'
              path='/Jobads'
            />

            

           </ul>
           <ul className='cards__items'>

            <CardItem
              src='images/Sales.jpg'
              text='Sales/ Marketting'
              path='/Jobads'
            
            />

          <CardItem
              src='images/Architecture.png'
              text='Architecture'
              path='/Jobads'
            />
            
            <CardItem
              src='images/Hotel.jpg'
              text='Hospitality/ Leisure'
              path='/Jobads'
            />
            
            <CardItem
              src='images/Telecom.jpg'
              text='Tele Communication'
              path='/Jobads'
            />

            

            

            <CardItem
              src='images/ViewAll.png'
              text='All Jobs'
              path='/Alljobs'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;