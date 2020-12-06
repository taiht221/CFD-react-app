export default function SignUp(){
    return (

        <div className="register">
          <h2 className="signup-heading">Đăng ký</h2>
          <a href="true" className="signup-google">
            <span className="signup-google-text">Google</span>
          </a>
          <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="true">Điều khoản bảo mật</a><br /> của CFD
          </p>
          <span className="close-btn">×</span>
        </div>
      );
}