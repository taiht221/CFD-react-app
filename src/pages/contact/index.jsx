export default function Contact() {
  return (
    <main className="contact">
      <div className="container">
        <h1>hợp tác cùng cFD</h1>
        <div className="contact__form">
          <form>
            <div className="form-group">
              <label htmlFor="fullname" className="form-label">
                Họ và tên<sup>*</sup>:
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="VD: Tiến Tài"
                className="form-control"
              />
              <span className="form-message " />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Số điện thoại<sup>*</sup>:
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="VD: 0969999999"
                className="form-control"
              />
              <span className="form-message " />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email<sup>*</sup>:
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="VD: email@gmail.com"
                className="form-control"
              />
              <span className="form-message " />
            </div>
            <div className="form-group">
              <label htmlFor="Website" className="form-label">
                Website<sup>*</sup>:
              </label>
              <input
                id="Website"
                name="Websitek"
                type="text"
                placeholder="Đường dẫn website http://"
                className="form-control"
              />
              <span className="form-message " />
            </div>
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                title<sup>*</sup>:
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Tiêu đề liên hệ"
                className="form-control"
              />
              <span className="form-message " />
            </div>
            <div className="form-group">
              <label htmlFor="content" className="form-label">
                content<sup>*</sup>:
              </label>
              <textarea
                id="content"
                name="content"
                className="form-control"
                rows={4}
                cols={50}
                defaultValue={""}
              />
              <span className="form-message " />
            </div>
          </form>
          <div className="btn__signin">LƯU LẠI</div>
        </div>
      </div>
    </main>
  );
}
