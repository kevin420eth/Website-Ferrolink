import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import { useParams } from 'react-router'
import ProductData from '../../Data'

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Pagination, Navigation } from "swiper";

const ShowcaseSwiper = () => {
    const { productType } = useParams()
    const pagination = {
        clickable: true,
      };

    return (
        <>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                spaceBetween={10}
                pagination={pagination}
                navigation={true}
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper"
            >
                {ProductData.map((item) => {
                    if (item.category === productType) {
                        return (
                            <SwiperSlide>
                                <a href={`/product/${item.category}/${item.name}`} className='product__preview' key={item.id}>
                                    <img className='product__preview__image' src={item.image} alt='img' />
                                    <p className='product__preview__name'>{item.name}</p>
                                </a>
                            </SwiperSlide>
                        )
                    }
                })}
            </Swiper>
        </>
    )
}

export default ShowcaseSwiper