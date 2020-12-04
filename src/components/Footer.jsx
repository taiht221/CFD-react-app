export default function Footer(){
    return(
        <footer>
          <div className="container">
            <div className="footer-wrap">
              <div className="footer-top">
                <div className="information">
                  <div className="sologan">
                    Sáng tạo, tinh tế và phù hợp sẽ khiến <br />
                    sản phẩm của bạn trở nên khác biệt.
                  </div>
                  <address>
                    <span>
                      Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
                    </span>
                    <a href="tel:+84 98 9596 913">(+84) 98 9596 913</a>
                    <div className="social">
                      <a href="facebook.com"><i className="icon-facebook icon" /></a>
                      <a href="facebook.com"><i className="icon-mail-alt icon" /></a>
                      <a href="facebook.com"><i className="icon-skype icon" /></a>
                    </div>
                  </address>
                </div>
                <nav className="nav">
                  <ul>
                    <li> <a href="true">Trang Chủ</a> </li>
                    <li> <a href="true">khóa học</a> </li>
                    <li> <a href="true"> thanh toán</a></li>
                    <li> <a href="true">Điều khoản</a> </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-bot">
                <span>2020 Creative Front-End Dev</span>
                <span>Được thiết kế và lập trình bởi CFD Team</span>
              </div>
              <div id="back-to-top">
                <div className="line" />
                <span>Lên đầu</span>
              </div>
            </div>
          </div>
        </footer>
    )
}