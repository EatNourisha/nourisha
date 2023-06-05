import React from 'react'
import './accordion.css'

const Accordion = () => {
  return (
    <div className='container container-accordion'>
        <div className="accords">
        <div>
            <input type="radio" name='example-accordion' id='section1' className='accordion-input' />
            <label htmlFor="section1" className='accordion-label'>How does Nourisha work?</label>
            <div className="accordion-content">
                <p>
    Nourish app allows you subscribe for a monthly meal plan and get your food delivered to your doorstep. You can plan your mean from our wide range of food menu, and have it prepared for you.
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section2' className='accordion-input' />
            <label htmlFor="section2" className='accordion-label'>What times can I order for?</label>
            <div className="accordion-content">
                <p>
    You can plan your meal either weekly or monthly. You have from Monday to Wednesday to submit your meal for next week. Once this time has elapsed, you won’t be able to submit a meal plan. We will send you reminders to plan your meal.     
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section3' className='accordion-input' />
            <label htmlFor="section3" className='accordion-label'>What happens if I fail to submit my meal plan?</label>
            <div className="accordion-content">
                <p>
                If you don’t submit your meal plan before Wednesday, we will use your previous week meal plan to send your food for the next week.

                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section4' className='accordion-input' />
            <label htmlFor="section4" className='accordion-label'>How is the food delivered to me?</label>
            <div className="accordion-content">
                <p>
                When your meal plan is ready, a rider will pick your orders and deliver to your address on the selected delivery date you have chosen.
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section5' className='accordion-input' />
            <label htmlFor="section5" className='accordion-label'>What if I miss my delivery?</label>
            <div className="accordion-content">
                <p>
  Please be sure you are home on your preferred delivery day, as we can’t redeliver if you are not home to accept delivery.
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section6' className='accordion-input' />
            <label htmlFor="section6" className='accordion-label'>What if I want to pause my meal plan or delivery?</label>
            <div className="accordion-content">
                <p>
    If you have had an emergency or out of town and won’t be around to receive your meal , use the pause meal feature on your app to pause your meal, and resume your deliver when back in town. Please note that we are not able to carry over paused meals to a later time.
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section7' className='accordion-input' />
            <label htmlFor="section7" className='accordion-label'>What if something is wrong with my order?</label>
            <div className="accordion-content">
                <p>
    We have a dedicated team that looks after your entire Nourisha experience, from the moment you submit your meal plan to delivery.However, we do understand that sometimes things might go wrong. If this is the case, you can use the help function in the Nourisha app to speak to our customer service team and report any issues.
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section8' className='accordion-input' />
            <label htmlFor="section8" className='accordion-label'>What if my order is late?</label>
            <div className="accordion-content">
                <p>
    Sometimes things outside of a rider’s control can cause a delay. Where we can, we will always try and proactively call you if we become aware that your order might not arrive within the estimated time of delivery, and our team will work to get your order to you as quickly as possible.                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section9' className='accordion-input' />
            <label htmlFor="section9" className='accordion-label'>What if I have allergies?</label>
            <div className="accordion-content">
                <p>
    If you have specific allergies and are concerned about any item on our menu, please check the item ingredients before adding to your meal plan.
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section10' className='accordion-input' />
            <label htmlFor="section10" className='accordion-label'>When will you be delivering in my area?</label>
            <div className="accordion-content">
                <p>
  We are rapidly expanding and will hopefully be working with restaurants near you soon!
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section11' className='accordion-input' />
            <label htmlFor="section11" className='accordion-label'>I was sick after consuming food. What do I do?</label>
            <div className="accordion-content">
            <p>Food safety is a top priority for us, therefore, please contact us via the help section on the app or by sending an email. 
                Provide us with answers to the following questions so our team can assist you immediately:
                <ul>
                    <li>Have you been sick after consuming your order? </li>
                    <li>What symptoms did you have</li>
                    <li>What dish(es) did you eat/drink</li>
                    <li>When did your symptoms start appearing, and how long did they last for? </li>
                    <li>Did you seek medical attention?</li>
                    <li>If you visited a doctor, please let us know of any medicine they prescribed for you </li>
                    <li>Did anyone else who shared your meal feel unwell afterwards. </li>
                </ul>
                We take food safety complaints seriously and will commence investigation on any food safety report</p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section12' className='accordion-input' />
            <label htmlFor="section12" className='accordion-label'>I found a foreign object in my food. What do I do?</label>
            <div className="accordion-content">
            <p>Please contact us via the help section on the app or by sending an email . 
                Provide us with answers to the following questions so our team can assist you immediately: 
                <ul>
                    <li>What was the unexpected object you found? </li>
                    <li>Where did you find the object?</li>
                    <li>Did you eat/drink the affected item(s)? </li>
                    <li>Clear photographs of the object and affected item(s) </li>
                    <li>We take food safety complaints seriously and will commence investigation on any food safety report</li>
                </ul>
                </p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section13' className='accordion-input' />
            <label htmlFor="section13" className='accordion-label'>I had an allergic reaction after consuming my food</label>
            <div className="accordion-content">
            <p>Please contact us via the help section on the app or by sending an email.
                Provide us with answers to following details so our team can assist you immediately:
                <ul>
                    <li>What dish(es) did you eat/drink?</li>
                    <li>What symptoms did you have? </li>
                    <li>When did your symptoms start appearing, and how long did they last for? </li>
                    <li>Did you seek medical attention? If you visited a doctor, please let us know of any medicine they prescribed for you </li>
                    <li> Do you have any allergies? If so, please list them </li>
                    <li>If you have allergies, did you let the restaurant know about them?</li>
                    <li> Did you check the allergy information before you ordered? If so, please tell us where you found this information.</li>
                </ul>
                We take food safety complaints seriously and will commence investigation on any food safety report</p>
            </div>
        </div>

        <div>
            <input type="radio" name='example-accordion' id='section14' className='accordion-input' />
            <label htmlFor="section14" className='accordion-label'>Complaints about a Rider</label>
            <div className="accordion-content">
            <p>
                Please contact us via the help section on the app or by sending an email. Provide us with;
            <ul>
                <li>A short description of the incident; </li>
                <li>Location of the incident (town/city and street);</li>
                <li>Time and date of the incident (the more specific, the better);</li>
                <li>Whether this was a Cyclist/Scooter/Motorbike/Car; and </li>
                <li>Anything else that can help us to identify the rider. </li>
            </ul>
            We will investigate the matter and a member of our team will reach out to you.
            </p>
            </div>
        </div>

        
        </div>
    </div>
  )
}

export default Accordion