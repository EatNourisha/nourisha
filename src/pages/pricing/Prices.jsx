import React from 'react'
import './prices.css'

const Prices = () => {
  return (
    <div className="prices-head">
        <h1>Great food, delivered to you on a budget.</h1>
        <h2>Whatever plan you choose, stay home, we will bring your food to you.</h2>

    <div className="cards-box">
        <div className="card-box">
            <h3>Individual</h3>
            <h4>&#163; 199.99</h4>
            <h5>(Plan for just 1 person)</h5>
            <nav>
                <ul>
                    <li>Dinner and Launch daily for 1 month(28 days)</li>
                    <li>Customise your meal plan from our wide range of menu</li>
                    <li>Weekly meal delivered once a week</li>
                </ul>
                <button>Subscribe</button>
            </nav>
        </div>

        <div className="card-box">
            <h3>Family</h3>
            <h4>&#163; 899.99</h4>
            <h5>(Plan for just 5 persons)</h5>
            <nav>
                <ul>
                    <li>Dinner and Launch daily for 1 month (28 days)</li>
                    <li>Customise your meal plan from our wide range of menu</li>
                    <li>Weekly meal delivered once a week</li>
                </ul>
                <button>Subscribe</button>
            </nav>
        </div>
    </div>
</div>
  )
}

export default Prices