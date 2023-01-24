import ContactUsForm from "../ContactUsForm/ContactUsForm";
import "./Contact.css";
import logo from "../../assets/logo.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__darker">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6 contact__right">
              <img src={logo} alt="Kayan" />
              <div className="mt-5 contact__content">
                <h1>أفضل طريقة لاختيار منزلك</h1>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات
                  يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن
                  يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي
                  المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن
                  يطلع على صورة حقيقية لتصميم الموقع.
                </p>
                <button></button>
              </div>
            </div>
            <div className="col-12 col-md-6">
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
