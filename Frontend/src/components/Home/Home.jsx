import Navbar from "../shared/Navbar.jsx"
import HeroSection from "./HeroSection.jsx"
import CategoryCarousel from "./CategoryCarousel.jsx"
import LatestJob from "./LatestJob.jsx"
import Footer from "./Footer.jsx"

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJob/>
        <Footer/>
    </div>
  )
}
