// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const baadiList = [
  {
    title: "Who are we ?",
    chhotiList: [
      {
        url: "",
        txt: "Our Team",
      },
      {
        url: "",
        txt: "Press",
      },
      {
        url: "",
        txt: "Authenticity",
      },
      {
        url: "",
        txt: "Careers CSR",
      },
      {
        url: "",
        txt: "Divueens",
      },
      {
        url: "",
        txt: "Investor Relation",
      },
    ],
  },
  {
    title: "Help",
    chhotiList: [
      {
        url: "",
        txt: "Contact Us",
      },
      {
        url: "",
        txt: "Frequently Asked Questions",
      },
      {
        url: "",
        txt: "Cancellation and Return",
      },
      {
        url: "",
        txt: "Shipping and Delivery ",
      },
      {
        url: "",
        txt: "Sell on Divueens",
      },
      {
        url: "",
        txt: "Privacy Policy",
      },
    ],
  },
  {
    title: "INSPIRE US",
    chhotiList: [
      {
        url: "",
        txt: "Beauty Books",
      },
      {
        url: "",
        txt: "Divueens Network",
      },
    ],
  },
  {
    title: "QUICK LINKS",
    chhotiList: [
      {
        url: "",
        txt: "Special Offers",
      },
      {
        url: "",
        txt: "Trendings",
      },
      {
        url: "",
        txt: "New Launches",
      },
      {
        url: "",
        txt: "Divueens Fashion",
      },
    ],
  },
  {
    title: "TOP CATEGORIES",
    chhotiList: [
      {
        url: "",
        txt: "Makeup",
      },
      {
        url: "",
        txt: "Hair",
      },
      {
        url: "",
        txt: "Organics",
      },
    ],
  },
];

function FooterBlock() {
  const [toggleView, cngView] = useState(0);
  const [prev, cngPrev] = useState(0);

  function ListItemsAll() {
    return (
      <div className="upperFooterPart-1">
        {baadiList.map((lst, index) => {
          return (
            <div className="footer-col" key={index}>
              <h3 onClick={() => (prev !== index+1 ? cngView(index+1) : cngView(0))} className="drpBtn">
                {lst.title} <i className={`fa-solid ${toggleView === index+1 ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
              </h3>
              <ul className={`close ${toggleView === index+1 ? "all_Items" : ""}`}>
                {lst.chhotiList.map((list2, int) => {
                  return (
                    <li key={int}><Link to={list2.url} className="footerList">{list2.txt}</Link></li>
                  )})}
              </ul>
            </div>
          )})}
      </div>
    );
  }

  useEffect(() => {
    ListItemsAll();
    cngPrev(toggleView);
  }, [toggleView]);

  return (
    <div className="footermain">
      <div className="upperFooterPart">
        <ListItemsAll />
        <div className="upperFooterPart-2">
          <div className="upf2-1">
            <p>Connect with us through</p>
            <div className="socialIcons">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="upf2-1">
            <div className="help">
              For any query contact us at
              <br /> 234567889 <br />
              (Monday to saturday, 8AM to 10PM and sunday, 10AM to 7PM)
            </div>
          </div>
        </div>
      </div>
      <div className="lowerFooterPart">
        <h2>Caution !</h2>
        <p>
          DIVUEENS never call regarding offers,free gifts or payment through
          links, Beaware of fraud calls or messages.
        </p>
      </div>
    </div>
  );
}

export default FooterBlock;
