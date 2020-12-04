export default function CourseDetail(){
    return (
        <main className="course-detail">
          <div className="banner">
            <div className="container">
              <div className="banner__content">
                <h1>Thực chiến <br /> front-end căn bản</h1>
                <div className="time">
                  <div className="start">
                    <span className="title">Khai giảng:</span>
                    <span>12/10/2020</span>
                  </div>
                  <div className="days">
                    <span className="title">Thời lượng:</span>
                    <span>18 buổi</span>
                  </div>
                </div>
                <a href="register.html" className="main-btn">Đăng ký</a>
              </div>
              <div className="price">
                <a href="#">Chi tiết</a>
                <span>4.000.000 VND</span>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="container">
              <div className="intro">
                <p>Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản.
                  Bạn muốn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End
                  Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js
                  tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực
                  tế xuyên suốt khóa học.</p>
              </div>
              <div className="course-detail">
                <h2>Giới thiệu về khóa học</h2>
                <button className="accordion">Cài đặt React-router-dom, xây dựng trang Single Page Application (SPA),
                  các trường hợp thường gặp khi sử dụng.</button>
                <div className="panel">
                  <p>- Hướng dẫn Grunt, cấu trúc thư mục.</p>
                </div>
                <button className="accordion">Javascript Nâng cao, ES6.</button>
                <div className="panel">
                  <p>Javascript Nâng cao, ES6</p>
                </div>
                <button className="accordion">Promise, Async/Await, Try/Catch, JSON, Fetch, API.</button>
                <div className="panel">
                  <p>- Giới thiệu bất đồng bộ
                    - Giới thiệu ajax, cách 1 web site hoạt động thông qua api
                    - Thực hành các phương thức ajax thông dụng GET, POST</p>
                </div>
                <button className="accordion">Cài đặt React-router-dom, xây dựng trang Single Page Application (SPA),
                  các trường hợp thường gặp khi sử dụng.</button>
                <div className="panel">
                  <p>- Hướng dẫn Grunt, cấu trúc thư mục.</p>
                </div>
                <button className="accordion">Javascript Nâng cao, ES6.</button>
                <div className="panel">
                  <p>Javascript Nâng cao, ES6</p>
                </div>
                <button className="accordion">Promise, Async/Await, Try/Catch, JSON, Fetch, API.</button>
                <div className="panel">
                  <p>- Giới thiệu bất đồng bộ
                    - Giới thiệu ajax, cách 1 web site hoạt động thông qua api
                    - Thực hành các phương thức ajax thông dụng GET, POST</p>
                </div>
              </div>
              <div className="requirement">
                <h2>Yêu cầu cần có</h2>
                <div className="requirement__text">
                  <p><i>√</i> Đã từng học qua html,css</p>
                  <p><i>√</i> Cài đặt phần mềm Photosshop, AI, Skype</p>
                </div>
              </div>
              <div className="format">
                <h2>Hình thức học</h2>
                <div className="format__text">
                  <p><i>√</i> Học offline tại văn phòng Trần Nghĩa và 3 đồng nghiệp</p>
                  <p><i>√</i> Dạy và thực hành thông qua Skype</p>
                  <p><i>√</i> Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
                    hoặc phần mềm điều kiển máy tính.</p>
                  <p><i>√</i> Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</p>
                </div>
              </div>
              <div className="start-time">
                <h2>Lịch học</h2>
                <div className="start-time__text">
                  <p><b>Ngày bắt đầu: </b> 09/09/2020</p>
                  <p><b>Thời gian: </b>Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h</p>
                </div>
              </div>
              <div className="mentor">
                <h2>Người dạy</h2>
                <div className="mentor__infor">
                  <div className="mentor__img">
                    <img src="img/Nt.jpg" alt="Nghia tran" />
                  </div>
                  <div className="mentor__text">
                    <h3>
                      TRẦN NGHĨA
                    </h3>
                    <span>Founder CFD &amp; Creative Front-End Developer</span>
                    <p>My education, career, and even personal life have been molded by one simple principle;
                      well designed information resonates with people and can change lives.I have a passion
                      for making information resonate. It all starts with how people think. With how humans
                      work. As humans we have learned how to read and write and while that is incredible, we
                      are also already hard-wired to do some things a bit more "automatically"</p>
                    <p><b>Website:</b><a href="#">http://nghiatran.info</a> </p>
                  </div>
                </div>
              </div>
              <div className="assign">
                <div className="students">
                  <i>♥</i>
                  <span>12 bạn đã đăng ký</span>
                </div>
                <a className="main-btn" href="#">
                  Đăng Ký
                </a>
                <a className="share" href="#">
                  <i className="icon-facebook icon" />
                  <span>Chia sẻ</span>
                </a>
              </div>
            </div>
          </div>
          <div className="about-course">
            <div className="container">
              <div className="online-courses">
                <h2 className="main-title">dự án <strong>học viên</strong> </h2>
                <div className="online-courses__wrap">
                  <div className="course">
                    <a href="course-detail.html" className="course__img"><img src="img/oline1.jpg" alt="" /></a>
                    <a href="course-detail.html" className="course__name">
                      <h3>Furnitow</h3>
                    </a>
                    <p>One of the best corporate fashion brands in Sydney</p>
                    <div className="teacher">
                      <div className="teacher__infor">
                        <img src="img/member.jpg" alt="teacher" />
                        <span>Trần Nghĩa</span>
                      </div>
                      <div className="detail">
                        <a href="course-detail.html"><span>Website</span></a>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <a href="course-detail.html" className="course__img"><img src="img/oline2.jpg" alt="" /></a>
                    <a href="course-detail.html" className="course__name">
                      <h3>Gbox</h3>
                    </a>
                    <p>One of the best corporate fashion brands in Sydney</p>
                    <div className="teacher">
                      <div className="teacher__infor">
                        <img src="img/member.jpg" alt="teacher" />
                        <span>Trần Nghĩa</span>
                      </div>
                      <div className="detail">
                        <a href="course-detail.html"><span>Website</span></a>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <a href="course-detail.html" className="course__img"><img src="img/oline3.jpg" alt="" /></a>
                    <a href="course-detail.html" className="course__name">
                      <h3>Kymco</h3>
                    </a>
                    <p>One of the best corporate fashion brands in Sydney</p>
                    <div className="teacher">
                      <div className="teacher__infor">
                        <img src="img/member.jpg" alt="teacher" />
                        <span>Trần Nghĩa</span>
                      </div>
                      <div className="detail">
                        <a href="course-detail.html"><span>Website</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
}