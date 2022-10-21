import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'
import './Contact.scss'

export const Contact = () => {
  return (
    <section className="contact">
      <a className="contact__email" href="mailto:gszcode@gmail.com">
        CONTACT: GSZCODE@GMAIL.COM
      </a>
      <div className="contact__links">
        <span className="contact__links__item">
          <FaGlobe className="social" />
          <a
            className="social__name"
            href="https://gszcode.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            PORTFOLIO
          </a>
        </span>
        <span className="contact__links__item">
          <FaLinkedin className="social" />
          <a
            className="social__name"
            href="https://www.linkedin.com/in/gabriel-sanchez-0591a723a/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </span>
        <span className="contact__links__item">
          <FaGithub className="social" />
          <a
            className="social__name"
            href="https://github.com/gszcode"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </span>
      </div>
    </section>
  )
}
