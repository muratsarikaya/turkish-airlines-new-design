import React, { Suspense } from "react";
import menuTabs from "./FooterMenuList";
import FooterBottomMenu from "./Bottom/FooterBottomMenu";

const SocialMedia = React.lazy(() => import("./SocialMedia"));
const FooterTabMenu = React.lazy(() => import("./FooterMenuTab"));

const Footer = (props) => {
  return (
    <footer>
      <Suspense fallback={<div>Loading...</div>}>
        <SocialMedia />
        <FooterTabMenu menuTabsConfig={menuTabs} />
        <FooterBottomMenu/>
      </Suspense>
    </footer>
  );
};

export default Footer;
