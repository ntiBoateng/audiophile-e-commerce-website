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
                    
                </div>
            </div>
        </section>
    );
}

export default Like;