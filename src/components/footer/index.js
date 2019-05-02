import React from 'react';
import heart from '../../assets/svg/heart.svg';

const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="signature text-center">
                    Made With  <img src={heart} width={18} height={18} />  By <a href="https://www.github.com/victorlenerd/" target="_blank" className="highlight">VictorLeNerd</a>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
