import React, {useState, useContext} from 'react'
import { PropertyContext } from '../../../../Context'
import Card from './Card';

const HouseList = () => {
  const {properties} = useContext(PropertyContext)
  
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid grid-col-1  md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {properties.map((property, index) => {
            return(
              <div key={index}>
              <Card title = {property.title} img = {property.imgSrc}  location = {property.location}  type = {property.propertyType}/>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default React.memo(HouseList)