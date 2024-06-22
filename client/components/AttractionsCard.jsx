import "../src/css/AtractionsCard.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import LimitedChar from "./LimitedChar";
import linkIcon from "/src/svg/link_icon.svg";

function AttractionCard({ attraction, searchAttraction, setSearchAttraction }) {
  const navigate = useNavigate();

  const handleClick = (tag) => {
    if (searchAttraction !== "") {
      let clicks = searchAttraction + " " + tag;
      setSearchAttraction(clicks);
    } else {
      setSearchAttraction(tag);
    }
  };

  return (
    <div className="attractionCardContainer">
      {attraction.map((item) => {
        return (
          <div className="attractionList" key={item.eid}>
            <div className="bigImage">
              <img src={item.photos[0]} alt="" className="bigAttractionImage" />
            </div>
            <div className="attractionInfo">
              <h1
                className="title"
                onClick={() => {
                  navigate(window.open(`${item.url}`));
                }}
              >
                {item.title}
              </h1>
              <LimitedChar text={item.description} limit={100} />
              <p
                className="continueRead"
                onClick={() => {
                  navigate(window.open(`${item.url}`));
                }}
              >
                อ่านต่อ
              </p>
              <p className="catagories">
                หมวด:{" "}
                {item.tags.map((tag, index) => {
                  if (index === item.tags.length - 1) {
                    return (
                      <React.Fragment key={index}>
                        <span className="eachCatagories-2">และ</span>
                        <span
                          className="eachCatagories"
                          onClick={() => {
                            handleClick(tag);
                          }}
                        >
                          {tag}
                        </span>
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <span
                        key={index}
                        className="eachCatagories"
                        onClick={() => {
                          handleClick(tag);
                        }}
                      >
                        {tag}
                      </span>
                    );
                  }
                })}
              </p>
              <div className="smallImage">
                {item.photos.map((photo, index) => {
                  if (index !== 0) {
                    return (
                      <img
                        src={photo}
                        alt=""
                        className="smallAttractionImage"
                        key={index}
                        onClick={() => {
                          navigate(window.open(`${photo}`));
                        }}
                      />
                    );
                  }
                })}
              </div>
              <div className="copyLinkTag">
                <img
                  src={linkIcon}
                  alt=""
                  className="copyLink"
                  onClick={() => {
                    navigator.clipboard.writeText(item.url);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AttractionCard;
