import React, { Suspense } from "react";

import useTabStyles from "./TabStyles";
import fligth from "../../assets/img/search/icons/book-a-flight-tab-icon-gray.svg";
import otel from "../../assets/img/search/icons/flight-and-hotel-tab-icon.svg";
import onlineCheckin from "../../assets/img/search/icons/checkin-manage-booking-tab-icon.svg";
import flightStatus from "../../assets/img/search/icons/flight-status-tab-icon.svg";
import FlightContent from "./FlightContent";
import OtelContent from "./OtelContent";
import CheckinContent from "./CheckinContent";

const Tab = React.lazy(() => import("./Tab"));

const tabsConfig = [
  {
    label: "Uçak",
    content: <FlightContent />,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" viewBox="0 0 24 13">
            <path fill="#647280" fill-rule="nonzero" d="M21.4 3.68c1.19 0 2.6.802 2.6 1.582 0 .76-1.41 1.38-2.6 1.38H5.6c-1.57.039-3.017-1.038-3.7-2.452L0 0h1l5.09 3.68H21.4zM8.37 12.382l1.52-3.3a2.19 2.19 0 0 1 2-1.25h3.48l-6 4.55h-1z"/>
          </svg>,
  },
  {
    label: "Uçak + Otel",
    content: <OtelContent />,
    icon: <svg id="_1" data-name="1" xmlns="http://www.w3.org/2000/svg" width="18.38" height="18.38" viewBox="0 0 18.38 18.38">
            <g id="Hand_Baggage">
              <rect id="Rectangle" width="4" height="9" transform="translate(5.19 9.19)" fill="#647280"/>
              <path id="Path" d="M0,16.5V21.19H3.829V12A4.4,4.4,0,0,0,0,16.5Z" transform="translate(0 -2.81)" fill="#647280"/>
              <path id="Path-2" data-name="Path" d="M19.55,3.007H14.918a4.4,4.4,0,0,0-2.011.476V1.4H17v1.6h1.383V1.4h0a1.367,1.367,0,0,0-.395-.985A1.411,1.411,0,0,0,17,0h-4.1a1.411,1.411,0,0,0-.988.418,1.367,1.367,0,0,0-.395.985h0V4.577a4.577,4.577,0,0,0-.848,1.6H6.391A1.419,1.419,0,0,0,5.4,6.6a1.376,1.376,0,0,0-.4.985H5v1.6H6.391V7.567h4.047v1.62H11.83v9.187a1.991,1.991,0,0,0,.314,0h1.849a5.676,5.676,0,0,0,3.97-1.686,5.5,5.5,0,0,0,1.587-3.96Z" transform="translate(-1.171)" fill="#647280"/>
            </g>
          </svg>,
  },
  {
    label: "Checkin / Bilet Yönetimi",
    content: <CheckinContent />,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
    <path id="fill-2" d="M7.6,14.13l7.488-1.65s1.048-.332,1.475.273a1.754,1.754,0,0,1,.11,1.381l-2.533,6.432H3.953L.02,4.418s-.177-.952.526-1.19a1.047,1.047,0,0,1,1.334.68L7.043,13.943A.433.433,0,0,0,7.6,14.13Zm-1.55-9.2A1.717,1.717,0,0,1,4.3,3.241a1.746,1.746,0,0,1,3.49,0,1.718,1.718,0,0,1-1.745,1.69ZM6.24,8.286a1.667,1.667,0,0,1,.813-2.257A1.778,1.778,0,0,1,9.32,6.7l1.41,2.718s.338.55.805.45l2.234-.392s1.017-.216,1.454.387a.59.59,0,0,1-.121.921l-6.36,1.4a.531.531,0,0,1-.567-.316L6.24,8.286ZM18.125,15.06l3.645,4.882s.463.6.075.883a1.207,1.207,0,0,1-1.523-.236L17.15,17.6l.975-2.544ZM14.224,0h2.111a2,2,0,0,1,2,2V4.855a2,2,0,0,1-2,2H14.224a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2Z" transform="translate(0)" fill="#647280" fill-rule="evenodd"/>
  </svg>,
  },
  {
    label: "Uçuş Durumu",
    content: "Content Panel 4",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16.19" viewBox="0 0 24 16.19">
            <g id="Flight_Status" transform="translate(0 -3.81)">
              <path id="Path_108" data-name="Path 108" d="M21.4,7.49H6.09L1,3.81H0L1.9,8a4,4,0,0,0,3.7,2.26H21.4c1.19,0,2.6-.62,2.6-1.38h0C24,8.1,22.59,7.49,21.4,7.49Z" fill="#647280"/>
              <path id="Path_109" data-name="Path 109" d="M8.37,16h1l6-4.55H11.89a2.19,2.19,0,0,0-2,1.25Z" fill="#647280"/>
              <path id="Path_110" data-name="Path 110" d="M18,12a4,4,0,1,0,4,4A4,4,0,0,0,18,12Zm0,7a3,3,0,1,1,3-3A3,3,0,0,1,18,19Z" fill="#647280"/>
              <path id="Path_111" data-name="Path 111" d="M18,16.09H16V17h3V14H18Z" fill="#647280"/>
            </g>
          </svg>,
  },
];

const SearchTabs = (props) => {
  const classes = useTabStyles();
  return (
    <div className={classes.searchTabWrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        <Tab tabsConfig={tabsConfig} />
      </Suspense>
    </div>
  );
};

SearchTabs.propTypes = {};
SearchTabs.defaultProps = {};

export default SearchTabs;
