import axios from "axios";
const url = `https://erp-project-1.onrender.com`;

export const createClientNotification = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateNotificationRequest" });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${url}/api/v1/create/client/notification`,
      userData,
      config
    );
    dispatch({ type: "CreateNotificationSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateNotificationFail",
      payload: err.response.data.message,
    });
  }
};
