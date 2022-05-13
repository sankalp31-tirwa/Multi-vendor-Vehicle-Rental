import React, { useEffect, useState } from "react";
// import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";

const Maintourdetail = () => {
  const [gender, setGender] = useState(false);

  console.log(gender);
  return (
    <>
      <ToastContainer />

      <div className="w-full">
        <div className="mt-7 flex flex-col px-8 shadow-lg ">
          <h1 className="text-2xl font-bold text-blue-900">
            WE Are The Coders
          </h1>
          <p className="py-3 text-lg">BYE</p>
        </div>

        <section
          className="text-gray-600 body-font z-0 "
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("https://static.toiimg.com/photo/88689758/88689758.jpg?v=3")`,
          }}
        >
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"></div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
                Hello
              </h2>
              <div className="">
                <img
                  src="200.jpg"
                  alt="Picture of the author"
                  width="368px"
                  height="547px"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <>
        <div class="flex justify-center">
          <div>
            <div class="form-check">
              <input
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                value={true}
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={() => setGender(true)}
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="flexRadioDefault1"
              >
                enable
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                value={false}
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={() => setGender(false)}
                checked
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="flexRadioDefault2"
              >
                disable
              </label>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Maintourdetail;
