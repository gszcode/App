import photo from '../../images/me.jpg'
import './About.scss'

export const About = () => {
  return (
    <section className="about">
      <div className="about__left"></div>
      <div className="about__profile">
        <h2>About Us</h2>
        <div className="me">
          <img className="me__photo" src={photo} alt="Profile" />
          <h4 className="me__name">Gabriel Sanchez</h4>
          <p className="me__parrafo">
            This is a sample website made by @gszcode. Only with the purpose to
            practice MERN STACK.
          </p>
        </div>
        <span className="about__span">Contact Me</span>
      </div>
      <div className="about__right"></div>
    </section>
  )
}
