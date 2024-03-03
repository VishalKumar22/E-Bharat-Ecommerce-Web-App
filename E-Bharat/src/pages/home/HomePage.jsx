import Category from "../../components/category/Category.jsx";
import HeroSection from "../../components/heroSection/HeroSection.jsx";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard.jsx";
import Layout from "../../components/layout/Layout.jsx";
import Testimonial from "../../components/testimonial/Testimonial.jsx";
import Track from "../../components/track/Track.jsx";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default HomePage;
