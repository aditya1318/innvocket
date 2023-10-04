import React from "react"
import Carousel from "../animation/carousel"
import Logo1 from "../../images/logo1.png"
import Logo2 from "../../images/logo2.png"

const logos = [
  // Add your logo URLs or images here
  // Example: 'logo1.png', 'logo2.png', ...
  Logo1,
]

function Companys() {
  return (
    <div className="  w-screen h-auto  bg-image-section2  ">
      <div className=" w-full h-full backdrop-blur-3xl">
        <span class="flex w-screen justify-center text-4xl  text-white pt-10  capitalize">
          Our clients
        </span>
        <div class="grid grid-cols-1 gap-6 bg-transparent p-10 md:grid-cols-3">
          <div class="rounded-xl border flex items-center justify-center border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
            <div class="p-10">
              <img
                class="rounded-md"
                src={Logo1}
                alt="Card Image 1"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
          <div class="rounded-xl  flex items-center  justify-center border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
            <div class="p-10">
              <img
                class="rounded-md"
                src={Logo2}
                alt="Card Image 2"
                style={{ width: "200px", height: "200px" }}
              />
              <div class="mt-3 flex flex-col"></div>
            </div>
          </div>
          <div class="rounded-xl border flex items-center justify-center border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
            <div class="p-10">
              <img
                class="rounded-md"
                src={Logo1}
                alt="Card Image 1"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companys