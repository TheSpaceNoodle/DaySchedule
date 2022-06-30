import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActivityItem from "../components/ActivityItem";
import Spinner from "../components/Spinner";
import { reset } from "../features/auth/authSlice";
import { getSchedule } from "../features/schedule/scheduleSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { schedule, isError, isLoading, message } = useSelector(
    (state) => state.schedule
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getSchedule());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const activityItems = schedule.map((activity) => (
    <ActivityItem key={activity._id} activity={activity} />
  ));

  return (
    <>
      {
        <>
          <header>
            <h2>Welcome {user && user.name}!</h2>
            <h2>
              You have {schedule.length ? schedule.length : "no"} activities
              left!
            </h2>
          </header>
          <div className="activities">{activityItems}</div>
        </>
      }
    </>
  );
}

export default Dashboard;
