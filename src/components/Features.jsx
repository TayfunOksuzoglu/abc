import featuredImg from '../assets/feature.svg';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Features = () => {
    return (
        <section className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="lg:w-1/4"
                >
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why are we better than others</h3>
                    <p className="text-base text-tartiary">
                        A simple paragraph is comprised of three major components. The first sentence, which is often a
                        declarative sentence, is called the “topic sentence.”
                    </p>
                </motion.div>
                {/* featured cards */}
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full lg:w-3/4"
                >
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                        <div className="bg-[rgba(255,255,255,0.4)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer flex-wrap">
                            <img
                                src={featuredImg}
                                alt="A cartoon man walks down a staircase while wearing headphones."
                            />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                                Convenient study schedule
                            </h5>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.4)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer flex-wrap md:mt-16">
                            <img
                                src={featuredImg}
                                alt="A cartoon man walks down a staircase while wearing headphones."
                            />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                                Convenient study schedule
                            </h5>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.4)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer flex-wrap">
                            <img
                                src={featuredImg}
                                alt="A cartoon man walks down a staircase while wearing headphones."
                            />
                            <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                                Convenient study schedule
                            </h5>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
