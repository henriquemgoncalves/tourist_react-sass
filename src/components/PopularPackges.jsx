import React from 'react'
import CardsPackges from './CardsPackges';
import '../styles/components/popularpackges.sass'

const PopularPackges = () => {
  return (
    <section id='container-packges'>
        <div className='container'>
            <h2>Popular Packges</h2>
            <p>
                The company will pay for flights, accommodation, activities, and meals 
                for a group of writers or influencers, showing them the best of their
                destination in hopes of positive articles/lots of social media coverage.
            </p>
            <CardsPackges/>
        </div>
      
    </section>
  )
}

export default PopularPackges;