import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment">
      <section className="payment__top">
        <div className="container">
          <h1 className="title">To’lo’v qismi</h1>
        </div>
      </section>

      <section className="payment__bottom">
        <div className="container">
          <h2 className="payment__title">To’lo’v usuli</h2>

          <ul className="box">
            <li className="box__list"></li>
            <li className="box__list"></li>
            <li className="box__list"></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Payment;
