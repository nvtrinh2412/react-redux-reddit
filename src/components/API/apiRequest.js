import { updateError, updateStart, updateSuccess } from "../redux/userSlice"

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const updateUser = async (user, dispatch) => {
  dispatch(updateStart())
  const isSuccess = true
  // get data from API by axios. But in this case only wait 2s
    if (isSuccess) {
      await timeout(2000)
      dispatch(updateSuccess(user))
      console.log("Done");
    }
    else{
      dispatch(updateError())
    }
}
