import {useState,useEffect,useRef} from 'react';
import {Link} from "react-router-dom";
export default function Header(){
  let[openmenu,setOpenmenu]= useState(false)
  let hambugerRef = useRef()
  let menuleftRef  = useRef()
  useEffect(()=>{
    let main = document.querySelector("main");
    let overlay = document.querySelector("#overlay");
    // let menuleft = document.querySelector(".menu-left");
    if(openmenu){
      main.classList.add("active");
      overlay.classList.add("active");
      // menuleft.classList.add("active")
      hambugerRef.current.classList.add("active");
      menuleftRef.current.classList.add("active")

    }else{
      main.classList.remove("active");
      overlay.classList.remove("active");
      // menuleft.classList.remove("active")
      hambugerRef.current.classList.remove("active")
      menuleftRef.current.classList.remove("active")
    }
  },[openmenu])
  function toggleMenu(){
    setOpenmenu(!openmenu)
    // let menuleft = document.querySelector(".menu-left");
    // console.log(menuleft)
    // menuleft.classList.add("active")
    
    // if(menuleft.classList.contains("active")){
    //   document.querySelector("main").classList.add("active")
    // }

  }
  // function activeClass(){
  //   if(openmenu){
  //     this.classList.add("active")
  //   }else{
  //     this.classList.remove("active")
  //   }
  // }  
    return(
      
      <header >  
        <div className="header-wrap">
          <div className="menu" onClick ={toggleMenu}>
            <div className='hamburger' ref={hambugerRef}>
              <div />
            </div>
            <span>MENU</span>
          </div>
          <div className="logo" >
            <Link to="/">
              <i><img src="/img/logo.svg" alt="logo" /></i>
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
        <div className="menu-left" ref={menuleftRef}>
          <nav>
            <ul>
              <li><Link to="/" >Trang chủ</Link></li>
              <li><Link to="/khoa-hoc" >Khóa học</Link></li>
              <li><Link to="/cfd-team" >CFD team</Link></li>
              <li><Link to="/" >Hỏi đáp</Link></li>
              <li><Link to="/lien-he" >Hợp tác</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}