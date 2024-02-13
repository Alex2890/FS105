import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import header from '../images/products/women-header.png'

const Products = () => {

  const [handbags, setHandbags] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const getProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      console.log(data)
      setHandbags(data)
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }

    getProducts()
  }, [])

  console.log(handbags)



  if (loading) {
    return (
      <div>
        {loading && <CircleLoader cssOverride={{ margin: 'auto', marginTop: '200px', marginBottom:"200px" }} size={100} />}

      </div>
    )
  }

  return (
    <>
      <div className="hero "><img className='w-full h-full' src={header}/></div>

      <div className='container my-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 my-5">
          {handbags && handbags.map((item) => (
            <div key={item.bagName} className="card rounded-none bg-base-100  hover:shadow-2xl">
              <figure>
                <img src={`http://localhost:5000/Images/${item.image}`} alt={item.bagName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title cursor default ">{item.bagName}</h2>
                {/* <p className='cursor-default'>{item.description}</p> */}
                <div className="card-actions justify-end">
                  <Link to={`product/${item.bagName}`}><button className="btn btn-primary text-white no-animation">Details</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

    
  )
}

export default Products;