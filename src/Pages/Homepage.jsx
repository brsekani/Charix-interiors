import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

import TheArtOfBeautifulLiving from "../../ui/TheArtOfBeautifulLiving";
import ServicesSection from "../../ui/ServicesSection";
import AboutSection from "../../ui/AboutSection.jsx";
import StatisticsSection from "../../ui/StatisticsSection.jsx";
import ImageGallery from "../../ui/ImageGallery.jsx";
import RecentProjects from "../../ui/RecentProjects.jsx";
import ProjectGallery from "../../ui/ProjectGallery.jsx";
import ShopInteriorAccessories from "../../ui/ShopInteriorAccessories.jsx";
import PosterComponent from "../../ui/PosterComponent.jsx";
import ContactForm from "../../ui/ContactForm.jsx";
import ContactSection from "../../ui/ContactSection.jsx";

// Images

function Homepage() {
  return (
    <div className="flex justify-center">
      <div className="w-[1512px] px-20 h-[1162px] bg-[#F2F2F2] mt-[9.5rem]">
        {/* The Art of Beautiful Living section */}
        <TheArtOfBeautifulLiving />

        {/* Our Services section */}
        <ServicesSection />

        {/* About Chariz Interiors section */}
        <AboutSection />

        {/* Projects Completed section */}
        <StatisticsSection />

        {/* Chariz section */}
        <ImageGallery />

        {/* Our Recent Projects section */}
        <RecentProjects />

        {/* Project Gallery section */}
        <ProjectGallery />

        {/* Shop Interior Accessories section */}
        <ShopInteriorAccessories />

        {/* Start a Project section */}
        <PosterComponent />

        {/* Get in Touch section */}
        <ContactForm />

        {/* Let’s Talk section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default Homepage;
