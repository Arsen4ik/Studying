import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export function NotFoundPage() {
  const location = useLocation();

  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 2000);
  // }, []);

  return (
    <div className="content">
      <button onClick={() => navigate('/')}>Go home</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <img src="https://megaplast24.ru/wp-content/uploads/2021/08/404_atlanticbt_blog-1024x473.jpg" alt="404" />
    </div>
  )
}