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
    const heart = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
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
                                            <a href="#" className="text-md ml-8"><i className="hover:text-red-700">{heart}</i></a>
                                            <a href="#" className="text-md ml-8"><i className="icon-refresh"></i></a>
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
