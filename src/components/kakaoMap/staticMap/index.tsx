import { useEffect, useRef } from "react";
import * as S from "./styles";
import KaKaoMapBase from "../kakaoMapBase";

interface StaticMapProps {
  lat: number;
  lng: number;
}

const SMap = ({ lat, lng }: StaticMapProps) => {
  const mapContainerRef = useRef(null);
  const staticMapRef = useRef(null);
  useEffect(() => {
    window.kakao.maps.load(function () {
      const centerPosition = new window.kakao.maps.LatLng(lat, lng);
      const option = {
        center: centerPosition,
        level: 3,
        marker: {
          position: centerPosition,
        },
      };
      staticMapRef.current = new window.kakao.maps.StaticMap(
        mapContainerRef.current,
        option,
      );
    });
  }, [lat, lng]);

  return (
    <S.StMapContainer>
      <S.StMap ref={mapContainerRef}></S.StMap>
    </S.StMapContainer>
  );
};

const StaticMap = ({ lat, lng }: StaticMapProps) => {
  return (
    <KaKaoMapBase>
      <SMap lat={lat} lng={lng} />
    </KaKaoMapBase>
  );
};

export default StaticMap;
