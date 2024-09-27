import '../styles/components/footer.sass'

const Footer = () => {
  return (
    <footer id='container-footer'>
        <div className="container">
            <div>
              <h3>Tour Type</h3>
              <ul>
                <li>Family Friendly Tour</li>
                <li>Upcoming Tour</li>
                <li>Seasonal Tour</li>
                <li>Relaxation Tour</li>
                <li>Adventure Tour</li>
                <li>Sea Beach Tour</li>
              </ul>
            </div>
            <div>
              <h3>Tour Destination</h3>
              <ul>
                <li>Brazil</li>
                <li>Deustchland</li>
                <li>New Zealand</li>
                <li>Italy</li>
                <li>Australia</li>
                <li>China</li>
              </ul>
            </div>
            <div>
              <h3>Contact Us</h3>
              <ul>
                <li>+55 12345 6789</li>
                <li>email-email@email.com</li>
                <li>São Paulo/SP (Brazil)</li>
              </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;