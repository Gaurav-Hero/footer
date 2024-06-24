// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function FooterBlock() {
  const [toggleView, cngView] = useState(0);
  const [prev, cngPrev] = useState(0);

  function ListItemsAll() {
    return (
      <div className="upperFooterPart-1">
        <div className="upf1 footer-col">
          <h3 onClick={() => (prev !== 1 ? cngView(1) : cngView(0))} className="drpBtn">
            Who are we ?
            <i
              className={`fa-solid ${
                toggleView === 1 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </h3>
          <ul className={`close ${toggleView === 1 ? "all_Items" : ""}`}>
            <li>
              <Link to="/ourteam" className="footerList">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="footerList">Press</Link>
            </li>
            <li>
              <Link className="footerList">Authenticity</Link>
            </li>
            <li>
              <Link className="footerList">Careers CSR</Link>
            </li>
            <li>
              <Link className="footerList">Divueens</Link>
            </li>
            <li>
              <Link className="footerList">Investor Relation</Link>
            </li>
          </ul>
        </div>
        <div className="upf2 footer-col">
          <h3 onClick={() => (prev !== 2 ? cngView(2) : cngView(0))} className="drpBtn">
            Help
            <i
              className={`fa-solid ${
                toggleView === 2 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </h3>
          <ul className={`close ${toggleView === 2 ? "all_Items" : ""}`}>
            <li>
              <Link to="/contact" className="footerList">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="footerList">Frequently Asked Questions</Link>
            </li>
            <li>
              <Link className="footerList">Cancellation and Return</Link>
            </li>
            <li>
              <Link className="footerList">Shipping and Delivery </Link>
            </li>
            <li>
              <Link className="footerList">Sell on Divueens</Link>
            </li>
            <li>
              <Link className="footerList">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="upf3 footer-col">
          <h3 onClick={() => (prev !== 3 ? cngView(3) : cngView(0))} className="drpBtn">
            INSPIRE US
            <i
              className={`fa-solid ${
                toggleView === 3 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </h3>
          <ul className={`close ${toggleView === 3 ? "all_Items" : ""}`}>
            <li>
              <Link to="/books" className="footerList">
                Beauty Books
              </Link>
            </li>
            <li>
              <Link className="footerList">Divueens Network</Link>
            </li>
          </ul>
        </div>
        <div className="upf4 footer-col">
          <h3 onClick={() => (prev !== 4 ? cngView(4) : cngView(0))} className="drpBtn">
            QUICK LINKS
            <i
              className={`fa-solid ${
                toggleView === 4 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </h3>
          <ul className={`close ${toggleView === 4 ? "all_Items" : ""}`}>
            <li>
              <Link to="/offer" className="footerList">
                Special Offers
              </Link>
            </li>
            <li>
              <Link className="footerList">Trendings</Link>
            </li>
            <li>
              <Link className="footerList">New Launches</Link>
            </li>
            <li>
              <Link className="footerList">Divueens Fashion</Link>
            </li>
          </ul>
        </div>
        <div className="upf5 footer-col">
          <h3 onClick={() => (prev !== 5 ? cngView(5) : cngView(0))} className="drpBtn">
            TOP CATEGORIES
            <i
              className={`fa-solid ${
                toggleView === 5 ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </h3>
          <ul className={`close ${toggleView === 5 ? "all_Items" : ""}`}>
            <li>
              <Link to="/makeup" className="footerList">
                Makeup
              </Link>
            </li>
            <li>
              <Link className="footerList">Hair</Link>
            </li>
            <li>
              <Link className="footerList">Organics</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  // function cngPrev(toggleView){if (prev === toggleView ) {cngPrev(0)} else {cngPrev(toggleView)}}
  useEffect(() => {
    ListItemsAll();
    cngPrev(toggleView);
  }, [toggleView]);
  // document.getElementsByClassName('close')[n-1].classList.toggle('all_Items');
  // if (document.getElementsByClassName('fa-solid')[n-1].classList.contains('fa-chevron-up')) {
  //   document.getElementsByClassName('fa-solid')[n-1].classList.replace('fa-chevron-up', 'fa-chevron-down');
  // } else {
  //   document.getElementsByClassName('fa-solid')[n-1].classList.replace('fa-chevron-down', 'fa-chevron-up');
  // }
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
