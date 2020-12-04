export default function RegisterCourse(){
    return (

        <main className="register-course">
          <div className="container">
            <h1>thực chiến front-end căn bản </h1>
            <div className="contact__form">
              <form >
                <div className="form-group">
                  <label htmlFor="fullname" className="form-label">Họ và tên<sup>*</sup>:</label>
                  <input id="fullname" name="fullname" type="text" placeholder="VD: Tiến Tài" className="form-control" />
                  <span className="form-message " />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Số điện thoại<sup>*</sup>:</label>
                  <input id="phone" name="phone" type="tel" placeholder="VD: 0969999999" className="form-control" />
                  <span className="form-message " />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email<sup>*</sup>:</label>
                  <input id="email" name="email" type="text" placeholder="VD: email@gmail.com" className="form-control" />
                  <span className="form-message " />
                </div>
                <div className="form-group">
                  <label htmlFor="facebook" className="form-label">Facebook<sup>*</sup>:</label>
                  <input id="facebook" name="facebook" type="text" placeholder="VD: Nghia Trần" className="form-control" />
                  <span className="form-message " />
                </div>
                <div className="form-group">
                  <label htmlFor="payment" className="form-label">Hình thức thanh toán<sup>*</sup>:</label>
                  <select name="payment" id="payment">
                    <option>Chuyển khoản </option>
                    <option>Thanh toán tiền mặt </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="content" className="form-label">Ý kiến cá nhân<sup>*</sup>:</label>
                  <textarea id="content" name="content" className="form-control" rows={4} cols={50} placeholder="Định hướng và mong muốn của bạn" wrap="off" defaultValue={""} />
                  <span className="form-message " />
                </div>
              </form>
              <div className="btn__signin">Đăng ký</div>
            </div>
          </div>
        </main>
      );
}