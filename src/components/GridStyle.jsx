import '../gridStyle.css'
import './Card'
const GridStyle = ({showedData}) => {
    return (
        <>
            <div className='GridContainer'>
                {
                    showedData.map((e, i) => {
                        return <>
                            <div className='GridMainContainer'>
                                <img width={50} src={e.image} alt="Not Found" />
                                <h2>{e.title}</h2>
                                <p>{e.price}</p>
                                <h6><span>Rating: </span>{e.rating.rate}</h6>
                            </div>
                        </>
                    })
                }

            </div>
        </>
    )

}

export default GridStyle