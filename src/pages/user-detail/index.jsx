import './component/style.scss'
import MyCourse from "./component/MyCourse";
import MyProfile from "./component/MyProfile";
import MyProject from "./component/MyProject";
import MyPayment from "./component/MyPayment";
import {
  Switch,
  Route,
  useRouteMatch,
  NavLink,
} from "react-router-dom";

export default function UserDetail() {
  let { url } = useRouteMatch();
  return (
    <main className="user-detail">
      <div className="container">
        <div className="user-infor">
          <div className="user-infor__details">
            <img src="/img/Nt.jpg" alt="user" />
            <h1>Trần Nghĩa</h1>
            <p>Thành viên của team CFD1-OFFLINE</p>
          </div>
        </div>
        <div className="user-course">
          <div className="wrapper">
            <div className="tabs">
              <ul id="tabs__ul">
                <li >
                  <NavLink to={`${url}`} exact>
                    <p>Thông tin tài khoản</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${url}/khoa-hoc-cua-ban`}>
                    <p>khóa học của bạn</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${url}/du-an`}>
                    <p>dự án đã làm</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${url}/lich-su-thanh-toan`}>
                    <p>lịch sử thanh toán</p>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="content">
              <Switch>
                <Route path={`${url}`} exact >
                  <MyProfile />
                </Route>
                <Route path={`${url}/khoa-hoc-cua-ban`}>
                  <MyCourse />
                </Route>
                <Route path={`${url}/du-an`}>
                  <MyProject />
                </Route>
                <Route path={`${url}/lich-su-thanh-toan`}>
                  <MyPayment />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
