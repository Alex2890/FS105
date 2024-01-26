import React, { useState, useContext } from 'react'
import axios from 'axios';
import { allData } from "../context/AppContext";




const Upload = () => {

    const { setBagName, setPrice, setDescription, setNumberOfStocks, bagName, price, description, numberOfStocks } = useContext(allData)

    console.log(bagName, price, description, numberOfStocks)


    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
        console.log(e.target.files)
    }

    const handleUpload = async () => {
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

        console.log(selectedFile)
        const formData = new FormData();
        formData.append('file', selectedFile)
        formData.append('bagName', bagName);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('numberOfStocks', numberOfStocks);

        // axios.post('/upload', formData)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))


        const response = await fetch('/upload', {
            method: "POST",
            body: formData,



        })

        const json = await response.json()

        console.log(json)

        setBagName("")
        setDescription("")
        setNumberOfStocks("")
        setSelectedFile("")
        setPrice("")

    };

    return (
        <div>

            <form action="">

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
            </form>

            

        </div>
    )
}

export default Upload