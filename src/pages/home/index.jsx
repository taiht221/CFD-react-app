import Course from "../../components/Course";

export default function Home() {
  return (
    <main className="homepage">
      <div className="mainbg">
        <div className="content">
          <h1>thực chiến</h1>
          <p>Để trở thành creative front-end developer</p>
          <a href="course-detail.html" className="main-btn">
            Khóa học
          </a>
        </div>
      </div>
      <div className="container">
        <div className="intro">
          <p>
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal{" "}
          </p>
        </div>
        <div className="online-courses">
          <h2 className="main-title">
            khóa học <strong>online</strong>{" "}
          </h2>
          <div className="online-courses__wrap">
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/oline1.jpg"
              button="Đăng kí"
            />
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/oline2.jpg"
              button="Đăng kí"
            />
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/oline3.jpg"
              button="Đăng kí"
            />
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/oline4.jpg"
              button="Đăng kí"
            />
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/oline5.jpg"
              button="Đăng kí"
            />
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/oline6.jpg"
              button="Đăng kí"
            />
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="container">
        <div className="offline-courses">
          <h2 className="main-title">
            khóa học <strong>offline</strong>{" "}
          </h2>
          <div className="offline-courses__wrap">
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/offline1.jpg"
              button="Đăng kí"
            />
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/offline2.jpg"
              button="Đăng kí"
            />
            <Course
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              cover="/img/offline3.jpg"
              button="Đăng kí"
            />
          </div>
        </div>
      </div>
      <div className="special-things">
        <div className="container">
          <div className="special-things__wrap">
            <div className="title-box">
              <h2>
                Những Điều <br />
                <strong className="blue">Đặc Biệt</strong>
                Tại CFD
              </h2>
              <img src="/img/index1.jpg" alt="special" />
            </div>
            <div className="content-box">
              <div className="item">
                <h4>Không cam kết đầu ra</h4>
                <p>
                  Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như
                  cả người hướng dẫn và người học không thật sự tâm huyết và cố
                  gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các thành
                  viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                </p>
              </div>
              <div className="item">
                <h4>Không chỉ là một lớp học</h4>
                <p>
                  CFD không phải một lớp học thuần túy, tất cả thành viên là một
                  team, cùng hỗ trợ, chia sẻ và giúp đỡ nhau trong suốt quá
                  trình học và sau này, với sự hướng dẫn tận tâm của các thành
                  viên đồng sáng lập.
                </p>
              </div>
              <div className="item">
                <h4>Không để ai bị bỏ lại phía sau</h4>
                <p>
                  Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ
                  được đội ngũ CFD kèm cặp đặc biệt, cùng sự hỗ trợ từ các thành
                  viên khác. Vì mục tiêu cuối cùng là hoàn thành khóa học thật
                  tốt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="member-thinks">
        <div className="container">
          <h2 className="main-title">
            cảm nhận <strong>thành viên</strong>{" "}
          </h2>
          <div className="swiper-container ">
            <div className="swiper-wrapper">
              <div className="swiper-slide member-thinks__wrap">
                <div className="member-details">
                  <h4 className="member__name">Harry Porter</h4>
                  <span>Học viên CFD1</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda sit quod provident officia, nam odit sequi, iste
                    nostrum voluptas eum veniam? Eligendi atque iste ut! Magni
                    consequatur est ipsam enim.
                  </p>
                  <i className="quotaion-mark">
                    <img src="/img/Group.svg" alt="Quotaion-mark" />
                  </i>
                  <div className="social">
                    <i className="icon icon-facebook" />
                    <span>08/09/2020</span>
                  </div>
                </div>
                <div className="member-img">
                  <img
                    data-src="/img/member.jpg"
                    alt="img-detail"
                    className="swiper-lazy"
                  />
                </div>
                <div className="swiper-lazy-preloader" />
              </div>
              <div className="swiper-slide member-thinks__wrap">
                <div className="member-details">
                  <h4 className="member__name">Harry Porter</h4>
                  <span>Học viên CFD1</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda sit quod provident officia, nam odit sequi, iste
                    nostrum voluptas eum veniam? Eligendi atque iste ut! Magni
                    consequatur est ipsam enim.
                  </p>
                  <i className="quotaion-mark">
                    <img src="/img/Group.svg" alt="Quotaion-mark" />
                  </i>
                  <div className="social">
                    <i className="icon icon-facebook" />
                    <span>08/09/2020</span>
                  </div>
                </div>
                <div className="member-img">
                  <img
                    data-src="/img/member.jpg"
                    alt="img-detail"
                    className="swiper-lazy"
                  />
                </div>
                <div className="swiper-lazy-preloader" />
              </div>
              <div className="swiper-slide member-thinks__wrap">
                <div className="member-details">
                  <h4 className="member__name">Harry Porter</h4>
                  <span>Học viên CFD1</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda sit quod provident officia, nam odit sequi, iste
                    nostrum voluptas eum veniam? Eligendi atque iste ut! Magni
                    consequatur est ipsam enim.
                  </p>
                  <i className="quotaion-mark">
                    <img src="/img/Group.svg" alt="Quotaion-mark" />
                  </i>
                  <div className="social">
                    <i className="icon icon-facebook" />
                    <span>08/09/2020</span>
                  </div>
                </div>
                <div className="member-img">
                  <img
                    data-src="/img/member.jpg"
                    alt="img-detail"
                    className="swiper-lazy"
                  />
                </div>
                <div className="swiper-lazy-preloader" />
              </div>
              <div className="swiper-slide member-thinks__wrap">
                <div className="member-details">
                  <h4 className="member__name">Harry Porter</h4>
                  <span>Học viên CFD1</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda sit quod provident officia, nam odit sequi, iste
                    nostrum voluptas eum veniam? Eligendi atque iste ut! Magni
                    consequatur est ipsam enim.
                  </p>
                  <i className="quotaion-mark">
                    <img src="/img/Group.svg" alt="Quotaion-mark" />
                  </i>
                  <div className="social">
                    <i className="icon icon-facebook" />
                    <span>08/09/2020</span>
                  </div>
                </div>
                <div className="member-img">
                  <img
                    data-src="/img/member.jpg"
                    alt="img-detail"
                    className="swiper-lazy"
                  />
                </div>
                <div className="swiper-lazy-preloader" />
              </div>
              <div className="swiper-slide member-thinks__wrap">
                <div className="member-details">
                  <h4 className="member__name">Harry Porter</h4>
                  <span>Học viên CFD1</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda sit quod provident officia, nam odit sequi, iste
                    nostrum voluptas eum veniam? Eligendi atque iste ut! Magni
                    consequatur est ipsam enim.
                  </p>
                  <i className="quotaion-mark">
                    <img src="/img/Group.svg" alt="Quotaion-mark" />
                  </i>
                  <div className="social">
                    <i className="icon icon-facebook" />
                    <span>08/09/2020</span>
                  </div>
                </div>
                <div className="member-img">
                  <img
                    data-src="/img/member.jpg"
                    alt="img-detail"
                    className="swiper-lazy"
                  />
                </div>
                <div className="swiper-lazy-preloader" />
              </div>
            </div>
            <div className="swiper-pagination" />
            {/* Add Arrows */}
            <div className="btn-ctr --pre">
              <i>
                <img src="/img/arrow.svg" alt="arrow" />
              </i>
            </div>
            <div className="btn-ctr --next">
              <i>
                <img src="/img/next.svg" alt="arrow" />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h2 className="main-title">
          chúng ta<strong>là một team</strong>{" "}
        </h2>
        <div className="team__wrap">
          <div className="swiper-wrapper ">
            <div className="swiper-slide">
              <img data-src="/img/oline5.jpg" alt="" className="swiper-lazy" />
              <div className="swiper-lazy-preloader" />
            </div>
            <div className="swiper-slide">
              <img data-src="/img/oline2.jpg" alt="" className="swiper-lazy" />
              <div className="swiper-lazy-preloader" />
            </div>
            <div className="swiper-slide">
              <img data-src="/img/oline3.jpg" alt="" className="swiper-lazy" />
              <div className="swiper-lazy-preloader" />
            </div>
            <div className="swiper-slide">
              <img data-src="/img/oline4.jpg" alt="" className="swiper-lazy" />
              <div className="swiper-lazy-preloader" />
            </div>
            <div className="swiper-slide">
              <img data-src="/img/oline5.jpg" alt="" className="swiper-lazy" />
              <div className="swiper-lazy-preloader" />
            </div>
            <div className="swiper-slide">
              <img data-src="/img/oline6.jpg" alt="" className="swiper-lazy" />
              <div className="swiper-lazy-preloader" />
            </div>
          </div>
          {/* Add scrollbar */}
          <div className="swiper-scrollbar" />
        </div>
      </div>
      <div className="ready">
        <div className="text">
          <p>
            Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?
          </p>
        </div>
        <a href="course-detail.html" className="main-btn">
          Đăng kí
        </a>
      </div>
    </main>
  );
}
