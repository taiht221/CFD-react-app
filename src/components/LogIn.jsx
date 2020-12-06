export default function LogIn() {
  return (
    <div className="signup">
      <h2 className="signup-heading">Đăng nhập</h2>
      <form action="#" className="signup-form" autoComplete="off">
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            id="email"
            placeholder="Email/ Số điện thoại"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            id="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="remember">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="vehicle1"> Nhớ mật khẩu</label>
          </div>
          <div>
            <a href="true">Quên mật khẩu?</a>
          </div>
        </div>
        <button type="submit" className="form-submit">
          Đăng nhập
        </button>
      </form>
      <p className="signup-already">hoặc đăng nhập bằng</p>
      <a href="#" className="signup-google">
        <span className="signup-google-text">Google</span>
      </a>
      <span className="close-btn">×</span>
    </div>
  );
}
