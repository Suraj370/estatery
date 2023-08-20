import React, {useState, useEffect, createContext} from 'react'
import data from './data';




export const PropertyContext = createContext();




const ContextProvider = ({children}) => {
  // console.log(data);
  const [properties, SetProperties] = useState(data)
  const [location, setLocation] = useState('Location (any)')
  const [locations, setLocations] = useState([])
  const [date, setDate] = useState('Select Move-in Date')
  const [price, setPrice] = useState('Price range(any)')
  const [propertyType, setPropertyType] = useState('Property Type(any)')
  const [propertyTypes, setPropertyTypes] = useState([])

  

  useEffect(() => {
    const allLocations = properties.map((property) => {
      return property.location
    })

    const allPropertyTypes = properties.map((property) => {
      return property.type
    })

    const uniqueLocations = ['Location (any)', ...new Set(allLocations)]
    const uniqueTypes = ['Property Type(any)', ...new Set(allPropertyTypes)]
    setLocations(uniqueLocations)
    setPropertyTypes(uniqueTypes)
  },[])

  const handleClick = () => {
    console.log('clicked');
  }




 
 


  return (
     <PropertyContext.Provider value = {{
      locations,
      setLocation,
      location,
      date,
      setDate,
      price,
      setPrice,
      propertyTypes,
      setPropertyType,
      propertyType,
      properties,
      handleClick
      
  }
    
  }>
        {children}
    </PropertyContext.Provider>
  )
}

export default ContextProvider