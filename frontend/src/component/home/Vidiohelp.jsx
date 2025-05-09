import React from "react";

const VideoHelp = () => {
  return (
    <div>
      <section
        className="bg-cover"
        style={{ background: "url(/assets/img/bg-3.jpg) no-repeat", backgroundSize: "cover" }}
        data-overlay="5"
      >
        <div className="ht-150"></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="video-play-wrap text-center">
                <div className="video-play-btn d-flex align-items-center justify-content-center">
                  <a
                    href="https://www.youtube.com/watch?v=A8EI6JaFbv4"
                    data-bs-toggle="modal"
                    data-bs-target="#popup-video"
                    className="square--90 circle bg-white fs-2 text-primary"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ht-150"></div>
      </section>
    </div>
  );
};

export default VideoHelp;

