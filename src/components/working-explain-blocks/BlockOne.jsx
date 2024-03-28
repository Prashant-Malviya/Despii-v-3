import React from "react";
import { setLanguage, selectLanguage } from "../../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";
import sideImg from "../../utils/FrameOne.png";
import line1 from "./vertical line img/vertical1.png";
const BlockOne = () => {
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <div className="bg-neutral-900 font-manrope ">
      {selectedLanguage === "English" && (
        <>
          <div className="mx-auto max-w-7xl py-24 lg:pt-20 lg:pb-5 sm:px-6 sm:py-32 lg:px-10 font-manrope hidden lg:block lg:-mt-80">
            {/* side line image  */}

            <div className="z-50 relative right-0 -bottom-[30rem]">
              <img src={line1} alt="one block" />
            </div>

            <div className="relative isolate overflow-hidden bg-neutral-500/10 px-6 pt-12 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto  lg:text-left lg:pt-14 ">
                <div className=" p-3 rounded-xl border-2 border-white w-12 mt-5">
                  <FaArrowRight className="text-2xl text-white" />
                </div>
                <div className="lg:mt-20">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
                    Create your driver
                    <br />
                    profile
                  </h2>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Create your driver profile to showcase your skills,
                  experience, and commitment to providing safe and reliable
                  rides, connecting you with passengers who value efficiency
                </p>
                <div className="mt-20 p-3 text-white mb-5 font-bold ">01/03</div>
              </div>
              <div className="relative mt-16 h-[35.31rem] lg:mt-8 lg:mb-7">
                <img
                  className="absolute top-0  left-0 w-auto max-w-none rounded-t-[45px] rounded-b-[45px] bg-white/5 ring-1 ring-white/10 overflow-hidden"
                  src={sideImg}
                  alt="App screenshot"
                  // style={{ clipPath: "inset(30px 0 0 0)" }}
                />
              </div>
            </div>
          </div>
          <div className="bg-neutral-900  flex flex-col lg:hidden  mt-14 font-manrope">
            <div className=" text-orange-500 font-bold">01/03</div>
            <h2 className="text-3xl  tracking-tight text-white sm:text-4xl font-manrope  mt-6">
              Create your driver profile
            </h2>
            <img
              className=" w-auto max-w-none rounded-[45px] bg-white/5 ring-1 ring-white/10 mt-6"
              src={sideImg}
              alt="App screenshot"
              // style={{ clipPath: "inset(30px 0 0 0)" }}
            />
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Create your driver profile to showcase your skills, experience,
              and commitment to providing safe and reliable rides, connecting
              you with passengers who value efficiency
            </p>
          </div>
        </>
      )}
      {selectedLanguage === "French" && (
        <>
          <div className="mx-auto max-w-7xl py-24 lg:pt-20 lg:pb-5 sm:px-6 sm:py-32 lg:px-10 font-manrope hidden lg:block lg:-mt-80">
            {/* side line image  */}

            <div className="z-50 relative right-0 -bottom-[30rem]">
              <img src={line1} alt="one block" />
            </div>

            <div className="relative isolate overflow-hidden bg-neutral-500/10 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto  lg:text-left lg:pt-10">
                <div className=" p-3 rounded-xl border-2 border-white w-12 mt-5">
                  <FaArrowRight className="text-2xl text-white" />
                </div>
                <div className="lg:mt-20">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
                    Rends-toi service en rendant service
                  </h2>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Créez ton profil de conducteur pour mettre en valeur tes
                  compétences, ton expérience et ton engagement à fournir des
                  trajets sûrs et fiables, pendant qu'on te met en contact avec
                  des passagers qui valorisent le respect et l'efficacité.
                </p>
                <div className="mt-20 p-3 text-white mb-5 font-bold">01/03</div>
              </div>
              <div className="relative mt-16 h-[35.31rem] lg:mt-8 lg:mb-7 ">
                <img
                  className="absolute left-0 lg:top-0 w-auto max-w-none rounded-t-[45px] lg:rounded-b-[45px] bg-white/5 ring-1 ring-white/10 overflow-hidden"
                  src={sideImg}
                  alt="App screenshot"
                  // style={{ clipPath: "inset(30px 0 0 0)" }}
                />
              </div>
            </div>
          </div>
          <div className="bg-neutral-900  flex flex-col lg:hidden mt-14 font-manrope">
            <div className=" text-orange-500 font-bold">01/03</div>
            <h2 className="text-3xl  tracking-tight text-white sm:text-4xl font-manrope  mt-6">
              Rends-toi service en rendant service
            </h2>
            <img
              className=" w-auto max-w-none rounded-[45px] bg-white/5 ring-1 ring-white/10 mt-6"
              src={sideImg}
              alt="App screenshot"
              // style={{ clipPath: "inset(30px 0 0 0)" }}
            />
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Créez ton profil de conducteur pour mettre en valeur tes
              compétences, ton expérience et ton engagement à fournir des
              trajets sûrs et fiables, pendant qu'on te met en contact avec des
              passagers qui valorisent le respect et l'efficacité.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default BlockOne;
