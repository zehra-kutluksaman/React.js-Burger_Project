import React from "react";
import "../styles/Contact.css";
import BannerImage from "../assets/banner.png";

export const Contact = () => {
  return (
    <div className="contact">
      {/* sol taraftaki resim için */}
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>

      {/* sağ taraf için */}
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen Adınızı Soyadınızı Giriniz..."
          ></input>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi  Giriniz..."
          ></input>
          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen Mesajınızı Giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
};
