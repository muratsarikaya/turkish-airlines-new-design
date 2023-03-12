import FooterMenuContext from "./FooterMenuContext";

const menuTabs = [
  {
    label: "PLANLA & UÇ",
    content: <FooterMenuContext menuTitle='PLANLA & UÇ' />,
    icon: "fligth",
  },
  {
    label: "SEYAHAT DENEYİMİ",
    content: <FooterMenuContext menuTitle='SEYAHAT DENEYİMİ' />,
    icon: "otel",
  },
  {
    label: "KEŞFET",
    content: <FooterMenuContext menuTitle='KEŞFET' />,
    icon: "onlineCheckin",
  },
  {
    label: "POPÜLER UÇUŞLAR",
    content: <FooterMenuContext menuTitle='POPÜLER UÇUŞLAR' />,
    icon: "flightStatus",
  },
  {
    label: "BİLGİ EDİN",
    content: <FooterMenuContext menuTitle='BİLGİ EDİN' />,
    icon: "flightStatus",
  },
  {
    label: "MILES&SMILES",
    content: <FooterMenuContext menuTitle='MILES&SMILES' />,
    icon: "flightStatus",
  },
  {
    label: "CORPORATE CLUB",
    content: <FooterMenuContext menuTitle='CORPORATE CLUB' />,
    icon: "flightStatus",
  },
  {
    label: "TÜRK HAVA YOLLARI",
    content: <FooterMenuContext menuTitle='TÜRK HAVA YOLLARI' />,
    icon: "flightStatus",
  },
];

export default menuTabs;

const menuList = [
  {
    menuTitle: "KURUMSAL",
    subMenu: [
      {
        text: "Hakkımızda",
        url: "/tr-int/basin-odasi/hakkimizda/",
        className: "",
      },
      {
        text: "Politikalarımız",
        url: "/tr-int/basin-odasi/hakkimizda/politikalarimiz//",
        className: "",
      },
      {
        text: "Sponsorluklar",
        url: "/tr-int/basin-odasi/hakkimizda/politikalarimiz//",
        className: "",
      },
      {
        text: "Basın odası",
        url: "/tr-int/basin-odasi/hakkimizda/politikalarimiz//",
        className: "",
      },
      {
        text: "İhale duyuruları",
        url: "/tr-int/basin-odasi/hakkimizda/politikalarimiz//",
        className: "",
      },
      {
        text: "Yatırımcı ilişkileri",
        url: "/tr-int/basin-odasi/hakkimizda/politikalarimiz//",
        className: "external",
      },
      {
        text: "Kariyer",
        url: "/tr-int/basin-odasi/hakkimizda/politikalarimiz//",
        className: "external",
      },
    ],
  },
  {
    menuTitle: "BAĞLANTILAR",
    subMenu: [
      {
        text: "Turkish Airlines Conventions",
        url: "/tr-int/basin-odasi/hakkimizda/",
        className: "",
      },
      {
        text: "Yolcu charter",
        url: "/tr-int/basin-odasi/hakkimizda/politikalarimiz//",
        className: "external",
      },
    ],
  },
  {
    menuTitle: "İletişim",
    subMenu: [
      {
        text: "Bize Ulaşın",
        url: "/tr-int/basin-odasi/hakkimizda/",
        className: "",
      },
    ],
  },
];
export { menuList };
