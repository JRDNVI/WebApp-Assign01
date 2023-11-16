import React, {useState} from "react";
import { useQuery } from "react-query";
import { getPopularActors } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import PopularActor from "../components/popularActor";
import { Pagination } from "@mui/material";

const PopularActorPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const {data, isLoading, error, isError, refetch} = useQuery(
        ["Popular Actor", {page: currentPage}],
        getPopularActors)

    if (isLoading) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }

      const handleChange = (event, page) => {
        setCurrentPage(page)
        refetch({ page: currentPage})
      } 

    return (
        <>
            <PopularActor data={data.results} />
            <Pagination count={10} color="primary" onChange={handleChange} page={currentPage} />
        </>
    );
}

export default PopularActorPage;