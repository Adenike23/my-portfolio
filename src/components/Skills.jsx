import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import nextjsLogo from "../assets/images/nextjs.png";
import reactjsLogo from "../assets/images/reactjs.png";
import typescriptLogo from "../assets/images/typescript.png";
import appwriteLogo from "../assets/images/appwrite.png";
import tailwindLogo from "../assets/images/tailwind.png";
import javascriptLogo from "../assets/images/js.png";
import htmlLogo from "../assets/images/html.png";
import cssLogo from "../assets/images/css.png";

import Slider from 'react-slick';

const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 480, // Mobile portrait and below
            settings: {
              slidesToShow: 3, // Show 1 slide on mobile portrait
              slidesToScroll: 1,
            }
        }
    ]
};
export default function Skills() {
    return (
        <div style={{ marginTop: '60px', }} className='pb-[3rem]'>
            <Slider {...settings}>
                <div>
                    <img src={nextjsLogo} alt="Next.js Logo" className="w-[50%]"/>
                </div>
                <div>
                    <img src={reactjsLogo} alt="React.js Logo" className="w-[50%]"/>
                </div>
                <div>
                    <img src={typescriptLogo} alt="TypeScript Logo" className="w-[30%]"/>
                </div>
                <div>
                    <img src={appwriteLogo} alt="Appwrite Logo" className="w-[30%]"/>
                </div>
                <div>
                    <img src={javascriptLogo} alt="JavaScript Logo" className="w-[30%]"/>
                </div>
                <div>
                    <img src={tailwindLogo} alt="Tailwind CSS Logo" className="w-[40%]"/>
                </div>
                <div>
                    <img src={htmlLogo} alt="HTML Logo" className="w-[30%]"/>
                </div>
                <div>
                    <img src={cssLogo} alt="CSS Logo" className="w-[25%]"/>
                </div>
            </Slider>
        </div>
    )
}