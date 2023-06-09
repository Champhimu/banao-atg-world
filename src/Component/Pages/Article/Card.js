import React from "react";
import card1 from "../../../Asset/images/Rectangle 5.png";
import card2 from "../../../Asset/images/Rectangle 5 (1).png";
import card3 from "../../../Asset/images/Rectangle 5 (2).png";
import menuicon from "../../../Asset/images/Vector (2).png";
import User1 from "../../../Asset/images/Rectangle 3 (1).png";
import User4 from "../../../Asset/images/Rectangle 3 (2).png";
import User2 from "../../../Asset/images/Rectangle 3 (3).png";
import User3 from "../../../Asset/images/Rectangle 3 (4).png";

import { BsFillShareFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import {AiOutlineEye} from 'react-icons/ai';

const Card = () => {
  const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });
  return (
    <div>

      {/* Card 1 */}
      <div
        className="card"
        style={{
          width: "100%",
          boxShadow: breakpoints_desktop
            ? ""
            : "0px 1px 2px rgba(0, 0, 0, 0.12)",
          border: breakpoints_desktop ? "" : "none",
        }}
      >
        <img src={card1} className="card-img-top" alt="Card 1" />
        <div className="card-body">
          <h6 style={{ fontWeight: "540" }} className="card-title">
            &#9997; Article
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "700", width: "90%" }} className="card-text">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>
            <div className="btn-group">
              <button
                style={{ height: "25px", width: "25px" }}
                type="button"
                className="btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{ marginTop: "-16px", marginLeft: "-8px" }}
                  alt="..."
                  src={menuicon}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Report
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Option 3
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <h6
            style={{
              marginBottom: "30px",
              color: "#5C5C5C",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            I’ve worked in UX for the better part of a decade. From now on, I plan to releif the world
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>

            {/* Card 1 Profile Desktop View */}
            {breakpoints_desktop ? (
              <>
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={User1}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      marginTop: "10px",
                    }}
                  >
                    Sarthak Kamra
                  </h6>
                </div>
                <div style={{ display: "flex" }}>
                  <AiOutlineEye
                    style={{ width: "18px", height: "18px", marginTop: "10px" }}
                  />
                  &nbsp;
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#525252",
                      marginTop: "7.5px",
                      marginBottom: "0px",
                    }}
                  >
                    4.8k views
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill />
                  </button>
                </div>
              </>
            ) : (
              <>
              {/* Card 1 Profile Mobile View */}
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={User1}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h6 style={{ fontSize: "15px", fontWeight: "700" }}>
                      Sarthak Kamra
                    </h6>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#525252",
                        marginTop: "-8px",
                        marginBottom: "0px",
                      }}
                    >
                      1.4k views
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill /> &nbsp; Share
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <br />
      {/* Card 2 */}
      <div
        className="card"
        style={{
          width: "100%",
          boxShadow: breakpoints_desktop
            ? ""
            : "0px 1px 2px rgba(0, 0, 0, 0.12)",
          border: breakpoints_desktop ? "" : "none",
        }}
      >
        <img src={card2} className="card-img-top" alt="Card 2" />
        <div className="card-body">
          <h6 style={{ fontWeight: "540" }} className="card-title">
            &#128300; Education
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "700", width: "90%" }} className="card-text">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </p>
            <div className="btn-group">
              <button
                style={{ height: "25px", width: "25px" }}
                type="button"
                className="btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{ marginTop: "-16px", marginLeft: "-8px" }}
                  alt="..."
                  src={menuicon}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Report
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Option 3
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <h6
            style={{
              marginBottom: "30px",
              color: "#5C5C5C",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to releif the world.
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>

            {/* Card 2 Profile Desktop View */}
            {breakpoints_desktop ? (
              <>
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={User2}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      marginTop: "10px",
                    }}
                  >
                    Sarah West
                  </h6>
                </div>
                <div style={{ display: "flex" }}>
                  <AiOutlineEye
                    style={{ width: "18px", height: "18px", marginTop: "10px" }}
                  />
                  &nbsp;
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#525252",
                      marginTop: "7.5px",
                      marginBottom: "0px",
                    }}
                  >
                    1.4k views
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill />
                  </button>
                </div>
              </>
            ) : (
              <>
              {/* Card 2 Profile Mobile View */}
              <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={User2}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h6 style={{ fontSize: "15px", fontWeight: "700" }}>
                      Sarah West
                    </h6>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#525252",
                        marginTop: "-8px",
                        marginBottom: "0px",
                      }}
                    >
                      4.8k views
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill />
                    &nbsp; Share
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <br />

      {/* Card 3 */}
      <div
        className="card"
        style={{
          width: "100%",
          boxShadow: breakpoints_desktop
            ? ""
            : "0px 1px 2px rgba(0, 0, 0, 0.12)",
          border: breakpoints_desktop ? "" : "none",
        }}
      >
        <img src={card3} className="card-img-top" alt="Card 3" />
        <div className="card-body">
          <h6 style={{ fontWeight: "540" }} className="card-title">
            &#128197; Meetup
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "700", width: "90%" }} className="card-text">
              Finance & Investment Elite Social Mixer @Lujiazui
            </p>
            <div className="btn-group">
              <button
                style={{ height: "25px", width: "25px" }}
                type="button"
                className="btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{ marginTop: "-16px", marginLeft: "-8px" }}
                  alt="..."
                  src={menuicon}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Report
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Option 3
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <RiCalendarEventFill
              style={{ marginTop: "3px", width: "15px", height: "15px0" }}
            />
            &nbsp;
            <p style={{ fontSize: "14px", color: "black" }}>
              Fri, 12 Oct, 2018
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <MdOutlineLocationOn
              style={{ marginTop: "2px", width: "20px", height: "15px0" }}
            />
            &nbsp;
            <p style={{ fontSize: "14px", color: "black" }}>Ahmedabad, India</p>
           </div>
          <button
            style={{
              borderRadius: "8px",
              color: "#E56135",
              borderColor: "#A9AEB8",
            }}
            type="button"
            className="btn w-100"
          >
            Visit Website
          </button>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>

          {/* Card 3 Profile Desktop View */}
            {breakpoints_desktop ? (
              <>
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={User3}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      marginTop: "10px",
                    }}
                  >
                    Ronal Jones
                  </h6>
                </div>
                <div style={{ display: "flex" }}>
                  <AiOutlineEye
                    style={{ width: "18px", height: "18px", marginTop: "10px" }}
                  />
                  &nbsp;
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#525252",
                      marginTop: "7.5px",
                      marginBottom: "0px",
                    }}
                  >
                    1.4k views
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill />
                  </button>
                </div>
              </>
            ) : (
              <>
              {/* Card 3 Profile Mobile View */}
              <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={User3}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h6 style={{ fontSize: "15px", fontWeight: "700" }}>
                      Ronal Jones
                    </h6>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#525252",
                        marginTop: "-8px",
                        marginBottom: "0px",
                      }}
                    >
                      800 views
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill />
                    &nbsp; Share
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <br />

      {/* Card4 */}
      <div
        className="card"
        style={{
          width: "100%",
          boxShadow: breakpoints_desktop
            ? ""
            : "0px 1px 2px rgba(0, 0, 0, 0.12)",
          border: breakpoints_desktop ? "" : "none",
        }}
      >
        <div className="card-body">
          <h6 style={{ fontWeight: "540" }} className="card-title">
            &#128188; Job
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "700", width: "90%" }} className="card-text">
              Software Developer
            </p>
            <div className="btn-group">
              <button
                style={{ height: "25px", width: "25px" }}
                type="button"
                className="btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{ marginTop: "-16px", marginLeft: "-8px" }}
                  alt="..."
                  src={menuicon}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Report
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Option 3
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <BsBag
              style={{ marginTop: "4px", width: "15px", height: "15px" }}
            />
            &nbsp;
            <p
              style={{
                fontSize: "14px",
                color: "black",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Innovaccer Analytics Private Ltd.
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <MdOutlineLocationOn
              style={{ marginTop: "4px", width: "15px", height: "15px" }}
            />
            &nbsp;
            <p style={{ fontSize: "14px", color: "black" }}>Noida, India</p>
            </div>
          <button
            style={{
              borderRadius: "8px",
              color: "#02B875",
              borderColor: "#A9AEB8",
            }}
            type="button"
            className="btn w-100"
          >
            Apply on Timesjobs
          </button>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>

          {/* Card 4 Profile Desktop View */}
            {breakpoints_desktop ? (
              <>
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={User4}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      marginTop: "10px",
                    }}
                  >
                    Joseph Gray
                  </h6>
                </div>
                <div style={{ display: "flex" }}>
                  <AiOutlineEye
                    style={{ width: "18px", height: "18px", marginTop: "10px" }}
                  />
                  &nbsp;
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#525252",
                      marginTop: "7.5px",
                      marginBottom: "0px",
                    }}
                  >
                    1.4k views
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill />
                  </button>
                </div>
              </>
            ) : (
              <>
              {/* Card 4 Profile Mobile View */}
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={User4}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h6 style={{ fontSize: "15px", fontWeight: "700" }}>
                      Joseph Gray
                    </h6>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#525252",
                        marginTop: "-8px",
                        marginBottom: "0px",
                      }}
                    >
                      1.7k views
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill />
                    &nbsp; Share
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Card;
