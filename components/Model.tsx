import Spline from "@splinetool/react-spline/next";

export default function Model() {
  return (
    <div className="h-[100vh] w-full  relative overflow-hidden ">
      <div className=" absolute h-full md:w-[50vw] w-full top-14  flex justify-center items-center">
        <Spline
          // scene="https://prod.spline.design/9kx6bo9pQMT0408s/scene.splinecode"
          // scene="https://prod.spline.design/plT60dGIV1t0iFZi/scene.splinecode"
          //      scene="https://prod.spline.design/hwmHHfsbVRJhbWDQ/scene.splinecode"
          scene="https://prod.spline.design/kvgm4asz4Hn9QqpV/scene.splinecode"
          className=""
        />
      </div>
    </div>
  );
}
