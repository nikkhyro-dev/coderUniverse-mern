import React from "react";
import styles from "./home.module.css";
import { Link,useNavigate } from "react-router-dom";
import Card from "../../compontents/shared/card/Card";
import Button from "../../compontents/shared/button/Button";

function Home() {
const signinLink ={
  color:"#0077ff",
  fontWeight:"bold",
  textDecoration:"none",
  marginLeft:"10px"
}

const navigate = useNavigate ();
const startRegister = () =>{
  navigate('/register');

}

  return (
    <div className={styles.cardWrapper}>
      <Card heading={"Welcome to CoderUniverse"} logo={"👋"}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          quidem aliquid unde dignissimos expedita dolorum beatae laboriosam
          itaque iusto.
        </p>
        <div>
      <span onClick={startRegister}> <Button text="Get your username "/> </span>
        </div>
        <div >
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link to="/login" style={signinLink}> sign in</Link>
        </div>
      </Card>
    </div>
  );
}

export default Home;
