import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
    
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items_1'>
            <CardItem
              src='images/jb.png'
              text='For Jobseekers - 
              Search Jobs, apply with one click'
             
              path='/signupjob'
            />

            
            
           
          </ul>

          <ul className='cards_items_2'>
          <CardItem

              src='images/emp.jpg'
              text='For Employers - 
              We are here to make hiring a little easier'

              path='/Company'
              
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;