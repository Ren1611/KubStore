import scss from "./About.module.scss";

const About = () => {
  return (
    <div>
      <div id={scss.about}>
        <div className="container">
          <div className={scss.about}>
            <div className={scss.AbAndHom}>
              <div className={scss.a}>
                <a href="/">Home</a>/<p>About</p>
              </div>
              <div className={scss.aboutMain}>
                <div className={scss.aboutText}>
                  <h1>Our Story</h1>
                  <p>
                    Launced in 2015, Exclusive is South Asia’s premier online
                    shopping <br /> makterplace with an active presense in
                    Bangladesh. Supported <br /> by wide range of tailored
                    marketing, data and service solutions, <br /> Exclusive has
                    10,500 sallers and 300 brands and serves 3 <br /> millioons
                    customers across the region.
                  </p>
                  <p>
                    Exclusive has more than 1 Million products to offer, growing
                    at a <br /> very fast. Exclusive offers a diverse assotment
                    in categories <br /> ranging from consumer.
                  </p>
                </div>
                <div className={scss.aboutImg}>
                  <img src="../src/assets/images/Side image (1).svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={scss.main}>
        <div className="container">
          <div className={scss.main}>
            <div className={scss.box}>
              <img
                className={scss.icon}
                src="./src/assets/images/Services.svg"
                alt=""
              />
              <h2>10.5k </h2>
              <h3>Sallers active our site</h3>
            </div>
            <div className={scss.box}>
              <img
                className={scss.icon}
                src="./src/assets/images/Services.svg"
                alt=""
              />
              <h2>33k </h2>
              <h3>Mopnthly Produduct Sale</h3>
            </div>
            <div className={scss.box}>
              <img
                className={scss.icon}
                src="./src/assets/images/Services (1).svg"
                alt=""
              />
              <h2>45.5k </h2>
              <h3>Customer active in our site</h3>
            </div>
            <div className={scss.box}>
              <img
                className={scss.icon}
                src="./src/assets/images/Services (2).svg"
                alt=""
              />
              <h2>25k </h2>
              <h3>Anual gross sale in our site</h3>
            </div>
          </div>
        </div>
      </div>
      <div id={scss.people}>
        <div className="container">
          <div className={scss.people}>
            <div className={scss.card}>
              <img src="../src/assets/images/Frame 874.svg" alt="" />
              <h2>Tom Cruise</h2>
              <h3>Founder & Chairman</h3>
              <div className={scss.contact}>
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-Twitter.svg"
                  alt=""
                />
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-instagram.svg"
                  alt=""
                />
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-Linkedin.svg"
                  alt=""
                />
              </div>
            </div>
            <div className={scss.card}>
              <img src="../src/assets/images/Frame 875.svg" alt="" />
              <h2>Tom Cruise</h2>
              <h3>Founder & Chairman</h3>
              <div className={scss.contact}>
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-Twitter.svg"
                  alt=""
                />
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-instagram.svg"
                  alt=""
                />
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-Linkedin.svg"
                  alt=""
                />
              </div>
            </div>
            <div className={scss.card}>
              <img src="../src/assets/images/Frame 876.svg" alt="" />
              <h2>Tom Cruise</h2>
              <h3>Founder & Chairman</h3>
              <div className={scss.contact}>
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-Twitter.svg"
                  alt=""
                />
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-instagram.svg"
                  alt=""
                />
                <img
                  className={scss.icon}
                  src="../src/assets/images/Icon-Linkedin.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={scss.fact}>
        <div className="container">
          <div className={scss.fact}>
            <div className={scss.box}>
              <img
                className={scss.icon}
                src="./src/assets/images/Services (4).svg"
                alt=""
              />
              <h2>FREE AND FAST DELIVERY </h2>
              <h3>Free delivery for all orders over $140</h3>
            </div>{" "}
            <div className={scss.box}>
              <img
                className={scss.icon}
                src="./src/assets/images/Services (5).svg"
                alt=""
              />
              <h2>24/7 CUSTOMER SERVICE </h2>
              <h3>Friendly 24/7 customer support</h3>
            </div>{" "}
            <div className={scss.box}>
              <img
                className={scss.icon}
                src="./src/assets/images/Services (6).svg"
                alt=""
              />
              <h2>MONEY BACK GUARANTEE </h2>
              <h3>We reurn money within 30 days</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
