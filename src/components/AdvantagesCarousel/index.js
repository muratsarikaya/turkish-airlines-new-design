import Carousel from "./Carousel";

const Index = (props) => {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "60px auto" }}>
      <h2
        style={{
          fontFamily: "Museo Sans,sans-serif",
          fontSize: "43px",
          textAlign: "center",
        }}
      >
        Blog
      </h2>
      <Carousel />
    </div>
  );
};

export default Index;
