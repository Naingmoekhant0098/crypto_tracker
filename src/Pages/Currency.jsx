import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { LiaChartLineSolid } from "react-icons/lia";

import Chart from "../Components/Chart";
import  {ClipLoader} from "react-spinners"
const Currency = () => {
  const { id } = useParams();
  const [day, setDay] = useState(30);
  const [prices, setPrice] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [loading,setLoading] = useState(true)

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
              setLoading(false)
          }

          const fetchPrice = await axios.get(
            ` https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}&interval=daily`,
            {
              headers: {
                "Content-Type": "application/json",
                "x-cg-demo-api-key": "CG-pYC4qszFTNcQgaEK3kPzXBwE",
              },
              withCredentials: false,
            }
          );

          if (fetchPrice.status === 200) {
            setPrice(fetchPrice.data.prices);
          }
        };

        fetchLatest();
      } catch (error) {}
    }
  }, [id]);

  const changeDay = async () => {
     
    try {
      const fetchPrice = await axios.get(
        ` https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}&interval=daily`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-cg-demo-api-key": "CG-pYC4qszFTNcQgaEK3kPzXBwE",
          },
          withCredentials: false,
        }
      );

      if (fetchPrice.status === 200) {
        setPrice(fetchPrice.data.prices);
      }
    } catch (error) {}
  };

  if(loading){
    return <div className=" w-full  h-full  flex items-center justify-center">

<ClipLoader size={50} color="#ffff" />
    </div>
  }

  return (
    <div className=" detail">
      <div className=" flex mt-[120px]  md:mt-4   z-50 px-4 md:px-0  items-center gap-2 cursor-pointer text-white text-opacity-75">
        <div className=" hover:underline">
          <Link to={"/crypto_tracker"}>Cryptocurrencies</Link>
        </div>
        <span className=" font-semibold">
          <MdNavigateNext />
        </span>
        <div className=" hover:underline">{singleData?.name}</div>
      </div>

      <div className="  px-4 md:px-0 mt-6 flex flex-col md:flex-row  gap-2 w-full">
        <div className=" w-full md:w-[35%] ">
          <div className=" flex  items-center gap-3">
            <img src={singleData?.image?.small} alt="" />
            <div className=" uppercase text-[16px] md:text-lg  tracking-wider font-medium">
              {" "}
              {singleData?.name}
            </div>
            <div className=" uppercase tracking-wide text-start text-md text-white text-opacity-75">
              {" "}
              {singleData?.symbol} <span className=" capitalize">Price</span>
            </div>
            <span className=" text-white text-opacity-75"># {singleData?.market_cap_rank}</span>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" text-start mt-3  font-semibold text-[30px] tracking-wider ">
              ${singleData?.market_data?.current_price?.usd}
            </div>

            <div className=" ">
              {singleData?.price_change_percentage_24h > 0 ? (
                <div className=" flex items-center gap-1 md:gap-2">
                  <LiaChartLineSolid className=" text-[25px] text-teal-700" />
                  <div className=" text-teal-700 font-semibold">
                    {" "}
                    {singleData?.market_data?.price_change_percentage_24h?.toFixed(
                      2
                    )}
                  </div>
                </div>
              ) : (
                <div className=" flex items-center gap-1 md:gap-2">
                  <LiaChartLineSolid className=" text-[25px] text-red-700" />
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

          <div>
            <div className="">
              <div className=" w-full flex justify-between py-4">
                <span className=" tracking-wider text-white text-opacity-75">Market Cap</span>
                <span>${singleData?.market_data?.market_cap?.usd}</span>
              </div>
              <hr className="   bg-white text-white text-opacity-40" />
            </div>
            <div className="">
              <div className=" w-full flex justify-between py-4">
                <span className=" tracking-wider text-white text-opacity-75">
                  Fully Diluted Valuation{" "}
                </span>
                <span>
                  ${singleData?.market_data?.fully_diluted_valuation?.usd}
                </span>
              </div>
              <hr className="   bg-white text-white text-opacity-40" />
            </div>
            <div className="">
              <div className=" w-full flex justify-between py-4">
                <span className=" tracking-wider text-white text-opacity-75">
                  Criculation Supply
                </span>
                <span>${singleData?.market_data?.circulating_supply}</span>
              </div>
              <hr className="   bg-white text-white text-opacity-40" />
            </div>
            <div className="">
              <div className=" w-full flex justify-between py-4">
                <span className=" tracking-wider text-white text-opacity-75">Total Supply</span>
                <span>${singleData?.market_data?.total_supply}</span>
              </div>
              <hr className="   bg-white text-white text-opacity-40" />
            </div>
            <div className="">
              <div className=" w-full flex justify-between py-4">
                <span className=" tracking-wider text-white text-opacity-75">Max Supply</span>
                {singleData?.market_data?.max_supply ? (
                  <span>${singleData?.market_data?.max_supply}</span>
                ) : (
                  <span>0</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=" md:w-[65%]  ">
          <Chart price={prices} setDay={setDay} changeDay={changeDay} />
        </div>
      </div>

      <div className=" px-4 md:px-0 mt-8 pb-8">
        <h2 className=" text-[20px] tracking-wider">
          What is {singleData?.name} ?.
        </h2>
        <div
          className=" para mt-4 text-white text-opacity-75 tracking-wide"
          dangerouslySetInnerHTML={{ __html: singleData?.description?.en }}
        />
      </div>
    </div>
  );
};

export default Currency;
