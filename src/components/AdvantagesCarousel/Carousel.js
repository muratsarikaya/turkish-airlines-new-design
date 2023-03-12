import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideItem from "./SlideItem";

const slideItems = [
  {
    img: "https://cdn.turkishairlines.com/m/6d20d0196da8f09d/original/holidays_270x150px.webp",
    title:
      "Turkish Airlines Holidays ile tüm tatil ihtiyaçlarınız tek pakette!",
    description:
      "Uçuş, konaklama, transfer ve araç kiralama gibi tüm seyahat ihtiyaçlarınızı bir arada sunan tatil paketlerimize göz atın, en avantajlı tatil fırsatlarını kaçırmayın!",
    buttonText: "Keşfet",
  },
  {
    img: "https://cdn.turkishairlines.com/m/6d856c7fca12576e/original/uefa-block.webp",
    title: "UEFA Şampiyonlar Ligi tarihine yolculuk",
    description:
      "Bu yıl Türk Hava Yolları resmi sponsorluğunda gerçekleşecek Avrupa’nın en büyük spor organizasyonuna yakından bakıyoruz.",
    buttonText: "Detaylı bilgi",
  },
  {
    img: "https://cdn.turkishairlines.com/m/bdd34937c7b95ac/original/Mobil_Uygulama_270x150_02.webp",
    title: "Türk Hava Yolları mobil uygulamasını keşfedin, rahat edin!",
    description:
      "Mobil uygulamamız ile bilet alma, mobil biniş kartı oluşturma, check-in gibi işlemlerinizi hızla gerçekleştirebilir; kampanya ve duyurularımızdan ilk siz haberdar olabilirsiniz.",
    buttonText: "Keşfet",
  },
  {
    img: "https://cdn.turkishairlines.com/m/7956af177c96129d/original/CO2Mission_Block-1.webp",
    title: "Uçuşunuzun karbon emisyonunu dengeleyin!",
    description:
      "Uçuşunuzdan kaynaklanan karbon emisyonunu dengeleyerek dünyamızı iyileştirme çabamıza katkıda bulunun.",
    buttonText: "Keşfet",
  },
];

const Carousel = (props) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slideItems.map((slide) => (
          <SwiperSlide>
            <SlideItem
              img={slide.img}
              title={slide.title}
              description={slide.description}
              buttonText={slide.buttonText}
            ></SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
