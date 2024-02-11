import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { CircleLoader } from 'react-spinners'



const SingleProduct = () => {

    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    console.log(quantity)

    const getSingleProduct = async (req, res) => {
        setLoading(true)

        try {
            const product = await fetch(`/api/products/${id}`)
            const json = await product.json()

            console.log(json)
            setProduct(json)

            setLoading(false)

        } catch (error) {

            console.log(error)
        }
    }


    // heart for wishlist
    const heart = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:fill-red-700 hover:stroke-red-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>




    useEffect(() => {
        getSingleProduct()
    }, [id])


    if (loading) {
        return (
            <div>
                {loading && <CircleLoader cssOverride={{ margin: 'auto', marginTop: '200px', marginBottom: "200px" }} size={100} />}

            </div>
        )
    }

    return (
        <div>

            <div className='container'>
                <Link to='/products'><button className='bg-black leading-none py-1 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg></button></Link>

            </div>

            {product && <div>

                <div className="py-24">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                            <div>
                                <div className="relative overflow-hidden">
                                    {/* <span className="font-semibold uppercase text-sm text-white inline-block py-1 px-2 leading-none absolute top-3 z-10 right-3 bg-orange">SALE</span> */}
                                    <div className="gallery mb-6">
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img src={`http://localhost:5000/Images/${product.image}`} alt="product image" />
                                                </div>
                                                {/* <div className="swiper-slide">
                                                <img src={`http://localhost:5000/Images/${product.image}`} alt="product image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="assets/images/single-product/lg/product3.webp" alt="product image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="assets/images/single-product/lg/product4.webp" alt="product image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="assets/images/single-product/lg/product5.webp" alt="product image" />
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium text-lg capitalize">{product.bagName}</h3>
                                <h5 className="font-bold text-md leading-none text-orange my-3">${product.price}</h5>
                                {/* <div className="mb-3">Vendor:<span> Vendor 3 </span></div>
                                <div className="mb-3">Type: <span> Type 3 </span></div> */}
                                <div className="mb-3"><span>Availability:</span> <span className="font-semibold">{product.numberOfStocks} left in stock</span></div>
                                <p className="mb-8">{product.description}</p>

                                <div>

                                    <div className="mb-8">
                                        <div className="flex flex-wrap items-center mt-8">
                                            <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                                <button onClick={handleDecrement} className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                                                <input onChange={e => setQuantity(e.currentTarget.value)} type="number" min="1" max="100" step="1" value={quantity} className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none" />
                                                <button onClick={handleIncrement} className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                                            </div>
                                            <div className="ml-2 sm:ml-8">
                                                <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange">Add to Cart</button>
                                            </div>
                                            <Link to="/wishlist" className="text-md ml-8">
                                                {heart}
                                            </Link>
                                            
                                            {/* <Link to="/" className="text-md ml-8"><i className="icon-refresh"></i></Link> */}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            }
        </div>

    )
}

export default SingleProduct
