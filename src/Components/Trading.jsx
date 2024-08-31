import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "./Box";

const Trading = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    try {
      const fetchLatest = async () => {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1",
          {
            headers: {
              "Content-Type": "application/json",
              "x-cg-demo-api-key": "CG-pYC4qszFTNcQgaEK3kPzXBwE",
            },
            withCredentials: false,
          }
        );

        if (response.status === 200) {
          setData(response.data);
        }
      };

      fetchLatest();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return <div className=" mt-[200px] text-center">
    <h3 className=" text-[25px] font-semibold tracking-wide">Top Market Trending </h3>
 <div className=" grid  grid-cols-2  md:grid-cols-4 mt-10 gap-4 md:gap-8">
    {
      data?.map((res,id)=>{
       return <Box key={ id} data={res} />
      })
    }
  
    </div>
 
  </div>;
};

export default Trading;
