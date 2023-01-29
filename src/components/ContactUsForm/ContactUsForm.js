import React, { useState } from "react";
import "./ContactUsForm.css";

const url_main = "https://kayan-dashboard.kayanhillscrm.com";

function ContactUsForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    const blog = {
      name,
      email,
      phone,
      address,
      age,
      content: text,
    };
    fetch(`${url_main}/api/sendContactMessage`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
        lang: "ar",
      },
      body: JSON.stringify(blog),
    })
      .then((data) => data.json())
      .then((res) => {
        // setDone(res.status);

        if (res.status === "success") {
          setName("");
          setPhone("");
          setText("");
          setEmail("");
          setAge("");
          setAddress("");
          setTimeout(() => {
            setDone(false);
          }, 4000);
          setTimeout(() => {
            setDone(true);
          }, 500);
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="ContactUsForm col-12 col-lg-8 ">
      <div className="contactUs__container">
       
        <form className="contactUs__form" onSubmit={handleContact}>
          <input
            type="text"
            placeholder="الأسم"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="رقم الهاتف"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="number"
            placeholder="العمر (اخنيارى)"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="العنوان (اخنيارى)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="email"
            placeholder="البريد الالكترونى (اخنيارى)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="رسالتك"
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-custom">
            تواصل معنا
          </button>
          {done && <p className="contact__done mt-2">تم الارسال بنجاح</p>}
          {/* {done === "failed" && (
            <p className="contact__done mt-2">لم يتم الارسال</p>
          )} */}
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
