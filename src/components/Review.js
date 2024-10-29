import React from "react";
import { review } from "../Data";
import quoteImg from "../assests/images/quote-img.png";

const Review = () => {
    return (
        <section className = "review">
        <h1 className="heading">
            customer's <span>review</span>
        </h1>
        <div className="box-container">
            {review.map((item, index) => (
                <div className="box">
                    <img src={quoteImg} alt="" className="quote" />
                    <p>
                        Choose Indulgeo if you want lightweight, non-greasy hydration with modern botanical blends, and go with Vasu if you prefer rich, Ayurvedic formulations and don’t mind a slightly heavier texture for night use.
                    </p>
                    <img src={item.img} alt="" />
                    <h3>john deo</h3>
                    <div className="starts">
                        <i classNamme="fas fa-star" />
                        <i classNamme="fas fa-star" />
                        <i classNamme="fas fa-star" />
                        <i classNamme="fas fa-star" />
                        <i classNamme="fas fa-star-half-alt" />
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
}

export default Review;
