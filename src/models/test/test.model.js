import instance from "../../helper/axios.helper";
import axios from "axios";

export const getData = async () => {
  try{
    const url = "/users";
    const response = await instance().get(url);
    return response;
  } catch(err){
    console.log("Error", err);
  }
}

export const createNewUser = async () => {
  try{
    const url = "/posts";
    const response = await instance().post(url);
    console.log("response", response);
    return response;
  } catch(err){
    console.log("Error", err);
  }
}


