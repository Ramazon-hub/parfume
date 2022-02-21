import "./Home.css";
import { Link } from "react-router-dom";
import homeImg from '../../assets/imgs/homeImg.png'
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <img className="home-img" src={homeImg} width={461} height={375} alt="img"/>
        <section className="section">
          <div className="text">
            <h1 className="title title--home">
              Biz bilan o'zingizni yanada yoriting 
            </h1>
            <p className="p">
              Bir dona atir oling va o'z biznes oynangizni ochib siz ham
              daromad toping !
            </p>
            <button className="btn">
              <Link className="btn__link" to="/register">
                Magazinga o’tish
              </Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
