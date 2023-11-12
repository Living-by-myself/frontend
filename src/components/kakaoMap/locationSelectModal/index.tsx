import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import KaKaoMapBase from "../kakaoMapBase";
import { useDebounce } from "@/hooks/useDebounce";
import { ModalCommonProps } from "@/types/types";
import BaseModal from "@/components/common/baseModal";
import Button from "@/components/common/button";

type Region = {
  address_name: string;
  code: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_4depth_name: string;
  region_type: "B" | "H";
  x: number;
  y: number;
};

export type Location = {
  lat: Region["y"];
  lng: Region["x"];
  code: Region["code"];
  address_name: Region["address_name"];
} | null;

interface MapProps extends ModalCommonProps {
  onConfirm: (props: Location) => void;
  initLocation?: {
    lat: number;
    lng: number;
  };
}

function truncateTo6DecimalPlaces(number: number) {
  return Math.floor(number * 1e6) / 1e6;
}

const LSMap = ({ initLocation, onClose, onConfirm }: MapProps) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const geoCoderRef = useRef<any>(null);
  const [isLoading, setLoading] = useState(true);
  // const [location, setLocation] = useState(
  //   initLocation || {
  //     lat: 37.506502,
  //     lng: 127.053617,
  //   },
  // );
  const [result, setResult] = useState<Region | null>(null);
  // const [isSearching, setSearching] = useState(false);

  const [latlng, setLatlng] = useState({
    lat: 37.506502,
    lng: 127.053617,
  });
  const debouncedLatlng = useDebounce(latlng, 200);

  useEffect(() => {
    console.log(debouncedLatlng);
    if (!geoCoderRef.current) return;
    // setSearching(true);
    geoCoderRef.current.coord2RegionCode(
      debouncedLatlng.lng,
      debouncedLatlng.lat,
      (result: Region[], status: "OK" | "ERROR" | "ZERO_RESULT") => {
        // setSearching(false);
        if (status === window.kakao.maps.services.Status.OK) {
          setResult(result[0]);
          console.log(result);
        }
      },
    );
  }, [debouncedLatlng]);

  useEffect(() => {
    window.kakao.maps.load(function () {
      if (!mapContainerRef.current) return;
      if (mapRef.current) return;
      const lat = initLocation?.lat || 37.506502;
      const lng = initLocation?.lng || 127.053617;
      const centerPosition = new window.kakao.maps.LatLng(lat, lng);
      const option = {
        center: centerPosition,
        level: 3,
        marker: {
          position: centerPosition,
        },
      };
      const kakaoMap = new window.kakao.maps.Map(
        mapContainerRef.current,
        option,
      );
      const geocoder = new window.kakao.maps.services.Geocoder();

      window.kakao.maps.event.addListener(
        kakaoMap,
        "center_changed",
        function () {
          const latlng = kakaoMap.getCenter();
          setLatlng({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          });
          // console.log("setLatlng", latlng.getLat(), latlng.getLng());
        },
      );

      mapRef.current = kakaoMap;
      geoCoderRef.current = geocoder;
      setLoading(false);
    });
  }, [location]);

  const handleConfirm = () => {
    if (!result) return;
    const { x, y, code, address_name } = result;
    // window.alert(`${x}, ${y}, ${code}, ${address_name}`);
    onConfirm({
      lat: y,
      lng: x,
      code,
      address_name,
    });
  };

  return (
    <BaseModal onClose={onClose}>
      <S.Container>
        <S.StMap ref={mapContainerRef}>
          {isLoading ? (
            <div>로딩중</div>
          ) : (
            <>
              <Marker map={mapRef.current} />
            </>
          )}
        </S.StMap>
        {/* <p>{isSearching ? "서칭중" : "서칭완료"}</p>
      <p>{result && result.address_name + result.code}</p> */}
        <S.ButtonContainer>
          <Button variants="outline" onClick={() => onClose()}>
            닫기
          </Button>
          <Button onClick={handleConfirm} full>
            선택
          </Button>
        </S.ButtonContainer>
      </S.Container>
    </BaseModal>
  );
};

const LocationSelectModal = ({
  initLocation,
  onConfirm,
  onClose,
}: MapProps) => {
  return (
    <KaKaoMapBase>
      <LSMap
        initLocation={initLocation}
        onClose={onClose}
        onConfirm={onConfirm}
      ></LSMap>
    </KaKaoMapBase>
  );
};

const Marker = ({ map }) => {
  const markerRef = useRef(null);
  useEffect(() => {
    console.log(map);
    if (!map) return;
    window.kakao.maps.load(function () {
      const markerPosition = map.getCenter();
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        clickable: true,
      });
      marker.setMap(map);
      markerRef.current = marker;
    });

    window.kakao.maps.event.addListener(map, "center_changed", function () {
      // 지도의 중심좌표를 얻어옵니다
      const latlng = map.getCenter();
      if (!markerRef.current) return;

      const newPosition = new window.kakao.maps.LatLng(
        truncateTo6DecimalPlaces(latlng.getLat()),
        truncateTo6DecimalPlaces(latlng.getLng()),
      );
      markerRef.current.setPosition(newPosition);
    });

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, [map]);

  return null;
};

export default LocationSelectModal;
