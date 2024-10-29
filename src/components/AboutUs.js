import React from "react";
import AboutImg from "../assests/images/about-img.jpeg";

const AboutUs = () => {
    return (
        <>
            <section className="about" id="about">
                <h1 className="heading">
                    <span>about</span>us
                </h1>
                <div className="row">
                    <div className="image">
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="content">
                        <h3>What Makes Our Food Special ?</h3>
                        <p>gguhknbiew nciui hiuewd nnuh chihewihuihd  huihdie  hiuehdw huhiuef9 f uuhd2;hdh  hd2iu9dj hiudhue2 dhiuhd982  huh29 dhudhu2i9 do u 3 hdeuh d92hd21iodjiy89  dhuewh9 </p>
                        <p>gguhknbiew nciui hiuewd nnuh chihewihuihd  huihdie  hiuehdw huhiuef9 f uuhd2;hdh  hd2iu9dj hiudhue2 dhiuhd982  huh29 dhudhu2i9 do u 3 hdeuh d92hd21iodjiy89  dhuewh9 </p>
                        <a href = "/" className = "btn">Learn More</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
