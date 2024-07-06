import { Divider, Image } from 'antd';
import logo from '../layout/images/climate-decode-logo.svg';
import './footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <Image className="climate-decode-logo" src={logo} />
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li>
              <a href="#">Free Designs</a>
            </li>
            <li>
              <a href="#">Latest Designs</a>
            </li>
            <li>
              <a href="#">Themes</a>
            </li>
            <li>
              <a href="#">Popular Designs</a>
            </li>
            <li>
              <a href="#">Art Skills</a>
            </li>
            <li>
              <a href="#">New Uploads</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li>
              <a href="#">Customer Agreement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">GDPR</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Media Kit</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Sign up for our Newsletter</h4>
          <p>
            Get special offers, exclusive product news, and event info delivered
            straight to your Inbox.
          </p>
          <form action="#">
            <button type="submit">Subscribe now</button>
          </form>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
        <Divider style={{ borderColor: '#fff' }} />
        <div>&copy;2023 powered by climate decode</div>
      </div>
    </section>
  );
};

export default Footer;
