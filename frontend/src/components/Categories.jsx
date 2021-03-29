import React from 'react';
import './Categories.css';
import CardItem from './CardItem';

function Categories() {
  return (
    <div className='cards'>
      <h1>POPULAR CATEGORIES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Accounting.jpg'
              text='Accounting/ Finance'
              path='/Jobposting'
            />
            
          
          
          <CardItem
              src='images/IT.jpg'
              text='IT/ Software'
              path='/Jobposting'
            />

              <CardItem
              src='images/Engineering.jpg'
              text='Engineering/ Manufacturing'
              path='/Jobposting'
            />

            <CardItem
              src='images/Health.png'
              text='Nursing/ Healthcare'
              path='/Jobposting'
            />

            <CardItem
              src='images/Business.png'
              text='Business management'
              path='/Jobposting'
            />

            

           </ul>
           <ul className='cards__items'>

            <CardItem
              src='images/Sales.jpg'
              text='Sales/ Marketting'
              path='/Jobposting'
            
            />

          <CardItem
              src='images/Architecture.png'
              text='Architecture'
              path='/Jobposting'
            />
            
            <CardItem
              src='images/Hotel.jpg'
              text='Hospitality/ Leisure'
              path='/Jobposting'
            />
            
            <CardItem
              src='images/Telecom.jpg'
              text='Tele Communication'
              path='/Jobposting'
            />

            

            

            <CardItem
              src='images/ViewAll.png'
              text='View All Categories'
              path='/viewCategories'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;