"use client";

import Lottie from "lottie-react";

const LottieWrapper = ({ data }: { data: any }) => {
  if (!data) return null;

  return <Lottie animationData={data} />;
};

export default LottieWrapper;
