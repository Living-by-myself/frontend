import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import KaKaoMapBase from "../kakaoMapBase";
import { useDebounce } from "@/hooks/useDebounce";
import { ModalCommonProps } from "@/types/types";
import BaseModal from "@/components/common/baseModal";
import Button from "@/components/common/button";
import { getCurrentPosition } from "@/utils/geoLocation";

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
  const geoCoderRef = useRef<GeoCoderType | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState<Region | null>(null);

  const [latlng, setLatlng] = useState({
    lat: 37.506502,
    lng: 127.053617,
  });
  const debouncedLatlng = useDebounce(latlng, 100);

  useEffect(() => {
    console.log(debouncedLatlng);
    if (!geoCoderRef.current) return;
    geoCoderRef.current.coord2RegionCode(
      debouncedLatlng.lng,
      debouncedLatlng.lat,
      (result: Region[], status: "OK" | "ERROR" | "ZERO_RESULT") => {
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
        },
      );

      mapRef.current = kakaoMap;
      geoCoderRef.current = geocoder;

      setLoading(false);
      getCurrentPosition().then((position) => {
        setLatlng(position);
        kakaoMap.setCenter(
          new window.kakao.maps.LatLng(position.lat, position.lng),
        );
      });
    });
  }, [initLocation]);

  const handleConfirm = () => {
    if (!result) return;
    const { x, y, code, address_name } = result;
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

export default LocationSelectModal;
