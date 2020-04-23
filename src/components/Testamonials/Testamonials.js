import React, {useState, Fragment} from 'react';
import PropTypes from "prop-types";
import "./Testamonials.css"
import intel from "./images/intel.png";
import amd from "./images/amd.png"
import corsair from "./images/corsair.png";
import newegg from "./images/newegg.png";
import hyperx from "./images/hyperx.png";
import nvidia from "./images/nvidia.png"

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        head: "A service that no other tech company can truly match.",
        sub: "-Michael Smith, Business Insider",
        item: 1
    },
    {
        head: "PARTBOX is a worthwhile resource for young and old PC builders alike.",
        sub: "-Dean Marshall, PC Magazine",
        item: 2
    },
    {
        head: "They have truly nailed the exciting variety that people crave.",
        sub: "-Emily Ashton, Huffington Post",
        item: 3
    },
    {
        head: "The various packages that PARTBOX offer tailor to each individual.",
        sub: "-Mikayla Patel, Mashable",
        item: 4
    }
];

const Testamonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.item} className={"carousel-item"}
            >
                    <h2 className="test-head section-head">{item.head}</h2>
                    <em className={"test-sub"}>{item.sub}</em>
            </CarouselItem>
        );
    });


    return (
        <Fragment>
            <section id="testimonials">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl className="prev" direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl className="next" direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </section>

           {/*Press*/}
            <section id="press" className="yellow-bg">
                <h3 className="partners-label">our partners</h3>
                <a href="http://www.intel.com"><img className="press-img"
                                                                    src={intel} alt={""}/></a>
                <a href="http://www.amd.com"><img className="press-img" src={amd} alt={""}/></a>
                <a href="http://www.nvidia.com"><img className="press-img" src={nvidia} alt={""}/></a>
                <a href="http://www.newegg.com"><img className="press-img" src={newegg} alt={""}/></a>
                <a href="http://www.corsair.com"><img className="press-img"
                                                                      src={corsair} alt={""}/></a>
                <a href="http://www.hyperxgaming.com"><img className="press-img hyperx"
                                                                           src={hyperx} alt={""}/></a>
            </section>
        </Fragment>
    );
};

Carousel.propTypes = {
    pause: PropTypes.oneOf(['hover', false])
};

export default Testamonials;