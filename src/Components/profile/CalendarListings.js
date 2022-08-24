import { Badge, Calendar } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListingByUserLogged, reset } from "../profile/listingSlice";
import moment from "moment";
import Spinner from "../Spinner";

export default function CalendarListings() {
  const onPanelChange = (value, mode) => {};
  const { listings } = useSelector((state) => state.myListings);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListingByUserLogged(user.id));
    dispatch(reset());
  }, [dispatch]);

  const getListData = (value) => {
    const listData = [];
    listings.map((item) => {
      const startDate = item.location.availableFrom;
      const endDate = item.location.availableTo;
      if (
        moment(value).isBetween(startDate, endDate) ||
        moment(value).isSame(startDate) ||
        moment(value).isSame(endDate)
      ) {
        listData.push({
          type: "blue",
          content: `${item.location.city}, ${item.location.country}`,
        });
      }
    });
    return listData;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className='events'>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <Calendar
        style={{ width: "100%" }}
        dateCellRender={dateCellRender}
        onPanelChange={onPanelChange}
      />
    </div>
  );
}
