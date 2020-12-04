import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
export default function Header(){
  function toggleMenu(){
        
    let menuleft = document.querySelector(".menu-left");
    console.log(menuleft)
    menuleft.classList.add("active")
    
    if(menuleft.classList.contains("active")){
      document.querySelector("main").classList.add("active")
    }
  }
  function linkChange(){
    let menuleft = document.querySelector(".menu-left");
    document.querySelector("main").classList.remove("active")
    menuleft.classList.remove("active")
  }  
    return(
      
      <header>
        <div className="header-wrap">
          <div className="menu" onClick={toggleMenu}>
            <div className="hamburger">
              <div />
            </div>
            <span>MENU</span>
          </div>
          <div className="logo">
            <Link to="/">
              <i><img src="img/logo.svg" alt="logo" /></i>
            </Link>
          </div>
          <div className="btn">
            <div className="btn__login">
              <span>Đăng nhập</span>
            </div>
            <div className="btn__signin">
              <span>Đăng Kí</span>
            </div>
          </div>
        </div>
        <div className="menu-left">
          <nav>
            <ul>
              <li><Link to="/" onClick={linkChange}>Trang chủ</Link></li>
              <li><Link to="/khoa-hoc" onClick={linkChange}>Khóa học</Link></li>
              <li><Link to="/cfd-team" onClick={linkChange}>CFD team</Link></li>
              <li><Link to="/" onClick={linkChange}>Hỏi đáp</Link></li>
              <li><Link to="/lien-he" onClick={linkChange}>Hợp tác</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}