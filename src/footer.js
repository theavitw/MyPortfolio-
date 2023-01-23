import React from "react";
import Instagramicon from './Instagramicon'
import GitIcon from "./GitIcon";
import './ss.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="social">
          
          <p class="footer2">The Avit's Room &copy; {date}, All Right Reserved</p>
        </div>
        <a href="https://twitter.com/Shah_Avit" className="icon"><GitIcon/></a>
        <a href="https://www.linkedin.com/in/avitdesai/" className="icon"><Instagramicon/></a>

      </footer>
    </div>
  );
}

export default Footer;
