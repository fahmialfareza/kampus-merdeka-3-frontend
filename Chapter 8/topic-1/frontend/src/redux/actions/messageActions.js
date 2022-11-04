import axios from "axios";
import { toast } from "react-toastify";

import {
  createNewMessageReducer,
  getAllMessagesReducer,
} from "../reducers/messageReducer";

// This function will be called in component and it will triggered the reducers
export const getAllMessages = () => async (dispatch) => {
  try {
    // Imagize we get data from API (the variable is users)
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/api/v1/messages`
    );

    // Dispatch to reducers
    dispatch(getAllMessagesReducer(data.data));
  } catch (error) {
    throw error;
  }
};

export const createNewMessage = (message) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ message });

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_API}/api/v1/messages`,
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    };

    const { data } = await axios(config);

    const { messages } = getState().message;

    if (messages.some((item) => item.id === data.data.id)) {
      return;
    }

    toast.success("New message!");

    dispatch(createNewMessageReducer(data.data));
  } catch (error) {
    throw error;
  }
};

export const addMessageFromWebsocket =
  (messageData) => async (dispatch, getState) => {
    try {
      const { message } = getState();
      const { messages } = message;

      if (messages.some((item) => item.id === messageData.id)) {
        return;
      }

      toast.success("New message!");

      dispatch(createNewMessageReducer(messageData));
    } catch (error) {
      throw error;
    }
  };