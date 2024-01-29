import React from 'react'
import { allData } from '../context/AppContext'
import { useContext } from 'react'

const Faqs = () => {

    const { FAQsArray } = useContext(allData)

    console.log(FAQsArray)

    return (
        <div className='container'>

            <h1 className='text-4xl my-9 font-semibold'>Frequently Asked Questions</h1>

            <div>
                {FAQsArray.map(item => {
                    return (
                        <div className="collapse collapse-arrow bg-base-200 my-5">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-lg font-medium">
                                {item.question}
                            </div>
                            <div className="collapse-content">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>

    )
}

export default Faqs