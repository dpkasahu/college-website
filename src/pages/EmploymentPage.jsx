// src/pages/GietuAnthem.jsx
import React from "react";
import "./GietuAnthem.css";
import anthemAudio from "../assets/gietu-anthem.mp3";
import campusImage1 from "../assets/giet-campus.jpg";
import campusImage2 from "../assets/campus2.jpg";
import campusImage3 from "../assets/campus3.jpg";

const EmploymentPage = () => {
  return (
    <div>
      <h2 className="anthem-heading">GIETU ANTHEM</h2>

      <div className="anthem-wrapper">
        <div className="anthem-left">
          <div className="anthem-content">
            <p>
              ଜ୍ଞାନ ଅସୀମିତ, ପ୍ରଜ୍ଞା ଆଲୋକିତ ତପୋଭୂମି ଆଦର୍ଶମୟ <br />
              ଜ୍ଞାନ ସଦନ, ବିଜ୍ଞାନ ନିକେତନ ବିଶ୍ୱଜୟୀ ବିଶ୍ୱବିଦ୍ୟାଳୟ <br />
              ଜି ଆ ଇ ଟି ବିଶ୍ୱବିଦ୍ୟାଳୟ <br /><br />

              ଜ୍ଞାନ ପ୍ରତିଷ୍ଠା ଅଖିଳ ବିଶ୍ୱରେ ଏହି ପ୍ରତିଶ୍ରୁତି ପ୍ରତିବଦ୍ଧ <br />
              ଜ୍ଞାନଚେତନା, ଆତ୍ମା ଜାଗୃତ, ଯାହାର କୋଣଅନୁକୋଣ ବିଶୁଦ୍ଧ <br /><br />

              କିରୀଟ ମସ୍ତକେ ଯାର ଶୋଭା ପୂର୍ବଘାଟ ଶିଖରୀଣି <br />
              ପୟେ ଝରିଯାଏ ବଂଶଧାରା କଳକଳ ନିର୍ଝରିଣୀ <br />
              କଳାକୁଞ୍ଜ ଏଇ ନନ୍ଦନବନ ସୁରଭି ଅମୃତମୟ <br /><br />

              କର୍ମଠ ଶରୀରେ, ନିର୍ମଳ ମନେ, ନବୀନ ଆଲୋକ ଜଗାଇ <br />
              ସୁରମ୍ୟ ପରିବେଶେ ହିତେଇସିନି ପ୍ରଙ୍ଗଣେ, ଜ୍ଞାନ ନିର୍ଝରିଣୀ ଝରାଇ <br /><br />

              ଜି ଆ ଇ ଟି ବିଶ୍ୱବିଦ୍ୟାଳୟ, ବିଶ୍ୱଜୟୀ ବିଶ୍ୱବିଦ୍ୟାଳୟ
            </p>
          </div>
        </div>

        <div className="anthem-right">
          <audio controls>
            <source src={anthemAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="image-gallery">
            <img src={campusImage1} alt="Campus 1" />
            <img src={campusImage2} alt="Campus 2" />
            <img src={campusImage3} alt="Campus 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentPage;
