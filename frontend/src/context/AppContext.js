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




  return (
    <allData.Provider value={{ password, setPassword, password1, setPassword1, email, setEmail, firstName, setFirstName, lastName, setLastName, address, setAddress, city, setCity, province, setProvince, postalCode, setPostalCode}}>
      {children}
    </allData.Provider>
  )
}

export { AppContext, allData } 