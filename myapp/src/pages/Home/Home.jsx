import { useEffect, useState } from "react";
import scss from "./Home.module.scss";
import { useProduct } from "../../MainConrext/MainContext";

const Home = () => {
  const { getProduts, createProduct, products, loading, error, addOrder } =
    useProduct();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getProduts();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price: Number(price),
      image,
    };
    createProduct(newProduct);
    setTitle("");
    setPrice("");
    setImage("");
  };
  return (
    <div>
      <div id={scss.home}>
        <div className="container">
          <div className={scss.home}>
            <div className={scss.HomeMenu}>
              <h2>
                Woman’s Fashion
                <img src="../src/assets/images/DropDown.svg" alt="" />
              </h2>
              <h2>
                Men’s Fashion
                <img
                  className={scss.cn}
                  src="../src/assets/images/DropDown.svg"
                  alt=""
                />
              </h2>
              <h2>Electronics</h2>
              <h2>Home & Lifestyle</h2>
              <h2>Medicine</h2>
              <h2>Sports & Outdoor</h2>
              <h2>Baby’s & Toys</h2>
              <h2>Groceries & Pets</h2>
              <h2>Health & Beauty</h2>
            </div>
            <div className={scss.HomeImages}>
              <div className={scss.Phone}>
                <div className={scss.logo}>
                  <img
                    src="../src/assets/images/1200px-Apple_gray_logo 1.svg"
                    alt=""
                  />
                  <h3>iPhone 14 Series</h3>
                </div>
                <h1>Up to 10% off Voucher</h1>
                <button>
                  Shop Now
                  <img
                    src="../src/assets/images/icons arrow-right.svg"
                    alt=""
                  />
                </button>
              </div>
              <div className={scss.ImgPhone}>
                <img
                  src="../src/assets/images/hero_endframe__cvklg0xk3w6e_large 2.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id={scss.category}>
        <div className="container">
          <div className={scss.category}>
            <div className={scss.logo}>
              <div className={scss.kfa}></div>
              <h1>Categories</h1>
            </div>
            <h1>Browse By Category</h1>
            <div className={scss.blogs}>
              <div className={scss.box}>
                <img
                  className={scss.icon}
                  src="./src/assets/images/Category-CellPhone.svg"
                  alt=""
                />
                <h2>Phones</h2>
              </div>
              <div className={scss.box}>
                <img
                  className={scss.icon}
                  src="./src/assets/images/Category-Computer.svg"
                  alt=""
                />
                <h2>Computers</h2>
              </div>
              <div className={scss.box}>
                <img
                  className={scss.icon}
                  src="./src/assets/images/Category-SmartWatch.svg"
                  alt=""
                />
                <h2>SmartWatchs</h2>
              </div>
              <div className={scss.box}>
                <img
                  id={scss.cam}
                  className={scss.icon}
                  src="./src/assets/images/Category-Camera.svg"
                  alt=""
                />
                <h2>Camera</h2>
              </div>
              <div className={scss.box}>
                <img
                  className={scss.icon}
                  src="./src/assets/images/Category-Headphone.svg"
                  alt=""
                />
                <h2>HeadPhones</h2>
              </div>
              <div className={scss.box}>
                <img
                  className={scss.icon}
                  src="./src/assets/images/Category-Gamepad.svg"
                  alt=""
                />
                <h2>Gaming</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
      </div>

      <div id={scss.ThisMonth}>
        <div className="container">
          <div className={scss.logo}>
            <div className={scss.kfa}></div>
            <h1>This Month</h1>
          </div>
          <div className={scss.gap}>
            <h1>Best Selling Products</h1>
            <button>View All</button>
          </div>
          <div className={scss.ThisMonth}>
            {loading ? (
              <h1 id={scss.hq}>Loading...</h1>
            ) : error ? (
              <h1 id={scss.hq}>Error: {error}</h1>
            ) : products?.length === 0 ? (
              <h1 id={scss.hq}>no Products...</h1>
            ) : (
              products.slice(0, 4).map((item) => (
                <div key={item._id} className={scss.products}>
                  <div className={scss.blog}>
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : null}
                    <h1>{item.title}</h1>
                    <h2>${item.price}</h2>
                    <img
                      id={scss.zz}
                      src="./src/assets/images/Frame 566.svg"
                      alt=""
                    />
                    <br />
                    <button
                      onClick={() => {
                        addOrder({ ...item });
                      }}
                      id={scss.favorit}
                    >
                      <img src="../src/assets/images/Fill Heart.svg" alt="" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div id={scss.JBG}>
        <div className="container">
          <div className={scss.JBG}>
            <div className={scss.infa}>
              <h3>Categories</h3>
              <h1>
                Enhance Your <br /> Music Experience
              </h1>
              <button>Buy Now!</button>
            </div>
            <div className={scss.img}>
              <img
                id={scss.img}
                src="./src/assets/images/Frame 694.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id={scss.Featured}>
        <div className="container">
          <div className={scss.logo}>
            <div className={scss.kfa}></div>
            <h1>Featured</h1>
          </div>
          <h1>New Arrival</h1>
          <div className={scss.Featured}>
            <div className={scss.ps5}>
              <img
                src="./src/assets/images/ps5-slim-goedkope-playstation_large 1.svg"
                alt=""
              />
              <h3>PlayStation 5</h3>
              <p>
                Black and White version of the PS5 <br /> coming out on sale.
              </p>
              <a href="#">Shop Now</a>
            </div>
            <div className={scss.blog}>
              <div className={scss.women}>
                <img
                  src="./src/assets/images/attractive-woman-wearing-hat-posing-black-background 1.svg"
                  alt=""
                />
                <h3>Women’s Collections</h3>
                <p>
                  Featured woman collections that <br /> give you another vibe.
                </p>
                <a href="#">Shop Now</a>
              </div>
              <div className={scss.lol}>
                <div className={scss.Speakers}>
                  <img
                    src="./src/assets/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.svg"
                    alt=""
                  />
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers</p>
                  <a href="#">Shop Now</a>
                </div>
                <div className={scss.Speakers}>
                  <img src="./src/assets/images/Frame 706.svg" alt="" />
                  <h3>Perfume</h3>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <a href="#">Shop Now</a>
                </div>
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

export default Home;
