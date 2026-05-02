import Banner from "@/components/homepage/Banner";
import Consultation from "@/components/homepage/Consultation";
import FeaturedTiles from "@/components/homepage/FeaturedTiles";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedTiles></FeaturedTiles>
      <Consultation></Consultation>
    </div>
  );
}
