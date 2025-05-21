import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'

const Cards = () => {
    const [info, setInfo] = useState(null)
      const [onLoading, setonLoading] = useState(false)
    

    useEffect(()=> {
        setonLoading(true)
        axios
      .get("https://dummyjson.com/products?limit=10")
      .then(res => {
        setInfo(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=> setonLoading(false))
    }, [])
    
  return (
    <div>
        <h2 className='text-center text-4xl mb-8'>products</h2>
        {onLoading && <Skeleton count={10}/>}
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-4 mb-15'>
        {
            info?.products?.map((product)=> (
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
    
    </div>
  )
}

export default React.memo(Cards)