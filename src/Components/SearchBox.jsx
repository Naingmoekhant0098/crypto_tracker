import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaChartLineSolid } from "react-icons/lia";
const SearchBox = ({ id }) => {
  const [singleData, setSingleData] = useState(null);
  useEffect(() => {
    if (id) {
      try {
        const fetchLatest = async () => {
          const response = await axios.get(
            ` https://api.coingecko.com/api/v3/coins/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                "x-cg-demo-api-key": "CG-pYC4qszFTNcQgaEK3kPzXBwE",
              },
              withCredentials: false,
            }
          );

          if (response.status === 200) {
            setSingleData(response.data);
          }
        };

        fetchLatest();
      } catch (error) {}
    }
  }, [id]);
 
   
  return  (<Link to={`/cryptocurrencies/${singleData?.id}`}>
  <div className="  cardBg p-5 rounded-lg cursor-pointer border  border-[#141118] hover:border-slate-700">
    <div className=" flex items-center  justify-between flex-wrap">
      <div className=" flex items-center gap-4 ">
        <img src={singleData?.image?.small} className=" w-10 h-10  rounded-full" alt="" />
        <div className="">
          <div className=" uppercase text-start text-[16px] md:text-lg  tracking-wider font-medium">
            {singleData?.symbol}
          </div>
          <div className=" tracking-wide text-start text-md opacity-60">
            {singleData?.name}
          </div>
        </div>
      </div>

      <div>
        { singleData?.market_data?.price_change_percentage_24h > 0 ? (
          <div className=" flex items-center gap-1 md:gap-2">
            <LiaChartLineSolid className=" text-[20px] md:text-[25px] text-teal-700" />
            <div className=" text-teal-700 font-semibold">
              {" "}
              {singleData?.market_data?.price_change_percentage_24h?.toFixed(
                      2
                    )}
            </div>
          </div>
        ) : (
          <div className=" flex items-center gap-1 md:gap-2">
            <LiaChartLineSolid className=" text-[15px] md:text-[25px] text-red-700" />
            <div className=" text-red-500 font-semibold">
              {" "}
              {singleData?.market_data?.price_change_percentage_24h?.toFixed(
                      2
                    )}
            </div>
          </div>
        )}
      </div>
    </div>
  {
      singleData?.market_data?.price_change_percentage_24h > 0 ?(
          <div className=" text-start mt-3  font-semibold text-[18px] tracking-wider text-teal-600" >  ${singleData?.market_data?.current_price?.usd}</div>
      ) : (  <div className=" text-start mt-3  font-semibold text-[18px] tracking-wider text-red-600" >  ${singleData?.market_data?.current_price?.usd}</div>)
  }
  <div className=" text-left mt-4">
  
  <div className=" opacity-60 text-[14px]">
          <span>Market Rank : </span>
          <span >{singleData?.market_cap_rank}</span>
      </div>
      <div className=" mt-[5px] opacity-60 text-[14px] flex gap-1">
          <div>Total Volume</div>
          <div> : </div>
          <div>{singleData?.market_data?.total_volume?.usd}</div>
      </div>
      <div className=" mt-[5px]  opacity-60 text-[14px] flex gap-1">
          <span>Market Cap    </span>
          <div> : </div>
          <span>{singleData?.market_data?.market_cap?.usd}</span>
      </div>
  </div>
  </div>

  </Link>
  )
};

export default SearchBox;
