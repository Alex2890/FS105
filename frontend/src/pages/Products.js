import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import header from '../images/products/productsHeader.jpg'

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
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/1199688598123978762/1207289470286692402/productsHeader.jpg?ex=65df1af0&is=65cca5f0&hm=f7555b198cf400c739fce7eec4d7383346be6f356364bca12884e8d08f4a4974&)'}}>
        <div className="hero bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mt-48">
          <div className="max-w-md">
            <h1 className="mb-8 text-white font-light">LUXURIALOOM</h1>
            <h1 className="mb-5 text-5xl text-white font-light">HANDBAGS</h1>
            <p className=" text-white font-normal">Crafted carefully for women with our signature designs in leather and ethically resourced materials.</p>
          </div>
        </div>
      </div>

      <div className='container my-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 my-5">
          {handbags && handbags.map((item) => (
            <div key={item.bagName} className="card rounded-none bg-base-100 outline outline-1 outline-slate-200 ">
              <figure>
                <img src={`http://localhost:5000/Images/${item.image}`} alt={item.bagName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title cursor default">{item.bagName}</h2>
                <p className='cursor-default'>{item.description}</p>
                <div className="card-actions justify-start">
                  <Link to={`product/${item._id}`}><button className="btn btn-primary text-white no-animation rounded-none">Details</button></Link>
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