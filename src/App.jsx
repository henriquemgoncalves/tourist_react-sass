import Banner from './components/Banner';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Newsletter from './components/Newsletter';
import PopularDestination from './components/PopularDestination';
import PopularPackges from './components/PopularPackges';
import Traveler from './components/Traveler';
import './styles/app.sass'

function App() {

  return (
    <div id="site">
      <NavBar/>
      <Banner/>
      <PopularDestination/>
      <Traveler/>
      <PopularPackges/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App;