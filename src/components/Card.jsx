import { useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import { useState } from 'react'
import GridStyle from './GridStyle'
const Card = () => {
    const [showData, setShowData] = useState([])
    const [toggleView, setToggleView] = useState(true)
    const getData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')

            setShowData(response.data)
            console.log(response.data)
        } catch (error) {

            console.log(error)
        }
    }
    const toggleHandler = () => {
        setToggleView(false)
    }
    const listToggleHandler = () => {
        setToggleView(true)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='btn-box'>
                <button onClick={toggleHandler}>Grid</button>
                <button onClick={listToggleHandler}>List</button>
            </div>
            <div className='container'>
                {
                    toggleView ? <GridStyle showedData={showData} /> :
                        showData.map((e, i) => {
                            return <>
                                <div className='mainContainer'>
                                    <img width={50} src={e.image} alt="Not Found" />
                                    <h2>{e.title}</h2>
                                    <p>{e.price}</p>
                                    <h6><span>Rating: </span> {e.rating.rate}</h6>
                                </div>
                            </>
                        })
                }

            </div>
        </>
    )
}

export default Card