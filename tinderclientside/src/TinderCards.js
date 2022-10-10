import React, { useState } from 'react'
import './TinderCards.css';
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
const [people , setPeople] = useState([
    {
        name:"Steve Harvy",
        url:'https://yt3.ggpht.com/ytc/AMLnZu8twMUj0NAjTQttFKx2E6AI6okHG2hE802qnLkCuw=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name:"Elon Musk",
        url:'https://expatguideturkey.com/wp-content/uploads/2022/05/elon-musk-.jpeg'
    },
])
const swiped = (direction , nameToDelete) => {
    console.log('You swiped: ' + nameToDelete)
   
  }
  
  const outOfFrame = (name) => {
    console.log(name + ' left the screen!!!')
  }

  return (
    <div className='tinderCards'  >
        <div className='tinderCards__cardContainer' >
            {
                people.map(p => (
                    <TinderCard className='swipe' key={p.name} preventSwipe={['up' , 'down']} onSwipe={dir => swiped(dir , p.name) } onCardLeftScreen={ () => outOfFrame(p.name) } >
                        <div className='card' style={{backgroundImage:`url(${p.url})`}} >
                            <h3>{p.name}</h3>
                        </div>
                    </TinderCard>
                    // <h1> {p.name} </h1>
                ))
            }
        </div>

    </div>
  )
}

export default TinderCards  