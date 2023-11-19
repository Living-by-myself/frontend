import { ReactNode } from "react";
import useScript from "react-script-hook/lib/use-script";

const KaKaoMapBase = ({ children }: { children: ReactNode }) => {
  const [loading, error] = useScript({
    src: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_API_KEY
    }&libraries=services&autoload=false`,
    checkForExisting: true,
  });

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>로딩중 에러</div>;

  return <>{children}</>;
};

export default KaKaoMapBase;
