import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, Badge, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementLikes,
  incrementLikes,
  addLike,
  deleteLike,
} from "./roomSlice";
import moment from "moment";

const { Meta } = Card;

export default function CardComp(props) {
  const { room } = props;
  const { location, placeType, id, numberLikes, isLiked, images } = room;
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isLiked) {
      dispatch(decrementLikes(id));
      dispatch(deleteLike({ userId: user.id, roomId: id }));
    } else {
      dispatch(incrementLikes(id));
      dispatch(addLike({ userId: user.id, roomId: id }));
    }
  };

  return (
    <Badge.Ribbon
      style={{
        margin: 0,
        visibility: numberLikes >= 5 ? "visible" : "hidden",
      }}
      text='Top rated'
      color='pink'
    >
      <Card
        hoverable
        style={{
          borderRadius: 20,
          width: 310,
          marginLeft: 22,
          marginBottom: 20,
        }}
        cover={
          <img
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              objectFit: "cover",
              height: 200,
              margin: 0,
            }}
            alt='example'
            src={`${images[0]}`}
            onClick={() => {
              navigate(`/rooms/${id}`);
            }}
          />
        }
      >
        <h4 style={{ float: "right" }}>
          {numberLikes}
          <> </>
          <FontAwesomeIcon size='sm' icon={faHeart} />
        </h4>
        <Meta
          title={`${location?.country}, ${location?.city}`}
          description={placeType}
        />
        <h5>
          Available: {moment(location.availableFrom).format("MMM Do YY")} -{" "}
          {moment(location.availableTo).format("MMM Do YY")}
        </h5>
        <p>{placeType}</p>
        <h4>{location.price}$/night</h4>
        {user && (
          <div className='favorites'>
            <FontAwesomeIcon
              icon={faHeart}
              size={"lg"}
              style={{
                color: isLiked ? "#c7027c" : "lightgrey",
              }}
              onClick={() => handleClick()}
            />
          </div>
        )}
      </Card>
    </Badge.Ribbon>
  );
}
