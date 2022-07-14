import React from "react";
export default function Footer() {
    const fbIcon = document.getElementById("fb-icon");
    console.log(fbIcon);
    const goToFacebook = ()=>window.open("https://www.facebook.com/gcsandesh01/","_blank");
    const goToInstagram = ()=>window.open("https://www.instagram.com/sandesvandes/","_blank");
    const goToGithub = ()=>window.open("https://github.com/SandeshGC","_blank");
    console.log(goToGithub)
  return (
    <div className="footer">
      <p className="copyright">&copy; SandeshGC All Rights Reserved</p>
      <div>
        <ul className="social-media-links link">
          <li className="social-media-link" id="fb-icon" onClick={goToFacebook}>
            <span className="fa-brands fa-facebook-square fa-2x social-media-icon"></span>
          </li>
          <li className="social-media-link link" id="insta-icon" onClick={goToInstagram}>
            <span className="fa-brands fa-instagram-square fa-2x social-media-icon"></span>
          </li>
          <li className="social-media-link link" id="gh-icon" onClick={goToGithub}>
            <span className="fa-brands fa-github-square fa-2x social-media-icon" ></span>
          </li>
        </ul>
        
      </div>
      <div><a target="_blank" href="https://icons8.com/icon/35080/travel-diary">Travel Diary</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
    </div>
  );
}
