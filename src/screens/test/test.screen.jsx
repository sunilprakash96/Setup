import React, { useEffect } from "react";
import { getData, createNewUser } from "../../models/test/test.model";
import { GET_USER } from "../../utils/types.utils";
import { useDispatch } from 'react-redux';
import TestComponent from "../../components/test/test.component";

export function TestScreen() {

  useEffect(() => {
    handleGetData();
  }, [])

  const dispatch = useDispatch()

  const handleGetData = async () => {
    try {
      const response = await getData();
      dispatch({
        type: GET_USER,
        payload: response.data
      })
    } catch (err) {
      console.log("Error", err);
    }
  }

  const handleCreateNewUser = async () => {
    try {
      const response = await createNewUser();
      await getData();
    } catch (err) {
      console.log("Error", err);
    }
  }

  return (
    <div>
      <TestComponent />
      <div  style={{ cursor: "pointer" }}onClick={handleCreateNewUser}>Create User</div>
    </div>
  )
}
