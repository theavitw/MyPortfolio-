import React from "react";
import './ss.css'

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="social">
          <i class="fab fa-facebook-f fa-2x"></i>
          <i class="fab fa-twitter fa-2x"></i>
          <i class="fab fa-instagram fa-2x"></i>
          <p class="footer2">The Avit's Room &copy; {date}, All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
