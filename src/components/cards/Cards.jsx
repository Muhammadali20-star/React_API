import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [info, setInfo] = useState(null)

    useEffect(()=> {
        axios
      .get("https://dummyjson.com/products")
      .then(res => {
        setInfo(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally()
    }, [])
    
  return (
    <div className='container mx-auto grid lg:grid-cols-5 md:grid-cols-2  gap-4 mb-15'>
        {
            info?.products.slice(0,10)?.map((product)=> (
                <div key={product.id} className='flex flex-col gap-1'>
                   <img className='bg-gray-200' src={product.thumbnail} alt={product.title} />
                   <h3 className='p-2'>{product.title}</h3>
                   <p className='p-2'><span className="text-yellow-200">★</span> 5.0 (4 sharsh)</p>
                   <h3 className='bg-yellow-200 w-[135px] flex no-wrap text-[14px] p-2'>{product.price} som/oyoga</h3>
                   <h2 className='p-2'><del>{product.discountPercentage}</del></h2>
                   <h3 className='p-2'>{product.rating}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Cards