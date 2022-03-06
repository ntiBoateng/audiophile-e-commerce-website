import React from "react";
import { Link } from "react-router-dom";

function CategoryNavigation(){
    return(
        <section>
            <section>
                <Link>
                    <div>
                        <div>
                            <img/>
                        </div>
                    </div>
                    <div>
                        <h3>HeadPhones</h3>
                        <div>
                            <p>
                                Shop now
                                <span>
                                    <img/>
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div>
                        <div>
                            <img/>
                        </div>
                    </div>
                    <div>
                        <h3>Speakers</h3>
                        <div>
                            <p>
                                Shop now
                                <span>
                                    <img/>
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div>
                        <div>
                            <img/>
                        </div>
                    </div>
                    <div>
                        <h3>EarPhones</h3>
                        <div>
                            <p>
                                Shop now
                                <span>
                                    <img/>
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
            </section>
        </section>
    );
}

export default CategoryNavigation;