import { useState } from "react";
export default function MyProfile() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    facebook: "",
    skype: "",
  });

  function inputOnChange(e) {
    setForm({
      ...form,
      [e.taget.name]: e.taget.value.trim(),
    });
  }
  return (
    <div className="tab_content tab_1" id="tab_1">
      <form>
        <div className="form-group">
          <label className="form-label">
            Họ và tên<sup>*</sup>:
          </label>
          <input
            onChange={inputOnChange}
            id="fullname"
            name="fullname"
            type="text"
            value={form.name}
            className="form-control"
          />
          <span className="form-message " />
        </div>
        <div className="form-group">
          <label className="form-label">
            Số điện thoại<sup>*</sup>:
          </label>
          <input
            onChange={inputOnChange}
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            className="form-control"
          />
          <span className="form-message " />
        </div>
        <div className="form-group">
          <label className="form-label">
            Email<sup>*</sup>:
          </label>
          <input
            onChange={inputOnChange}
            id="email"
            name="email"
            type="text"
            value={form.email}
            className="form-control"
          />
          <span className="form-message " />
        </div>
        <div className="form-group">
          <label className="form-label">
            Facebook<sup>*</sup>:
          </label>
          <input
            onChange={inputOnChange}
            id="facebook"
            name="facebook"
            type="text"
            value={form.facebook}
            className="form-control"
          />
          <span className="form-message " />
        </div>
        <div className="form-group">
          <label className="form-label">
            Skype<sup>*</sup>:
          </label>
          <input
            onChange={inputOnChange}
            id="skype"
            name="skype"
            type="text"
            value={form.skype}
            className="form-control"
          />
          <span className="form-message " />
        </div>
        <div className="btn__signin">LƯU LẠI</div>
      </form>
    </div>
  );
}
