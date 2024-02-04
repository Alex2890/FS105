import React from 'react'
import { useContext } from 'react'
import { allData } from '../context/AppContext'
import { Link } from 'react-router-dom'

const Welcome = () => {

    const {user} = useContext(allData)


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello {user?.user.firstName}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/products'><button className="btn bg-black border-black text-white hover:bg-white hover:text-black hover:border-black">Back to shopping</button></Link>
                        <h1 className='mt-10 bg-orange-200'>//THIS IS WHERE WE CAN PUT A WISHLIST ITEM LIST to remind user what they wish to buy//</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome