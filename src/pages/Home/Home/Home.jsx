import Language from "../Language/Language";
import PopularClass from "../PopularClass/PopularClass";
import Slider from "../Slider/Slider";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div className="bg-[#b8b2cb]">
      <Slider></Slider>
      <Language></Language>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
