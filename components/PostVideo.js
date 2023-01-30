import React from "react";
import CreateComment from "./CreateComment";
import SocialBtn from "./SocialBtn";

export default function PostVideo() {
  return (
    <div className="central-meta item">
      <div className="user-post">
        <div className="friend-info">
          <figure>
            <img src="images/resources/nearly1.jpg" alt="" />
          </figure>
          <div className="friend-name">
            <ins>
              <a href="time-line.html" title="">
                Sara Grey
              </a>
            </ins>
            <span>published: june,2 2018 19:PM</span>
          </div>
          <div className="post-meta">
            <iframe
              width=""
              height="315"
              src="https://www.youtube.com/embed/5JJ_jqqpTMY"
              allow="autoplay;"
              allowFullScreen
            ></iframe>
            <SocialBtn />
            <div className="description">
              <div>
                Lonely Cat Enjoying in Summer Curabitur{" "}
                <a href="#" title="">
                  #mypage
                </a>{" "}
                ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nunc,
              </div>
            </div>
          </div>
        </div>
        <div className="coment-area">
          <ul className="we-comet">
            <li>
              <div className="comet-avatar">
                <img src="images/resources/comet-1.jpg" alt="" />
              </div>
              <div className="we-comment">
                <div className="coment-head">
                  <h5>
                    <a href="time-line.html" title="">
                      Jason borne
                    </a>
                  </h5>
                  <span>1 year ago</span>
                  <a className="we-reply" href="#" title="Reply">
                    <i className="fa fa-reply"></i>
                  </a>
                </div>
                <div>
                  we are working for the dance and sing songs. this video is
                  very awesome for the youngster. please vote this video and
                  like our channel
                </div>
              </div>
            </li>
            <li>
              <div className="comet-avatar">
                <img src="images/resources/comet-2.jpg" alt="" />
              </div>
              <div className="we-comment">
                <div className="coment-head">
                  <h5>
                    <a href="time-line.html" title="">
                      Sophia
                    </a>
                  </h5>
                  <span>1 week ago</span>
                  <a className="we-reply" href="#" title="Reply">
                    <i className="fa fa-reply"></i>
                  </a>
                </div>
                <div>
                  we are working for the dance and sing songs. this video is
                  very awesome for the youngster.
                  <i className="em em-smiley"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="#" title="" className="showmore underline">
                more comments
              </a>
            </li>
            <CreateComment />
          </ul>
        </div>
      </div>
    </div>
  );
}
