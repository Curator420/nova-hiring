import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Nova Hiring Solutions.</div>
<div>
  <Link to={'https://github.com/Curator420'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://www.linkedin.com/company/nhs-us'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/_nhs.us_/'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer