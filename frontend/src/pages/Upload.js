import React, { useState, useContext } from 'react'
import { allData } from "../context/AppContext";


const Upload = () => {

    const { setBagName, setPrice, setDescription, setNumberOfStocks, bagName, price, description, numberOfStocks } = useContext(allData)

    console.log(bagName, price, description, numberOfStocks)

    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = async (e) => {
        setSelectedFile(e.target.files[0])
        console.log(e.target.files)
    }

    const handleUpload = async (e) => {

        // const formData = new FormData();
        // formData.append('image', selectedFile);

        // try {
        //     const response = await axios.post('http://localhost:5000/upload', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });

        //     console.log(response.data);
        // } catch (error) {
        //     console.error('Error uploading image:', error.message);
        // }


        e.preventDefault()


        console.log(selectedFile)
        const newFormData = new FormData();
        newFormData.append('file', selectedFile)
        newFormData.append('bagName', bagName);
        newFormData.append('price', price);
        newFormData.append('description', description);
        newFormData.append('numberOfStocks', numberOfStocks);

        // axios.post('/upload', formData)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))


        const response = await fetch('/upload', {
            method: "POST",
            body: newFormData,



        })

        const json = await response.json()

        if (!response.ok) {
            console.log(json.error)

        }


        if (response.ok) {
            console.log(json)

            setSelectedFile(null)
            setBagName('')
            setDescription('')
            setNumberOfStocks('')
            setPrice('')
        }




    };

    return (
        <div className='container my-10'>

            <div className="p-8 border border-gray-600">
                <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">Register Product Details</h3>
                <form>
                    <div className="grid grid-cols-12 gap-x-5">

                        <div className="col-span-12 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="display-name" placeholder="Product Name" type="text" value={bagName} onChange={(e) => setBagName(e.currentTarget.value)} />
                        </div>

                        <div className="col-span-12 lg:col-span-6 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="first-name" placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.currentTarget.value)} />
                        </div>

                        <div className="col-span-12 lg:col-span-6 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="last-name" placeholder="Number of Stocks" type="number" value={numberOfStocks} onChange={(e) => setNumberOfStocks(e.currentTarget.value)} />
                        </div>



                        <div className="col-span-12 mb-5">
                            <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="email" placeholder="Description" type="text" value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
                        </div>

                        <div className="col-span-12 mb-5">
                            <input onChange={handleFileChange} className="border border-solid border-gray-300 w-full py-2 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" id="file" type="file" />
                        </div>

                        <div className="col-span-12">
                            <button className="rounded inline-block leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange" onClick={handleUpload}>Upload</button>
                        </div>
                    </div>
                </form>
            </div>



            {/* dont delete below code away. Ridwan */}
            {/* <form action="">

                <input type='file' onChange={handleFileChange} />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded' onClick={handleUpload}>Upload</button>


                <label htmlFor="">Name</label>
                <input className='border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500' type="text" value={bagName} onChange={(e) => setBagName(e.currentTarget.value)} />

                <label htmlFor="">Price</label>
                <input className='border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500' type="text" value={price} onChange={(e) => setPrice(e.currentTarget.value)} />

                <label htmlFor="">Description</label>
                <input className='border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500' type="text" value={description} onChange={(e) => setDescription(e.currentTarget.value)} />

                <label htmlFor="">Stocks</label>
                <input className='border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500' type="text" value={numberOfStocks} onChange={(e) => setNumberOfStocks(e.currentTarget.value)} />
            </form> */}



        </div>
    )
}

export default Upload