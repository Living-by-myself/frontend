import postLogin from "@/api/user/postLogin";
import useUserStore from "@/store/useUserStore";
import { saveRefreshTokenToLocalStorage } from "@/utils/localStorage";
import { useMutation } from "@tanstack/react-query";

const useLoginMutation = () => {
  const { setToken } = useUserStore();

  const mutation = useMutation({
    mutationFn: postLogin,
    onSuccess: async (data) => {
      const { atk, rtk } = data.data;
      setToken(atk);
      saveRefreshTokenToLocalStorage(rtk);
      alert("로그인 되었습니다.");
    },
    onError: (error) => {
      console.log(error);
      alert("로그인에 실패했습니다.");
    },
  });

  return mutation;
};

export default useLoginMutation;
