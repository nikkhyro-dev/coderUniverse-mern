import React from "react";
import { Link } from "react-router-dom";
import styles from './navigation.module.css'

function navigation() {

    const brandColor ={
        color:'#fff',
        textDecoration:"none",
        fontWeight:"bold",
        fontSize:"22px",
        display:"flex",
        alignItems:"center"
    }
    const logoText ={
        marginLeft:"10px"
    }
  return (
    <nav className={`${styles.navbar} container`} >
      <Link to="/" className="link" style={brandColor} >

          <span style={{fontSize:"2rem"}}>👋</span> 
          <span style={logoText}>CoderUniverse</span>

      </Link>
    </nav>
  );
}

export default navigation;
