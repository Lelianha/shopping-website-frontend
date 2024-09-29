import React from "react";
import {Link , useMatch , useResolvedPath} from "react-router-dom";
import {FaFacebookF} from "react-icons/fa"
import {BsTelephone} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {TiSocialLinkedin} from "react-icons/ti"
import {SiInstagram,SiTwitter} from "react-icons/si"
import { useState } from "react";
import './Footer.css'
 function Footer() {

return (
    <>
    <footer className="footer">
<div className="about" >
<img src={require('../images/purpleSympol.png')} className="symbol" alt="Logo"></img>
<p className="slo">It was created with<br></br> your mood in mind</p>
</div>

{/* <p className="follow">Follow Us</p> */}
 <div>
<p className="find">Find Us On</p>
<span><SiTwitter id="twitterIcon"/> <div className="findIcons">Twitter</div></span>
<br></br>
<span><TiSocialLinkedin id="linkedInIcon"/> <div className="findIcons">Linkedin</div></span>
<br></br>
<span><FaFacebookF id="facebookIcon"/> <div className="findIcons">Facebook</div></span>
<br></br>
<span><SiInstagram id="instagramIcon"/> <div className="findIcons">Instagram</div></span>
</div>

<div>
<p className="find">Find Us On</p>
<span><SiTwitter id="twitterIcon"/> <div className="findIcons">LuxeBags</div></span>
<br></br>
<span><TiSocialLinkedin id="linkedInIcon"/> <div className="findIcons">LuxeBags_Women</div></span>
<br></br>
<span><FaFacebookF id="facebookIcon"/> <div className="findIcons">Luxe.Bags</div></span>
<br></br>
<span><SiInstagram id="instagramIcon"/> <div className="findIcons">LuxeBags_Official</div></span>
</div>

<div>
<p className="contact">Contact Us</p>
<br></br>
<span><BsTelephone/> <div className="email">02-6804224</div></span>
<br></br>
<span><FiMail/> <div className="email">info@LuxeBags.co.il</div></span>
</div>
 
    </footer>

    </>
 
)
 
      }
 
 


function CustomLink({to , children , ...props}){
  const resolvedPath=useResolvedPath(to)
  const isActive=useMatch({path:resolvedPath.pathname , end:true});

  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}> 
      {children}
      </Link>
    </li>
  )
}



export default Footer ;
