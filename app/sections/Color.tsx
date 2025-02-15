import Spline from "@splinetool/react-spline";
import React from "react";

export default function Color() {
  return (
    <section id="models" className="min-h-screen w-full ">
      <div className="w-full h-full md:grid grid-cols-2 ">
        <div className="h-screen w-full overflow-hidden relative bg-primary z-20">
          <div className="h-[120vh]">
            <Spline scene="https://prod.spline.design/cVtwg880JECXupT1/scene.splinecode" />
          </div>
        </div>
        <div className="bg-primary z-20 flex flex-col justify-center md:gap-10 gap-5 md:px-20 px-5">
          <h1 className="md:text-7xl text-4xl font-bold text-shadow">
            Varaity
            <br />
            of colors
          </h1>
          <p className=" font-extralight md:text-base text-sm">
            Express yourself with a range of vibrant colors. Whether you prefer
            a sleek, classic look or a bold, standout style, our earbuds come in
            shades that match your personality.
          </p>
        </div>
      </div>
    </section>
  );
}
