// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom';
function UpperFooterPart() {
  return (
    <>
    <div className='upperFooterPart'>
      <div className="upperFooterPart-1">
        <div className="upf1 footer-col">
            <h3>Who are we ?</h3>
            <ul>
                <li><Link to="/ourteam"  className="footerList">Our Team</Link></li>
                <li><Link  className="footerList">Press</Link></li>
                <li><Link  className="footerList">Authenticity</Link></li>
                <li><Link  className="footerList">Careers CSR</Link></li>
                <li><Link  className="footerList">Divueens</Link></li>
                <li><Link  className="footerList">Investor Relation</Link></li>
            </ul>
        </div>
        <div className="upf2 footer-col">
        <h3>Help</h3>
            <ul>
                <li><Link to="/contact"  className="footerList">Contact Us</Link></li>
                <li><Link  className="footerList">Frequently Asked Questions</Link></li>
                <li><Link  className="footerList">Cancellation and Return</Link></li>
                <li><Link  className="footerList">Shipping and Delivery </Link></li>
                <li><Link  className="footerList">Sell on Divueens</Link></li>
                <li><Link  className="footerList">Privacy Policy</Link></li>
            </ul>
        </div>
        <div className="upf3 footer-col">
        <h3>INSPIRE US </h3>
            <ul>
                <li><Link to="/books"  className="footerList">Beauty Books</Link></li>
                <li><Link  className="footerList">Divueens Network</Link></li>
            </ul>
        </div>
        <div className="upf4 footer-col">
        <h3>QUICK LINKS</h3>
            <ul>
                <li><Link to="/offer"  className="footerList">Special Offers</Link></li>
                <li><Link  className="footerList">Trendings</Link></li>
                <li><Link  className="footerList">New Launches</Link></li>
                <li><Link  className="footerList">Divueens Fashion</Link></li>
            </ul>
        </div>
        <div className="upf5 footer-col">
        <h3>TOP CATEGORIES</h3>
            <ul>
                <li><Link to="/makeup"  className="footerList">Makeup</Link></li>
                 <li><Link  className="footerList">Hair</Link></li>
                <li><Link  className="footerList">Organics</Link></li>
            </ul>
        </div>
      </div>
      <div className="upperFooterPart-2">
        <div className="upf2-1">
            <p>Connect with us through</p>
            <div className="socialIcons">
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div className="uff2-2">
        <div className="help">
                    For any query contact us at<br/> 234567889 <br/>(Monday to saturday 1:00 to 6:00)
                </div>
        </div>
      </div>
    </div>
        <div className="lowerFooterPart">
            <h2>Caution !</h2>
            <p>DIVUEENS never call regarding offers,free gifts or payment through links,Beaware of fraud calls or messages.</p>
        </div>
    </>
  )
}

export default UpperFooterPart
