import React, { useEffect } from 'react'
import { useState } from 'react'

const Products = () => {

  const [handbags, setHandbags] = useState()



  useEffect(() => {

    const getProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      console.log(data)
      setHandbags(data)
    }

    getProducts()
  }, [])

  console.log(handbags)
  return (
    <div className='container my-10'>
      {/* <h2 className='text-left'>Find you the bag that suits</h2> */}

      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">Discover Your Perfect Luxury Bag</h2>
        <p className="text-lg text-gray-600">Indulge in elegance with our curated collection of exquisite, premium handcrafted bags. Find the perfect accessory that complements your style and sophistication.</p>
      </div>


      {/* <div className='container flex flex-wrap'>
        {handbags && handbags.map((item) => {
          return <div key={item.bagName}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={`http://localhost:5000/Images/${item.image}`} alt={item.bagName} /></figure>
              <div className="card-body">
                <h2 className="card-title">{item.bagName}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
          </div>
        })}
      </div> */}

      <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-5'>
        {handbags && handbags.map((item) => (
          <div key={item.bagName} className="card bg-base-100 shadow-xl hover:bg-slate-200 hover:shadow-2xl">
            <figure>
              <img src={`http://localhost:5000/Images/${item.image}`} alt={item.bagName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title cursor default">{item.bagName}</h2>
              <p className='cursor-default'>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* {handbags.map((item) => (
        <div key={item?.bagName}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item?.image} alt={item?.bagName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item?.bagName}</h2>
              <p>{item?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </div>
      ))} */}



    </div>
  )
}

export default Products