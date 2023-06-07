import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import '../Slider/Slider.css'

const Slider = () => {
  return (
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/elementor/thumbs/woman-learning-english-online-e1625538535869-p9p4lrjtk1sd2tmdyid28uz6flhqadle7aui7qrlao.jpg" className="object-cover h-full"/>
    
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/elementor/thumbs/girl-making-a-video-call-online-on-the-internet--e1625538546462-p9p4m1w1n86imj7da4tyiad8yu2rn1qfwq0uhsc9e8.jpg" className="h-full" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/elementor/thumbs/male-student-wearing-headphones-taking-online-course-seminar-watching-webinar--e1625538582195-p9p4mzq8h9gu8hu7sjgj01tucpfzc5gs1dibrqy368.jpg"  className="h-full"/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://scuola.vamtam.com/wp-content/uploads/2020/03/jean-carlo-emer-2pMAkCyGqrA-unsplash-453x453.jpg" className="h-full" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://scuola.vamtam.com/wp-content/uploads/2020/01/russia-bg-1-466x466.jpg" className="h-full" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://ld-wt73.template-help.com/tf/verbonix_v1/images/large-features-3-570x368.jpg" className="h-full" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://ld-wt73.template-help.com/tf/verbonix_v1/images/image-aside-01-1143x584.png" className="h-full" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://ld-wt73.template-help.com/tf/verbonix_v1/images/large-features-4-1214x792.jpg"  className="h-full" />
    </SwiperSlide>
  </Swiper>
  );
};

export default Slider;