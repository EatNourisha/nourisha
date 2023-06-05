import './download.css'
import Play from '../../assets/playstore.png'
import App from '../../assets/appstore.png'
import Mobile from '../../assets/Body12.png'

const Download = () => {
  return (
    <section id="container container-downloading">
    <div className="download">
        <div className="download-one">
            <h1>Download the app!</h1>
            <p>Start eating amazing food today.</p>
            <div className="down">
                <img src={Play} alt="Google Playstore" />
                <img src={App} alt="Appstore" />
            </div>
        </div>
        <div className="mobile">
            <img src={Mobile} alt="Mobile" />
        </div>
    </div>
    </section>
  )
}

export default Download