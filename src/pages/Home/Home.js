import React from "react";
import { Link } from "react-router-dom";
import BestGear from "../../components/BestGear";
import CategoryNavigation from "../../components/CategoryNavigation";

function Home(){
    return(
        <>
            <section>
                <section>
                    <section>
                        <h4></h4>
                        <h1></h1>
                        <p></p>
                        <Link></Link>
                    </section>
                </section>
            </section>
            <CategoryNavigation />
            <section>
                <section>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <h1></h1>
                            <p></p>
                            <Link></Link>
                        </div>
                    </div>
                </section>
            </section>
            <section>
                <section>
                    <article>
                        <h2></h2>
                        <Link>
                            <button></button>
                        </Link>
                    </article>
                </section>
            </section>
            <section>
                <section>
                    <article></article>
                    <article>
                        <h2></h2>
                        <Link>
                            <button></button>
                        </Link>
                    </article>
                </section>
            </section>

            <BestGear />
        </>
    );
}

export default Home;