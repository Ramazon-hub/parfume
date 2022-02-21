import "./Product.css";
import { Link } from "react-router-dom";

// images
import StarGold from "../../assets/imgs/star-gold.png";
import Star from "../../assets/imgs/star.png";

const Product = () => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="product">
      <section className="product__top">
        <div className="container">
          <h1 className="title">Onlayn magazin</h1>
        </div>
      </section>

      <section className="product__bottom">
        <div className="container">
          <h2 className="product__title">Produktlarimiz</h2>

          <ul className="card">
            <li className="list">
              <div className="list__top">
                <img
                  className="list__img"
                  src="https://picsum.photos/108/205"
                  alt="product"
                />
              </div>

              <div className="list__middle">
                <h4 className="list__middle__title">Product name</h4>
                <p className="list__middle__text">
                  Yoqimli yongoq ifori va shaftolilik
                </p>
                <ul className="list__card">
                  {stars.map((star, i) =>
                    star <= 4 ? (
                      <li key={i}>
                        <img src={StarGold} alt="star gold" />
                      </li>
                    ) : (
                      <li key={i}>
                        <img src={Star} alt="star" />
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="list__bottom">
                <Link className="bottom__link" to="/payment">
                  Sotib olish
                </Link>
                <p className="bottom__sum">$ 15</p>
              </div>
            </li>

            <li className="list">
              <div className="list__top">
                <img
                  className="list__img"
                  src="https://picsum.photos/108/205"
                  alt="product"
                />

                <div className="sale">Sale</div>
              </div>

              <div className="list__middle">
                <h4 className="list__middle__title">Product name</h4>
                <p className="list__middle__text">
                  Yoqimli yongoq ifori va shaftolilik
                </p>
                <ul className="list__card">
                  {stars.map((star, i) =>
                    star <= 4 ? (
                      <li key={i}>
                        <img src={StarGold} alt="star gold" />
                      </li>
                    ) : (
                      <li key={i}>
                        <img src={Star} alt="star" />
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="list__bottom">
                <Link className="bottom__link" to="/payment">
                  Sotib olish
                </Link>
                <p className="bottom__sum">$ 15</p>
              </div>
            </li>

            <li className="list-last">
              <p className="list-last__title">Your Products</p>
              <p className="list-last__text">No product</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Product;
