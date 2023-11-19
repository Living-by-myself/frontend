import deleteLogout from "@/api/user/deleteLogout";
import useUserStore from "@/store/useUserStore";
import { removeRefreshTokenFromLocalStorage } from "@/utils/localStorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useLogoutMutation = () => {
  const { logout } = useUserStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: deleteLogout,
    onSuccess: () => {
      removeRefreshTokenFromLocalStorage();
      logout();
      queryClient.clear();
      navigate("/", { replace: true });
      alert("로그아웃 되었습니다.");
    },
    onError: (error) => {
      console.log(error);
      alert("로그아웃에 실패했습니다.");
    },
  });

  return mutation;
};

export default useLogoutMutation;
