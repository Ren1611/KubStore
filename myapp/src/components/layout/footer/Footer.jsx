import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div id={scss.footer}>
        <div className="container">
          <div className={scss.footer}>
            <div className={scss.FooterInp}>
              <h1>Exclusive</h1>
              <h2>Subscribe</h2>
              <p>Get 10% off your first order</p>
              <input type="text" placeholder="Enter your email" />
              <img src="../src/assets/images/Vector (4).svg" alt="" />
            </div>
            <div className={scss.FooterSup}>
              <h1>Support</h1>
              <p>
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
            <div className={scss.FooterAcc}>
              <h1>Account</h1>
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
            </div>
            <div className={scss.FooterQui}>
              <h1>Quick Link</h1>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
            <div className={scss.FooterDow}>
              <h1>Download App</h1>
              <h5>Save $3 with App New User Only</h5>
              <div className={scss.Quar}>
                <img src="../src/assets/images/Qr Code.svg" alt="" />
                <div className={scss.App}>
                  <img
                    src="../src/assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg"
                    alt=""
                  />
                  <br />
                  <img src="../src/assets/images/AppStore.svg" alt="" />
                </div>
              </div>
              <div className={scss.contacts}>
                <img src="../src/assets/images/Icon-Facebook.svg" alt="" />
                <img src="../src/assets/images/Icon-Twitter.svg" alt="" />
                <img src="../src/assets/images/Icon-instagram.svg" alt="" />
                <img src="../src/assets/images/Icon-Linkedin.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
