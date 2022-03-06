import React from "react";
import {useGlobalContext} from "../../context";
import {Link} from "react-router-dom";

function Like({Products}){
    const {others, category} = Products;
    const {getWidth} = useGlobalContext();
    return(
        <section className="like">
            <div className="like-container contain">
                <h2 data-aos="fade-right">YOU MAY ALSO LIKE</h2>
                <div data-aos="fade-up" className="like-container-info">
                    {others.map((other, index) => {
                        const {image, name, slug} = other;
                        return (
                            <article data-aos={`${
                                index === 0? "fade-right": index === 1? "fade-up" : "fade-left"}`}
                                data-aos-delay="200"
                                className="likeInfo"
                                key={index}>
                                <div>
                                    <img/>
                                </div>
                                <h3></h3>
                                <Link>SEE PRODUCT</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Like;