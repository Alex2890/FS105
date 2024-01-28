import React from "react";
import { createContext, useState } from "react";


const allData = createContext()




const AppContext = ({ children }) => {

  const [password, setPassword] = useState("")
  const [password1, setPassword1] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [postalCode, setPostalCode] = useState("")


  // for bags

  const [bagName, setBagName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [numberOfStocks, setNumberOfStocks] = useState("")


  // for message contact us page

  const [enquirerName, setEnquirerName] = useState("")
  const [enquirerEmail, setEnquirerEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")




  return (
    <allData.Provider value={{ password, setPassword, password1, setPassword1, email, setEmail, firstName, setFirstName, lastName, setLastName, address, setAddress, city, setCity, province, setProvince, postalCode, setPostalCode, bagName, setBagName, price, setPrice, description, setDescription, numberOfStocks, setNumberOfStocks, enquirerEmail, setEnquirerEmail, enquirerName, setEnquirerName, subject, setSubject, message, setMessage }}>
      {children}
    </allData.Provider>
  )
}

export { AppContext, allData } 