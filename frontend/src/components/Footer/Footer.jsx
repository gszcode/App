import googlePlay from '../../images/playstore.png'
import appStore from '../../images/Appstore.png'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__download">
        <h4 className="footer__download--title">DOWNLOAD OUR APP</h4>
        <p className="footer__download--parrafo">
          Download App for Android and <br /> IOS mobile phone
        </p>
        <img
          src={googlePlay}
          alt="GooglePlay"
          className="footer__download--img"
        />
        <img src={appStore} alt="AppStore" className="footer__download--img" />
      </section>
      <section className="footer__header">
        <h2 className="footer__header--title">ECOMMERCE</h2>
        <span className="footer__header--span">
          High Quality is our first priority
        </span>
        <span className="footer__header--span">
          Copyrights 2022 &copy; @GszCode.
        </span>
      </section>
      <section className="footer__links">
        <h3 className="footer__links--title">Follow Us</h3>
        <div className="socials">
          <a
            className="socials__item"
            href="https://www.linkedin.com/in/gabriel-sanchez-0591a723a/"
          >
            Instagram
          </a>
          <a
            className="socials__item"
            href="https://www.linkedin.com/in/gabriel-sanchez-0591a723a/"
          >
            Twitter
          </a>
          <a
            className="socials__item"
            href="https://www.linkedin.com/in/gabriel-sanchez-0591a723a/"
          >
            Facebook
          </a>
        </div>
      </section>
    </footer>
  )
}
