import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteActivity } from "../features/schedule/scheduleSlice";

function ActivityItem({ activity, date }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="activity-wrapper">
        <div className="activity-title">
          <h3>{activity.activityName}</h3>
          {!activity.time && !date ? null : (
            <>
              <div>
                {activity.time ? <span>{activity.time}</span> : null}
                {date ? <span>{date}</span> : null}
              </div>
            </>
          )}
        </div>
        <p className="activity-description">
          {activity.description ? activity.description : null}
        </p>
        <div className="activity-bottom">
          <span>
            Created {new Date(activity.createdAt).toLocaleString("en-GB")}
          </span>
          <div className="icons">
            <FaTrashAlt onClick={dispatch(deleteActivity(activity._id))} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityItem;
