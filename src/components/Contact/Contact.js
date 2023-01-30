import ContactUsForm from "../ContactUsForm/ContactUsForm";
import "./Contact.css";
import logo from "../../assets/logo.png";
import { Spinner } from "react-bootstrap";

function Contact({ loadingProducts, mainPageData }) {
  return (
    <div className="contact">
      <div className="contact__darker">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6 contact__right">
              {loadingProducts ? (
                <div className="spinner__div flex-center">
                  <Spinner />
                </div>
              ) : (
                <>
                  <img src={logo} alt="Kayan" />
                  <div className="mt-5 contact__content">
                    <h1>{mainPageData.mainPage.title}</h1>
                    <p>{mainPageData.mainPage.description}</p>
                    
                  </div>
                </>
              )}
            </div>
            <div className="col-12 col-md-6 mt-lg-5">
              <div className="col-12 text-center d-flex contact__form-div">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
