import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

function Footer() {
  return (
    <footer className="site-footer">
      {/* Footer navigation */}
      <nav className="footer-nav">
        <a href="#">Our Blog</a>
        <a href="#">Our Artists</a>
        <a href="#">Our Story</a>
      </nav>

      {/* Copyright information */}
      <p>Copyright © 2023 Erased Disks Ltd.</p>

      {/* Social media icons */}
      <div className="footer-icons">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
    </footer>
  )
}

export default Footer