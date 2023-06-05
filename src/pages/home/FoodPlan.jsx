import './food-plan.css'
import TimeLine from '../../assets/timeline.png'
import Delivery from '../../assets/delivery-truck.png'
import Student from '../../assets/student.png'
import Clock from '../../assets/clock.png'
import Debitcard from '../../assets/debit-card.png'
import Stop from '../../assets/stop.png'

const FoodPlan = () => {
  return (
    <div className="food-plans">
        <div className="food-plan">
            <h1>The Food Plans</h1>
            <p>Enjoy all the deliciousness of healthy food, right on time, with none of the stress.</p>
        </div>

        <div className="container container-boxings">
            <div className="boxing">
                <img src={Clock} alt="TimeLine" />
                <div className="write-up1">
                    <h6>Save Time</h6>
                    <p>Up to 14 hours a week</p>
                </div>
            </div>

            <div className="boxing">
                <img src={Debitcard} alt="TimeLine" />
                <div className="write-up2">
                    <h6>One Monthly Payment</h6>
                    <p>No hidden delivery fees</p>
                </div>
            </div>

            <div className="boxing">
                <img src={Stop} alt="TimeLine" />
                <div className="write-up3">
                    <h6>Pause Anytime</h6>
                    <p>Pause your meal plan when out of time and reactivate it when back.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FoodPlan