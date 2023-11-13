import Banner from '../shared/Banner';
import bannerImage from '../assets/banner.svg';

const Home = () => {
    return (
        <section className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
            <Banner
                bannerImage={bannerImage}
                heading={'Develop your skills without diligence'}
                subheading={
                    'A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.'
                }
                btn1={'Get Started'}
                btn2={'Discount'}
            />
        </section>
    );
};

export default Home;
