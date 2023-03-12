import React, { Suspense } from "react";

const Brand = React.lazy(() => import("./Brand"));
const Index = (props) => {
  return (
    <div style={{ textAlign: "center", padding: "30px 0" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Brand />
      </Suspense>
    </div>
  );
};

export default Index;
