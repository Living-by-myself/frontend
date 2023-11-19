import { AxiosPromise } from "axios";
import axiosInstance from "../config";
import { UserProfile } from "@/types/types";

const getUserProfile = (): AxiosPromise<UserProfile> =>
  axiosInstance.get("/profile");

export default getUserProfile;
