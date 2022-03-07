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
                        <h4>NEW PRODUCT</h4>
                        <h1>
                            XX99 MARK II
                            <br />
                            HEADPHONES
                        </h1>
                        <p>
                        Experience natural, lifelike audio and exceptional build quality
                        made for the passionate music enthusiast.
                        </p>
                        <Link>
                            SEE PRODUCT
                        </Link>
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
                            <h1>
                                ZX9
                                <br />
                                SPEAKER
                            </h1>
                            <p>
                                Upgrade to premium speakers that are phenomenally built to
                                deliver truly remarkable sound.
                            </p>
                            <Link>SEE PRODUCT</Link>
                        </div>
                    </div>
                </section>
            </section>
            <section>
                <section>
                    <article>
                        <h2>ZX7 SPEAKER</h2>
                        <Link>
                            <button>SEE PRODUCT</button>
                        </Link>
                    </article>
                </section>
            </section>
            <section>
                <section>
                    <article></article>
                    <article>
                        <h2>
                            YX1 EARPHONES
                        </h2>
                        <Link>
                            <button>SEE PRODUCT</button>
                        </Link>
                    </article>
                </section>
            </section>

            <BestGear />
        </>
    );
}

export default Home;