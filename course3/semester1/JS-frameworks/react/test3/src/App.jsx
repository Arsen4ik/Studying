import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Product_list from './Components/Product_list'
import { Context } from './Context/Context'

function App() {
  const [data, setData] = useState([])
  const url = "https://dummyjson.com/products"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data.products))
  }, [])


  const footerRef = useRef()

  function footerScroll() {
    footerRef.current.scrollIntoView({ behavior: 'smooth' })
  }


  function deleteData(id) {
    const ind = data.findIndex(el => el.id === id)
    const newData = [...data]
    newData.splice(ind, 1)
    setData(newData)
  }

  return (
    <Context.Provider value={{ data, deleteData, footerRef }}>
      <Header footerScroll={footerScroll} />
      <Product_list />
      <Footer />
    </Context.Provider>
  )
}

export default App
