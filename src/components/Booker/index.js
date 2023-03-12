import Booker from "./Booker";
import useBookerStyles from "./BookerStyles";
import iconServices from "../../assets/img/booker/ek-hizmetler.svg";
import seyahatGereksinim from "../../assets/img/booker/seyahat-kisitlamalari.svg";
import iconKampanya from "../../assets/img/booker/kampanya.svg";

const itemBoxs = [
  {
    icon: iconServices,
    title: "Ek Hizmetler",
    description:
      "Seyahatinizi zenginleştirmenizi sağlayacak otel rezervasyonu ve araç kiralama gibi hizmetlerimizden faydalanabilirsiniz.",
  },
  {
    icon: seyahatGereksinim,
    title: "Seyahat gereksinimleri",
    description:
      "İnteraktif harita uygulamamızı kullanarak ülkelerin güncel seyahat gereksinimlerine erişebilirsiniz.",
  },
  {
    icon: iconKampanya,
    title: "Turkish Airlines Gift Card",
    description:
      "Turkish Airlines Gift Card satın alarak sevdiklerinize sürpriz bir seyahat deneyimi armağan edebilir, onlara yeni yerler keşfetmenin heyecanını yaşatabilirsiniz.",
  },
];

const Index = (props) => {
  const classes = useBookerStyles();
  return (
    <>
      <h2
        style={{
          fontFamily: "Museo Sans,sans-serif",
          fontSize: "43px",
          textAlign: "center",
          marginTop: "120px",
        }}
      >
        Rezervasyon Avantajları
      </h2>
      <div className={classes.bookerWrapper}>
        {itemBoxs.map((item) => (
          <Booker
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Index;
