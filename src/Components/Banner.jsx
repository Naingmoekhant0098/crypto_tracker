import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Galaxy } from "react-stars-particles";

const Banner = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const searchCoin = () => {
    if (searchText) {
      navigate(`/search?query=${searchText.toLocaleLowerCase()}`);
    }
  };
  return (
    <>
      <div className="px-6  mt-[160px] flex items-center  flex-col justify-center">
        <div className=" w-full md:max-w-2xl px-2 md:px-4 mx-px-0">
          {/* <p className=' text-center opacity-65'>we known trading is a hassle , so</p> */}
          <h3 className=" text-center bannerHeader text-[35px] md:text-[45px] font-bold tracking-wide">
            Discover The Future Of The Cryptocurrency
          </h3>
          <p className=" text-center text-md opacity-65 my-[30px] md:my-[40px] text-[16px] tracking-wide">
            Invest, trade, and grow your digital assets securely on our
            platform. Experience low fees, fast transactions, and total control
            over your finances.
          </p>
          <div className=" flex items-center gap-4">
            <input
              className=" w-full  px-6 py-4  rounded-md  bannerInput focus:border-0 focus:outline-none "
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Anything...."
            />
            <div
              className=" bg-purple-700 px-6 py-3 rounded-md shadow-md cursor-pointer text-[16px]"
              onClick={searchCoin}
            >
              Search
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
