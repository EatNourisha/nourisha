import './showcase-one.css'
import Chef from '../../assets/Rectangle18.png'
import Zag from '../../assets/Vector1.png'

const ShowcaseOne = () => {
  return (
    <section className="showcase-two">
        <div className="container container-chef">
            <div className="left">
                <h1>We're happy to do the <span>cooking</span></h1>
                <p>Look, we know you’re busy, and even with the best intentions, you don’t always eat right. That’s why we deliver freshly prepared food. And we only use the freshest, locally-sourced ingredients that help support local farmers and suppliers.<br/> <br />Nourisha is for everyone—busy families, seniors, young professionals, and college students—who want the convenience and health benefits of healthy, prepared meals coming right to their door.</p>
            </div>
            <div className="right">
                <img src={Chef} alt="Chef" />
            </div>
        </div>
        <div className="zig">
          <img src={Zag} alt="zig-zag" />
        </div>
    </section>
  )
}

export default ShowcaseOne;