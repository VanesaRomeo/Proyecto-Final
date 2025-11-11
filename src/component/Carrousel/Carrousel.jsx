import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { SliderContainer } from './CarrouselStyles';

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <img src="https://res.cloudinary.com/dc15c8nx7/image/upload/v1732837225/alicia_vxtegs.jpg" alt="" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dc15c8nx7/image/upload/v1732837225/Anna_Karenina_rhflpb.webp" alt="" />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dc15c8nx7/image/upload/v1732837222/se%C3%B1or_de_los_anillos_xm4f9k.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dc15c8nx7/image/upload/v1732837221/principito_elp5zd.webp"
            alt=""
          />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dc15c8nx7/image/upload/v1732837245/Los_Pilares_de_la_Tierra_q9iwuo.webp" alt="" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dc15c8nx7/image/upload/v1732837245/los_dioses_del_norte_hdhqnq.webp" alt="" />
        </div>
      </Slider>
    </SliderContainer>
  );
}

export default AutoPlay;
