import './grids.css'
import Man from '../../assets/Rectangle23.png'
import time from '../../assets/time.png'
import dollars from '../../assets/dollars.png'
import Deli from '../../assets/Screen.png'
import Group from '../../assets/work-group.png'

const Grids = () => {
  return (
    <div className="griding">
    <div className="grid-layouts">
         <h2>Your meals right on schedule. But there’s more:</h2>

         <div className="container container-grids">
            <div className="grids">
            <div className="grid-one">
                <div className="left">
                    <div className="wr">
                    <h1>We’re promise keepers.</h1>
                    <h4>Save time, eat better, be healthier. With Nourisha, it's never been easier  to do all three.</h4>
                    </div>
                </div>
                <div className="right">
                    <img src={Man} alt="" />
                </div>
            </div>
            <div className="grid-two">
                <img src={time} alt="" />
                <h1>Less Good Food Wasted</h1>
                <h4>We've all had to throw out food we didn't get around to using. When you order first, our chefs can order exactly the right amount of ingredients they need to craft your meals with zero waste.</h4>
            </div>
            <div className="grid-three">
              <h1>Less Disposable Packaging</h1>
              <h4>Most meal plan companies deliver a mountain of single-use packages and boxes with their food. We deliver your meals in 100% reusable bags and containers.</h4>
              <button>Download The App</button>
            </div>
            <div className="grid-four">
              <h1>Less Transit-Less Pollution</h1>
              <h4>Meals don't have to sit and idle in traffic spewing CO2. Ordering exactly what's needed and sending in batches means less time in transit.</h4>
            </div>
            <div className="grid-five">
              <div className="doll">
                <img src={dollars} alt="" />
              </div>
              <div className="lars">
                <h1>Way Less Spent Per Week</h1>
                <h4>We don't need expensive store front locations to make your meals. We've cut costs without cutting quality, and we're passing it on to you.</h4>
              </div>
            </div>
            <div className="grid-six">
              <div className="deli">
                <h1>Delicious <br />Delivered</h1>
                <h4>We deliver to all cities in England. If you have any questions about Nourisha, email us any time at support@nourisha.co.uk</h4>
                <div className="cious">
                  <img src={Deli} alt="Phone" />
                </div>
              </div>
            </div>
            <div className="grid-seven">
              <div className="great">
                <h1>Great Chefs-Better Ingredients</h1>
                <h4>We're focused on delivering high quality meals at the lowest possible cost. That's it.</h4>
              </div>
              <div className="group">
                <img src={Group} alt="" />
              </div>
            </div>
         </div>
         </div>
    </div>
    </div>
  )
}

export default Grids