import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import './LandingPg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default function LandingPg() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          waveHeight: 20,
          shininess: 50,
          waveSpeed: 1.5,
          zoom: 0.75,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x581aaf,
          backgroundColor: 0x0,
          points: 15.0,
          maxDistance: 23.0,
          spacing: 15.0,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <>
      <div
        style={{ height: "100vh", width: "100%", overflow: "hidden" }}
        ref={vantaRef}
      >
        <div
          className="logo"
        >
          <img src='https://lh3.googleusercontent.com/WW3ITapcnR14s7SDn-F0PWoR27d9Gux9DLvBZI8csD5bVkZDS8m09latDG5McoKOhmwgZiMApdHLiQsj0ekIdCBPSq9qF7XX9lfsZrKrgOxBODC8VQQvFzDOkZD0RibAz2SZyfOMpw=w2400' alt="Logo" height="70%" />
        </div>
        <div className="d-flex justify-content-around mb-5 flex-wrap">
        <Link to="/stocks" className="custom-btn btn">
          <span>Let's go &nbsp; <i className="fa fa-paper-plane" aria-hidden="true"></i></span>
          <span>Stocks &nbsp; <i className="fas fa-chart-line"></i></span>
        </Link>
        <Link to="/crypto" className="custom-btn btn">
        <span>Let's go &nbsp; <i className="fa fa-paper-plane" aria-hidden="true"></i></span>
          <span>Crypto &nbsp; <i className="fas fa-coins"></i></span>
        </Link>
        
      </div>
  <footer className="footer mr-3 fixed-bottom text-right">
    <p style={{color:'white',marginBottom:'5px'}}>CoinFlix,&#169; 2022</p>
  </footer>
      </div>
    </>
  );
}