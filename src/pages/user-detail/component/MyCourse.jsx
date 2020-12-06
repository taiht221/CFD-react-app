export default function MyCourse() {
  return (
    <div className="tab_content tab_2" id="tab_2">
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
  );
}
