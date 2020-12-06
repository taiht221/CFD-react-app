import { Link } from "react-router-dom";
export default function Course({ title, des, cover,button, id = "16" }) {
  return (
    <div className="course">
      <Link to={`/dangki-hoc/${id}`} className="course__img">
        <img src={cover} alt="" />
      </Link>
      <Link to={`/dangki-hoc/${id}`} className="course__name">
        <h3>{title}</h3>
      </Link>
      <p>{des}</p>
      <div className="teacher">
        <div className="teacher__infor">
          <img src="/img/member.jpg" alt="teacher" />
          <span>Trần Nghĩa</span>
        </div>
        <div className="detail">
          <Link to={`/dangki/khoa-hoc-${id}`}>
            <span>{button}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
