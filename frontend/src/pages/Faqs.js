import React from 'react'
import { allData } from '../context/AppContext'
import { useContext } from 'react'

const Faqs = () => {

    const { FAQsArray } = useContext(allData)

    console.log(FAQsArray)

    return (
        <>
            <div className="container py-20 px-60">
                <h1 className='text-3xl font-medium text-center mb-10'>FAQs</h1>
                <div>
                    {FAQsArray.map(item => {
                        return (
                            <div key={item.question} className="collapse collapse-arrow bg-base-200 my-5 rounded-none">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-lg font-normal">
                                    {item.question}
                                </div>
                                <div className="font-light collapse-content">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
        

    )
}

export default Faqs