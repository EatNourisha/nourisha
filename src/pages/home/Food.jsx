import './food.css'
import Google from '../../assets/Group2.png'
import App from '../../assets/Group1.png'
import Icon1 from '../../assets/Group4.png'
import Icon2 from '../../assets/Group5.png'
import Icon3 from '../../assets/Group3.png'
import IPhone from '../../assets/IPhone12.png'
import Top from '../../assets/Vector1.png'
import Bot from '../../assets/Vector2.png'

const Food = () => {
  return (
    <div className="container container-food">
         <div className='showcase-one'>
        <div className="sides">
            <div className="left-side">
                <button>1# Food App</button>
                <h1><span>Food</span> for here, there and everywhere.</h1>
                <p>All your food needs, sorted. Let us take care of all the added extras, from cooking, to delivery at your doorstep and so much more.</p>
                <h3>Download the App</h3>
                <div className="images">
                    <img src={Google} alt="Get it on Google Play" />
                    <img src={App} alt="Download from the App Store" />
                </div>
            </div>

        <div className="right-side">
            <div className="ip">
            <img src={IPhone} alt="" />
            </div>
            <div className="top">
                <img src={Top} alt="" />
            </div>
            <div className="bot">
                <img src={Bot} alt="" />
            </div>
            </div>    
        </div>

        <div className="bottom">
            <div className="box">
                <img src={Icon1} alt="" />
                <div className="write">
                    <h3>Healthy Meals</h3>
                    <p>Enjoy your food fresh crispy  & hot</p>
                </div>
            </div>
            <div className="box">
                <img src={Icon2} alt="" />
                <div className="write">
                    <h3>Fast Delivery</h3>
                    <p>Promise to deliver on time</p>
                </div>
            </div>
            <div className="box">
                <img src={Icon3} alt="" />
                <div className="write">
                    <h3>Meal Selection</h3>
                    <p>Select your weekly meals from our menu</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Food