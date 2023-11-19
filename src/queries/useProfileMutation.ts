import getUserProfile from "@/api/user/getUserProfile";
import useUserStore from "@/store/useUserStore";
import { useMutation } from "@tanstack/react-query";

const useProfileMutation = () => {
  const { setProfile } = useUserStore();

  const mutation = useMutation({
    mutationFn: getUserProfile,
    onSuccess: async (data) => {
      setProfile(data.data);
      alert("프로필을 가져왔습니다");
    },
    onError: (error) => {
      console.log(error);
      alert("프로필을 가져오는데 실패했습니다.");
    },
  });

  return mutation;
};

export default useProfileMutation;
