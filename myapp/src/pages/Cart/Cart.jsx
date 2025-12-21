import { useEffect, useState } from "react";
import { useProduct } from "../../MainConrext/MainContext";
import scss from "./Card.module.scss";

const Cart = () => {
  const { deleteCard, readCard, addCard, card, loading, error, getProduts } =
    useProduct();
  const [count, setCount] = useState(1);

  useEffect(() => {
    getProduts();
    readCard();
  }, []);

  return (
    <div>
      <div id={scss.card}>
        <div className="container">
          <div className={scss.card}>
            <div className={scss.a}>
              <a href="/">Home</a>/<p>card</p>
            </div>
            <div className={scss.tabl}>
              <h2>Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Subtotal</h2>
            </div>
            <div className={scss.ProductCard}>
              {loading ? (
                <h1 id={scss.hq}>Loading...</h1>
              ) : error ? (
                <h1 id={scss.hq}>Error: {error}</h1>
              ) : card?.length === 0 ? (
                <h1 id={scss.hq}>no Products...</h1>
              ) : (
                card.map((item) => (
                  <div key={item._id} className={scss.products}>
                    <div className={scss.blog}>
                      <div className={scss.d}>
                        {item.image ? (
                          <img src={item.image} alt={item.title} />
                        ) : null}
                        <button onClick={() => deleteCard(item.id)}>
                          <img
                            src="./src/assets/images/icon-delete.svg"
                            alt=""
                          />
                        </button>
                        <h1>{item.title}</h1>
                      </div>
                      <h2>${item.price}</h2>
                      <div className={scss.count}>
                        <h2>{count}x</h2>
                        <button
                          id={scss.increment}
                          onClick={() => setCount(count + 1)}
                        >
                          <img
                            src="./src/assets/images/Vector (5).svg"
                            alt=""
                          />
                        </button>
                        <button
                          id={scss.decrement}
                          onClick={() =>
                            setCount(count === 1 ? count : count - 1)
                          }
                        >
                          <img
                            src="./src/assets/images/Vector (6).svg"
                            alt=""
                          />
                        </button>
                      </div>
                      <div className={scss.Number}>
                        <h2></h2>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className={scss.btn}>
              <button>Return To Shop</button>
              <button>Update Cart</button>
            </div>
            <div className={scss.finish}>
              <div className={scss.codeFree}>
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Coupon</button>
              </div>
              <div className={scss.chek}>
                <h1>Cart Total</h1>
                <h2>Subtotal:</h2>
                <hr />
                <h2>Shipping:</h2>
                <hr />

                <h2>Total:</h2>

                <button>Procees to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
