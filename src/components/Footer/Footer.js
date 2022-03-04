import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import {Link} from "react-router-dom";
// import SocialMedia from "../SocialMedia";

function Footer(){
    return(
        <footer>
            <section>
                <section>
                    <article>
                        <Link to="/">
                            <img src={logo} alt="AudioPhile E-Commerce Website"/>
                        </Link>
                    </article>
                    <article>
                        <section>
                            <Link>Home</Link>
                            <Link>Headphones</Link>
                            <Link>Speakers</Link>
                            <Link>Earphones</Link>
                        </section>
                    </article>
                </section>
                <article>
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                        visit our demo facility - we’re open 7 days a week.
                    </p>
                    {/* <SocialMedia/> */}
                </article>
                <article>
                    <aside>
                        <p>Copyright 2021. All Rights Reserved</p>
                    </aside>
                    {/* <SocialMedia/> */}
                </article>
            </section>
        </footer>
    );    
}

export default Footer;