import React, { useEffect, useState } from 'react'
import './Tours.scss'
import axios from 'axios'
import Tour from '../../components/Tour/Tour'

const Tours = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)


  const url = "https://course-api.com/react-tours-project"
  useEffect(() => {
    const fetchTours = async() => {
      axios
      .get(url)
      .then((res) => {
        setTours(res.data)
      })
    }
    fetchTours()
    setLoading(false)
  },[])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }


  return (
    <div className='tours'>
      <h1>Ours Tours</h1>
      {loading? <p>Loading...</p> : <Tour tours={tours} removeTour={removeTour}/> }
    </div>
  )
}

export default Tours