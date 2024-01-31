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
    <div>
      <h2 className='text-center'>Products</h2>

      <div className='container flex flex-wrap'>
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
        })}F
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