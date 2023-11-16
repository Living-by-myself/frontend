import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import KaKaoMapBase from "../kakaoMapBase";
import { ModalCommonProps } from "@/types/types";
import BaseModal from "@/components/common/baseModal";
import Button from "@/components/common/button";
import { getCurrentPosition } from "@/utils/geoLocation";
import Icon from "@/components/common/icon";

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

export type Coord2RegionCodeType = (
  lng: number,
  lat: number,
  callback: (result: Region[], status: "OK" | "ERROR" | "ZERO_RESULT") => void,
) => void;

export type GeoCoderType = {
  coord2RegionCode: Coord2RegionCodeType;
};

interface MapProps extends ModalCommonProps {
  onConfirm: (props: Location) => void;
}

function truncateTo6DecimalPlaces(number: number) {
  return Math.floor(number * 1e6) / 1e6;
}

const LSMap = ({ onClose, onConfirm }: MapProps) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const geoCoderRef = useRef<GeoCoderType | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState<Region | null>(null);

  const [latlng, setLatlng] = useState({
    lat: 37.506502,
    lng: 127.053617,
  });

  const getUserLocation = useCallback(async () => {
    try {
      const position = await getCurrentPosition();
      setLatlng(position);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!geoCoderRef.current || !mapRef.current) return;
    const moveLatLon = new window.kakao.maps.LatLng(latlng.lat, latlng.lng);
    // @ts-expect-error: setCenter is function
    mapRef.current.setCenter(moveLatLon);
    geoCoderRef.current.coord2RegionCode(
      latlng.lng,
      latlng.lat,
      (result: Region[], status: "OK" | "ERROR" | "ZERO_RESULT") => {
        // setSearching(false);
        if (status === window.kakao.maps.services.Status.OK) {
          setResult(result[0]);
          console.log(result);
        }
      },
    );
  }, [latlng]);

  useEffect(() => {
    window.kakao.maps.load(function () {
      if (!mapContainerRef.current) return;
      if (mapRef.current) return;
      const lat = 37.506502;
      const lng = 127.053617;
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
      kakaoMap.setDraggable(false);
      kakaoMap.setZoomable(false);
      const geocoder = new window.kakao.maps.services.Geocoder();

      mapRef.current = kakaoMap;
      geoCoderRef.current = geocoder;
      getUserLocation();
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
          <S.LocationButton>
            <Button onClick={() => getUserLocation()} variants="icon">
              <Icon name="locate-fixed" />
            </Button>
          </S.LocationButton>
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

const UserLocationModal = ({ onConfirm, onClose }: MapProps) => {
  return (
    <KaKaoMapBase>
      <LSMap onClose={onClose} onConfirm={onConfirm}></LSMap>
    </KaKaoMapBase>
  );
};

// @ts-expect-error: Marker have map props
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
      // @ts-expect-error: setPosition is function
      markerRef.current.setPosition(newPosition);
    });

    return () => {
      if (markerRef.current) {
        // @ts-expect-error: setMap is function
        markerRef.current.setMap(null);
      }
    };
  }, [map]);

  return null;
};

export default UserLocationModal;
