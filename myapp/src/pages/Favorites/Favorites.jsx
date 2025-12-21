import { useEffect, useState } from "react";
import scss from "./Favorites.module.scss";
import { useProduct } from "../../MainConrext/MainContext";

const Favorites = () => {
  const { order, readOrder, deleteOrder, addCard } = useProduct();

  useEffect(() => {
    readOrder();
  }, []);

  return (
    <div id={scss.favorite}>
      <div className="container">
        <div className={scss.favorite}>
          <h1>Wishlist (4)</h1>
          <button>Move All To Bag</button>
        </div>
        <div className={scss.toBuyList}>
          {order.map((item, index) => (
            <div key={index} className={scss.toBuy}>
              <>
                <img src={item.image} alt="" />
                <div className={scss.korzina}>
                  <button
                    onClick={() => {
                      addCard({ ...item });
                    }}
                  >
                    <img src="../src/assets/images/Cart1 with buy.svg" alt="" />
                    Add to card
                  </button>
                </div>
                <div className={scss.deleteOr}>
                  <button id={scss.delete} onClick={() => deleteOrder(item.id)}>
                    <img src="../src/assets/images/icon-delete.svg" alt="" />
                  </button>
                  <h2>{item.title}</h2>
                  <h4>${item.price}</h4>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
