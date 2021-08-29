import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { SocialIcon } from 'react-social-icons';
import '../CSS/footer.css';

const Footer = () => (
  <footer>
    <div className="social">
      <TwitterShareButton
        url="https://fix-a-drink.herokuapp.com/"
        quote={"Fix A Drink - All the cocktails you've ever wanted to try"}
        hashtag="#fixadrink"
        size={24}
      >
        <SocialIcon
          network="twitter"
          bgColor="#fcf5c7"
          style={{ height: 35, width: 35 }}
          className="social-icon"
        />
      </TwitterShareButton>

      <FacebookShareButton
        url="https://fix-a-drink.herokuapp.com/"
        quote={"Fix A Drink - All the cocktails you've ever wanted to try"}
        hashtag="#fixadrink"
        size={24}
      >
        <SocialIcon
          network="facebook"
          bgColor="#fcf5c7"
          style={{ height: 35, width: 35 }}
          className="social-icon"
        />
      </FacebookShareButton>
      <LinkedinShareButton
        url="https://fix-a-drink.herokuapp.com/"
        quote={"Fix A Drink - All the cocktails you've ever wanted to try"}
        hashtag="#fixadrink"
        size={24}
      >
        <SocialIcon
          network="linkedin"
          bgColor="#fcf5c7"
          style={{ height: 35, width: 35 }}
          className="social-icon"
        />
      </LinkedinShareButton>

      <WhatsappShareButton
        url="https://fix-a-drink.herokuapp.com/"
        quote={"Fix A Drink - All the cocktails you've ever wanted to try"}
        hashtag="#fixadrink"
        size={24}
      >
        <SocialIcon
          network="whatsapp"
          bgColor="#fcf5c7"
          style={{ height: 35, width: 35 }}
          className="social-icon"
        />
      </WhatsappShareButton>
    </div>
    <div className="credits">
      <p className="credits-p">
        Made by
        <a className="git-link" href="github.com/1v4n4">1v4n4</a>
        {' '}
        © 2021
      </p>
    </div>
  </footer>
);
export default Footer;
