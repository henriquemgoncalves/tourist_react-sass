import CardsPopularDestination from "./CardsPopularDestination";
import '../styles/components/populardestination.sass'

const PopularDestination = () => {
  return (
    <section id='container-destination'>
      <div className="container">
        <h2>Popular Destination</h2>
        <h4>
            The company will pay for flights, accommodation, activities, and meals 
            for a group of writers or influencers, showing them the best of their
            destination in hopes of positive articles/lots of social media coverage.
        </h4>
        <CardsPopularDestination/>
      </div>
    </section>
  )
}

export default PopularDestination;