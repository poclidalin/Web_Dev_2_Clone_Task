import profilePicture from '../assets/profile_picture.jpg'
import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

function Author() {
  return (
    <section className="author-section">
      {/* Author information */}
      <div className="author-text">
        <h2>The Author</h2>

        <p>
          Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend
          a nam sit turpis nostra. Tempus suspendisse libero curae faucibus
          lobortis litora bibendum praesent! Eget quam magna, diam commodo
          interdum sapien magnis.
        </p>
      </div>

      {/* Author photo */}
      <img
        className="author-photo"
        src={profilePicture}
        alt="Author"
      />

      {/* Social media icons */}
      <div className="social-icons">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
    </section>
  )
}

export default Author