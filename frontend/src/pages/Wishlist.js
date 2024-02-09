import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { allData } from '../context/AppContext.js'


const Wishlist = () => {

  const { user } = useContext(allData)
  console.log(user?.user._id)

  const [wishList, setWishlist] = useState([])

  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await fetch(`/api/wishlist?userId=${user?.user._id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
      const data = await response.json()
      console.log(data)
      setWishlist(data)
    }

    fetchWishlist()
  }, [])


  return (
    <div className='flex flex-row justify-center align-center gap-10'>
      {wishList.map(item => (
        <div key={item?._id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={`http://localhost:5000/Images/${item?.image}`} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item?.bagName}</h2>
            <p>$ {item?.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  )
}

export default Wishlist