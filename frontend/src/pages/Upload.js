import React, { useState } from 'react'
import axios from 'axios';


const Upload = () => {

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

        // axios.post('/upload', formData)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))

        const response = await fetch('/upload', {
            method: "POST",
            body:formData,

        })

        const json = await response.json()

        console.log(json)

    };

    return (
        <div>
            <input type='file' onChange={handleFileChange} />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded' onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default Upload