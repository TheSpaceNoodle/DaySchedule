import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { postActivity } from "../features/schedule/scheduleSlice";

function AddActivity({ showModal, setShowModal }) {
  const modalRef = useRef();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    activityName: "",
    description: "",
    date: "",
    time: "",
  });

  const { activityName, description, date, time } = formData;

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const scheduleData = {
      activityName,
      description,
      time,
      date,
    };

    dispatch(postActivity(scheduleData));
    setFormData("");
  };

  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={closeModal} ref={modalRef}>
          <div className="modal" showModal={showModal}>
            <div className="add-activity-container">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Activity name"
                  name="activityName"
                  onChange={onChange}
                  value={activityName}
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  onChange={onChange}
                  value={description}
                />
                <input
                  type="time"
                  placeholder="Time when happens"
                  name="time"
                  onChange={onChange}
                  value={time}
                />
                <input
                  type="date"
                  placeholder="Day when happens"
                  name="date"
                  onChange={onChange}
                  value={date}
                />

                <button type="submit">Add Activity</button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AddActivity;
