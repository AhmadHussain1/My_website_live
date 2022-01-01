import React, { useState } from "react";

export default function Contact() {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputval = (event) => {
    const { name, value } = event.target;
    setdata((prev_val) => {
      return { ...prev_val, [name]: value };
    });
  };
  const FormSubmit = (e) => {
    e.preventDefault();
    alert(`my name is ${data.fullname}. my email is ${data.email}. my phone number is ${data.phone} and message is ${data.message}`)
  };
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center ">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FormSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputval}
                  placeholder="Enter Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputval}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputval}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Text
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={inputval}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
