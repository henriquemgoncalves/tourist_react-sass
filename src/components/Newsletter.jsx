import '../styles/components/newsletter.sass'

const Newsletter = () => {
  return (
    <section id='container-newsletter'>
        <div className="container">
            <h3>For Newsletter to Subscribe</h3>
            <div className="input-btn">
                <input type='text' placeholder='Enter your E-mail'>
                </input>
                <button>
                    SUBSCRIBE NOW
                </button>
            </div>         
        </div>

    </section>
  )
}

export default Newsletter;