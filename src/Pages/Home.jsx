import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="btns">
      <button onClick={() => navigate("") } type="button">ANKA</button>
      <button onClick={() => navigate("bird")}  type="button">BLUE</button>
      <Outlet/>
    </div>
  );
}

export default Home