import React , {useEffect, useState} from 'react'

// description
// : 
// "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
// id
// : 
// "1"
// imageUrl
// : 
// "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
// name
// : 
// "Modest Explorer"
// price
// : 
// 60
// type
// : 
// "simple"
function Vans() {
    const [vans , setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    } ,[])
    console.log(vans)

    const vansElement = vans.map(van => (
        <div key={van.id} className='van-title'>
            <img src={van.imageUrl} />
            <div className='van-info'>
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))

  return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
            {vansElement}
        </div>
    </div>
  )
}

export default Vans