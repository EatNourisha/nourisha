import './how.css'
import Body from '../../assets/Body.png'
import Body2 from '../../assets/Body2.png'
import Body3 from '../../assets/Body3.png'

const How = () => {
  return (
    <div className="container container-phones">
        <div className="tops">
        <h1>How it works.</h1>
        </div>
        <div className="cards">
            <div className="card">
                <div className="phone1">
                    <img src={Body} alt="First Phone" />
                    </div>
                    <div className="wrote">
                    <span>Plan your meal from our rich menu</span>
                    <p>Sign up on Nourisha. Choose your meal plan for the week</p> 
                    </div> 
            </div>

            <div className="card">
                <div className="phone2">
                    <img src={Body2} alt="First Phone"/>
                    </div>
                    <div className="wrote">
                    <span>We cook and deliver to you</span>
                    <p>We cook up your picks from our rich menu and deliver them to you on your schedule. At no extra cost delivery</p>
                    </div>
            </div>

            <div className="card">
                <div className="phone3">
                    <img src={Body3} alt="First Phone" />
                    </div>
                    <div className="wrote">
                    <span>Enjoy your food</span>
                    <p>It’s ready to eat in 5 minutes. Or you can refrigerate for later!</p>
                    </div>
            </div>
        </div>
        <div className="bon">
        <button>Get the app</button>
        </div>
    </div>
  )
}

export default How