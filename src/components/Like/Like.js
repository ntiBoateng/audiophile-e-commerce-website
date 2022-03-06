import React from "react";
import {useGlobalContext} from "../../context";
import {Link} from "react-router-dom";

function Like({Products}){
    const {others, category} = Products;
    const {getWidth} = useGlobalContext();
    return(
        <section>
            <div>
                <h2></h2>
                <div>
                    {others.map((other, index) => {
                        const {image, name, slug} = other;
                        return (
                            <article>
                                <div>
                                    <img/>
                                </div>
                                <h3></h3>
                                <Link></Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Like;