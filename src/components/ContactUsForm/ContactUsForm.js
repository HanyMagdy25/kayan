import React, { useEffect, useState } from "react";
import "./ContactUsForm.css";
import Form from "react-bootstrap/Form";

const url_main = "https://kayan-dashboard.kayanhillscrm.com";

function ContactUsForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [question, setQuestion] = useState(1);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (9 < phone.length && phone.length < 14) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [phone.length]);

  // console.log(parseInt(question));

  const handleContact = (e) => {
    e.preventDefault();

    const blog = {
      name,
      email,
      phone,
      question:parseInt(question),
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
            // value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="email"
            placeholder="البريد الالكترونى (اخنيارى)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="رسالتك (اخنيارى)"
            rows={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Form.Group className="mb-3 need-question">
            <Form.Label htmlFor="disabledSelect">
              هل أنت مستحق لدعم سكني (اخنيارى) ؟
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setQuestion(e.target.value)}
            >
              <option value="1">نعم</option>
              <option value="0">لا</option>
            </Form.Select>
          </Form.Group>
          <button type="submit" className="btn btn-custom" disabled={!valid}>
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
