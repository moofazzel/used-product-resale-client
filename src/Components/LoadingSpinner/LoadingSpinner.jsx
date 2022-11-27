import React from "react";
import Lottie from "lottie-react";
import Loading from "../../assets/lotties/Loading.json";

export default function LoadingSpinner() {
  return (
    <div key="avatar_animation" className="animation w-44 mx-auto">
      <Lottie animationData={Loading} loop={true} />
    </div>
  );
}
