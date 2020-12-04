export default function UserDetail() {
  return (
    <main className="user-detail">
      <div className="container">
        <div className="user-infor">
          <div className="user-infor__details">
            <img src="img/Nt.jpg" alt="user" />
            <h1>Trần Nghĩa</h1>
            <p>Thành viên của team CFD1-OFFLINE</p>
          </div>
        </div>
        <div className="user-course">
          <div className="wrapper">
            <div className="tabs">
              <ul id="tabs__ul">
                <li className="active" data-list="tab_1">
                  <p>Thông tin tài khoản</p>
                </li>
                <li data-list="tab_2">
                  <p>khóa học của bạn</p>
                </li>
                <li data-list="tab_3">
                  <p>dự án đã làm</p>
                </li>
                <li data-list="tab_4">
                  <p>lịch sử thanh toán</p>
                </li>
              </ul>
            </div>
            <div className="content">
              <div className="tab_content tab_1" id="tab_1">
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
                    <label htmlFor="facebook" className="form-label">
                      Facebook<sup>*</sup>:
                    </label>
                    <input
                      id="facebook"
                      name="facebook"
                      type="text"
                      placeholder="VD: Nghia Trần"
                      className="form-control"
                    />
                    <span className="form-message " />
                  </div>
                  <div className="form-group">
                    <label htmlFor="skype" className="form-label">
                      Skype<sup>*</sup>:
                    </label>
                    <input
                      id="skype"
                      name="skype"
                      type="text"
                      placeholder="VD: Nghia Trần"
                      className="form-control"
                    />
                    <span className="form-message " />
                  </div>
                  <div className="btn__signin">LƯU LẠI</div>
                </form>
              </div>
              <div
                className="tab_content tab_2"
                id="tab_2"
                style={{ display: "none" }}
              >
                <div className="tab_content tab_2" id="tab_2" style={{}}>
                  <div className="course">
                    <div className="course__img">
                      <img
                        src="https://www.cfdtraining.vn/uploads/course/khoa-hoc-react-js-javascript-cfd2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="course__infor">
                      <h2>CFD3 React JS</h2>
                      <p>Khai giảng ngày 2020-11-23</p>
                      <div className="process">
                        <div className="time">
                          <i>⊕</i>
                          <span>54 giờ</span>
                        </div>
                        <div className="video">
                          <span>18 video</span>
                        </div>
                        <div className="students">
                          <i> ⊗</i>
                          <span>8 học viên</span>
                        </div>
                      </div>
                      <a className="btn-continue">
                        <span>tiếp tục học</span>
                      </a>
                    </div>
                  </div>
                  <div className="course">
                    <div className="course__img">
                      <img
                        src="https://www.cfdtraining.vn/uploads/course/khoa-hoc-front-end-can-ban-cfd3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="course__infor">
                      <h2>CFD3 Căn Bản</h2>
                      <p>Khai giảng ngày 2020-11-23</p>
                      <div className="process">
                        <div className="time">
                          <i>⊕</i>
                          <span>54 giờ</span>
                        </div>
                        <div className="video">
                          <span>18 video</span>
                        </div>
                        <div className="students">
                          <i> ⊗</i>
                          <span>18 học viên</span>
                        </div>
                      </div>
                      <a className="btn-continue">
                        <span>tiếp tục học</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab_content tab_3"
                id="tab_3"
                style={{ display: "none" }}
              >
                <div className="course">
                  <a className="course__img">
                    <img src="img/offline1.jpg" alt="" />
                  </a>
                  <a className="course__name">
                    <h3>Furnitown</h3>
                  </a>
                  <p>One of the best corporate fashion brands in Sydney</p>
                  <div className="teacher">
                    <div className="teacher__infor">
                      <img src="img/member.jpg" alt="teacher" />
                      <span>Trần Nghĩa</span>
                    </div>
                    <div className="detail">
                      <a>
                        <span>website</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="course">
                  <a className="course__img">
                    <img src="img/offline2.jpg" alt="" />
                  </a>
                  <a className="course__name">
                    <h3>Gbox</h3>
                  </a>
                  <p>Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.</p>
                  <div className="teacher">
                    <div className="teacher__infor">
                      <img src="img/member.jpg" alt="teacher" />
                      <span>Trần Nghĩa</span>
                    </div>
                    <div className="detail">
                      <a>
                        <span>Website</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab_content tab_4"
                id="tab_4"
                style={{ display: "none" }}
              >
                <div className="course-cost">
                  <h3 className="course-cost__name">Khóa học cfd1-offline</h3>
                  <span className="course-cost__time">09/09/2020</span>
                  <span className="course-cost__money">3.5000.000 VND</span>
                </div>
                <div className="course-cost">
                  <h3 className="course-cost__name">Khóa học cfd1-offline</h3>
                  <span className="course-cost__time">09/09/2020</span>
                  <span className="course-cost__money">3.5000.000 VND</span>
                </div>
                <div className="course-cost">
                  <h3 className="course-cost__name">Khóa học cfd1-offline</h3>
                  <span className="course-cost__time">09/09/2020</span>
                  <span className="course-cost__money">3.5000.000 VND</span>
                </div>
                <div className="course-cost">
                  <h3 className="course-cost__name">Khóa học cfd1-offline</h3>
                  <span className="course-cost__time">09/09/2020</span>
                  <span className="course-cost__money">3.5000.000 VND</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
