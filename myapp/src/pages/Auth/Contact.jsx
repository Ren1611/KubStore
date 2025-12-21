import scss from "./Contact.module.scss";

const Contact = () => {
  return (
    <div>
      <div id={scss.contact}>
        <div className="container">
          <div className={scss.contact}>
            <div className={scss.infa}>
              <div className={scss.a}>
                <a href="/">Home</a>/<p>Contact</p>
              </div>
              <div className={scss.contactInfa}>
                <div className={scss.logo}>
                  <img src="./src/assets/images/icons-phone.svg" alt="" />
                  <h2>Call To Us</h2>
                </div>
                <h3>We are available 24/7, 7 days a week.</h3>
                <h3>Phone: +996 708 502 907</h3>
              </div>
              <hr />
              <div className={scss.cont}>
                <div className={scss.logo}>
                  <img src="./src/assets/images/icons-mail.svg" alt="" />
                  <h2>Write To US</h2>
                </div>
                <h3>
                  Fill out our form and we will contact <br /> you within 24
                  hours.
                </h3>
                <h3>Emails: customer@exclusive.com</h3>
                <h3>Emails: support@exclusive.com</h3>
              </div>
            </div>

            <div className={scss.input}>
              <div className={scss.infa}>
                <input id={scss.top} type="text " placeholder="Your Name *" />
                <input id={scss.top} type="text" placeholder="Your Email *" />
                <input id={scss.top} type="text" placeholder="Your Phone *" />
              </div>
              <br />
              <input id={scss.big} type="text" placeholder="Your Massage" />
              <br />
              <button>Send Massage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
