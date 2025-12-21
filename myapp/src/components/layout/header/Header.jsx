import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <div id={scss.header}>
        <div className={scss.headerHeader}>
          <div className={scss.apple}>
            <h2>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h2>
            <a href="https://www.apple.com/store">ShopNow</a>
          </div>
          <h2>English</h2>
          <input type="checkBox" />
        </div>
        <div className="container">
          <div className={scss.header}>
            <div className={scss.HeaderLogo}>
              <a href="/">Exclusive</a>
            </div>
            <div className={scss.HeaderMenu}>
              <NavLink to="/">
                <p>Home</p>
              </NavLink>
              <NavLink to="/contact">
                <p>Contact</p>
              </NavLink>
              <NavLink to="/about">
                <p>About</p>
              </NavLink>
              <NavLink to="/register">
                <p>Sign Up</p>
              </NavLink>
            </div>
            <div className={scss.HeaderPoisk}>
              <input type="text" placeholder="What are you looking for?" />
              <img src="../src/assets/images/Component 2.svg" alt="" />
            </div>
            <div className={scss.HeaderImg}>
              <a href="/favorites">
                <img src="../src/assets/images/Wishlist.svg" alt="" />
              </a>
              <a href="/card">
                <img src="../src/assets/images/Cart1 with buy.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
