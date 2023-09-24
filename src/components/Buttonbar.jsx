import React, { useState } from 'react'
import {  useGlobalContext } from '../FetchMovies';

const Buttonbar = () => {

  const {categories, filterItems} = useGlobalContext();
  const [active, setActive] = useState('all')
  return (
    <section className='btn-bar'>
        {categories.map((item)=> {
            return (
                <button className= {item===active?'active btn1': 'btn1'} key={item} onClick={()=>{filterItems(item);
                setActive(item)}}>{item}</button>
            )
        })}
    </section>
  )
}
export default Buttonbar
