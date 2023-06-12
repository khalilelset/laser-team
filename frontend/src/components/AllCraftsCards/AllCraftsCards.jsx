import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCrafts } from "../../redux/actions/AllCraftsActions";
import CraftCard from "../Card/CraftCard";

const AllCraftsCards = () => {
  const dispatch = useDispatch();
  const craftsData = useSelector((state) => state.crafts);
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    dispatch(getCrafts());
  }, [dispatch]);

  useEffect(() => {
    setCrafts(craftsData.crafts ?? []);
  }, [craftsData.crafts]);
  return (
    <div className="conatiner">
      <div className="row m-3 mt-3">
        <h1 className="text-center">All Crafts</h1>
        {crafts.map((craft) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
            <CraftCard craft={craft} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCraftsCards;
