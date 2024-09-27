import '../styles/components/traveler.sass'

const Traveler = () => {
  return (
    <section id='container-traveler'>
        <div className='container'>
            <h2>Traveler Testimonial</h2>
            <h4>
                The company will pay for flights, accommodation, activities, and meals 
                for a group of writers or influencers, showing them the best of their
                destination in hopes of positive articles/lots of social media coverage.
            </h4>
            <img src="/img/eu.jpg" alt="henrique"/>
            <h3>Henrique Gonçalves</h3>
            <p>
                While it is possible to make money blogging. Growing your travel blog
                to the point where it makes money can take years of hard work and learning.
                To make money as a travel blogger, it is important to focus on growing your 
                audience.
            </p>
        </div>   
    </section>
  )
}

export default Traveler;