import React from "react";
import { CiStar } from "react-icons/ci";
import { LiaChartLineSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Box = ({ data }) => {
  return (
    <Link to={`/cryptocurrencies/${data?.id}`}>
    <div className="  cardBg p-5 rounded-lg cursor-pointer border  border-[#141118] hover:border-slate-700">
      <div className=" flex items-center  justify-between flex-wrap">
        <div className=" flex items-center gap-4 ">
          <img src={data?.image} className=" w-10 h-10  rounded-full" alt="" />
          <div className="">
            <div className=" uppercase text-start text-[16px] md:text-lg  tracking-wider font-medium">
              {data?.symbol}
            </div>
            <div className=" tracking-wide text-start text-md opacity-60">
              {data?.name}
            </div>
          </div>
        </div>

        <div>
          {data?.price_change_percentage_24h > 0 ? (
            <div className=" flex items-center gap-1 md:gap-2">
              <LiaChartLineSolid className=" text-[20px] md:text-[25px] text-teal-700" />
              <div className=" text-teal-700 font-semibold">
                {" "}
                {data?.price_change_percentage_24h.toFixed(2)}
              </div>
            </div>
          ) : (
            <div className=" flex items-center gap-1 md:gap-2">
              <LiaChartLineSolid className=" text-[15px] md:text-[25px] text-red-700" />
              <div className=" text-red-500 font-semibold">
                {" "}
                {data?.price_change_percentage_24h.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </div>
    {
        data?.price_change_percentage_24h > 0 ?(
            <div className=" text-start mt-3  font-semibold text-[18px] tracking-wider text-teal-600" >${data?.current_price}</div>
        ) : (  <div className=" text-start mt-3  font-semibold text-[18px] tracking-wider text-red-600" >${data?.current_price}</div>)
    }
    <div className=" text-left mt-4">
    
    <div className=" opacity-60 text-[14px]">
            <span>Market Rank : </span>
            <span >{data?.market_cap_rank}</span>
        </div>
        <div className=" mt-[5px] opacity-60 text-[14px] flex gap-1">
            <div>Total Volume</div>
            <div> : </div>
            <div>{data?.total_volume}</div>
        </div>
        <div className=" mt-[5px]  opacity-60 text-[14px] flex gap-1">
            <span>Market Cap    </span>
            <div> : </div>
            <span>{data?.market_cap}</span>
        </div>
    </div>
    </div>

    </Link>
  );
};

export default Box;
