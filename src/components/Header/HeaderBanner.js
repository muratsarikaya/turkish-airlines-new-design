import styled from "styled-components";

const HeaderBannerDiv = styled.div`
  background: url(https://cdn.turkishairlines.com/m/6761929144cccc1e/original/anasayfa-1400.webp);
  height: 420px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  background-size: cover;
`;

const Title1 = styled.h1`
  textalign: left;
  width: 1200px;
  margin: auto;
  color: #fff;
`;

const HeaderBanner = (props) => {
  return (
    <HeaderBannerDiv>
      <Title1>
        <span>MERHABA</span>
        <br></br>
        <span>Nereyi keşfetmek istersiniz?</span>
      </Title1>
    </HeaderBannerDiv>
  );
};

export default HeaderBanner;
