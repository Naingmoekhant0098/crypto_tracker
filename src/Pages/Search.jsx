import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "../Components/Box";
import SearchBox from "../Components/SearchBox";

const Search = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const query = new URLSearchParams(location.search);
  let navigate = useNavigate()
  useEffect(() => {
   
    setSearchTerm(query.get("query"));
  }, [location.search]);
  useEffect(() => {
    if (searchTerm) {
      try {
        const fetchLatest = async () => {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/search?query=${searchTerm}`,
            {
              headers: {
                "Content-Type": "application/json",
                "x-cg-demo-api-key": "CG-pYC4qszFTNcQgaEK3kPzXBwE",
              },
              withCredentials: false,
            }
          );

          if (response.status === 200) {
            setSearchResult(response.data.coins);

            // setSingleData(response.data);
            // setLoading(false)
          }
        };

        fetchLatest();
      } catch (error) {}
    }
  }, [location.search]);

 

 
  const searchCoin = () => {
    
    if (searchTerm) {
      query.set('query',searchTerm)
      navigate(`/search?query=${searchTerm.toLocaleLowerCase()}`);
    }
  };
  // const url = '';
  return (
    <div className="mt-[120px]  md:mt-4 ">
      <h3 className="text-center text-[30px] font-semibold">Search Result</h3>
      <div className=" flex mt-6 items-center gap-4 w-[400px] md:max-w-xl  mx-auto">
        <input
          className=" w-full  px-6 py-4  rounded-md  bannerInput focus:border-0 focus:outline-none "
           defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Anything...."
        />
        <div
          className=" bg-purple-700 px-6 py-3 rounded-md shadow-md cursor-pointer text-[16px]"
          onClick={searchCoin}
        >
          Search
        </div>
      </div>

      <h3 className=" mt-6 text-center text-[20px] font-medium tracking-wide">
      Search Results For "{searchTerm}"
      </h3>
      <div className=" grid  grid-cols-2  md:grid-cols-4 mt-10 gap-4 md:gap-8">
        { 
          searchResult?.map((res, id) => {
            
          return <SearchBox id={res?.id} />
            // return <Box key={ id} data={res} />
          })}
      </div>
    </div>
  );
};

export default Search;
