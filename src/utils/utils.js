import React from "react";

export const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const useWindowSize = () => {
  const isWindowClient = typeof window === "object";
  const [windowSize, setWindowSize] = React.useState(
    isWindowClient ? window.innerWidth : undefined
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    if (isWindowClient) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isWindowClient, setWindowSize]);
  return windowSize;
}
