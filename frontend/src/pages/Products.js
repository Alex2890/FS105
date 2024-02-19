import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import { motion } from "framer-motion"
import { allData } from '../context/AppContext'
const AnimateCardOnScreen = {
  offscreen: { y: "20%", opacity: 0 },
  onscreen: { y: "0%", opacity: 1 }
}

const Products = () => {

  const { isMobile } = useContext(allData)

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
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 my-5">
          {handbags && handbags.map((item, index) => (
            <motion.div
                key={index}
                variants={AnimateCardOnScreen}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.0 }}
                className={`card rounded-none bg-base-100 outline outline-1 outline-slate-200`}
                transition={{
                  duration: .75,
                  delay: isMobile < 768 ? .25 : (index % 3) - 0.25 < 0 ? 0.25 : ((index % 3) - 0.25 < 1.25 ? 0.75 : 1.25)
                }}
              >
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
            </motion.div>
          ))}
        </div>
      </div>
    </>

    
  )
}

export default Products;