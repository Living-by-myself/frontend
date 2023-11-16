import { useState } from "react";
import * as S from "./styles";
import { useNavigate, useSearchParams } from "react-router-dom";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = (props: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [searchPrams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (!searchTerm) return;
    if (searchPrams.get("s") === searchTerm) return;
    navigate(`/search/?s=${searchTerm}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.InputSearch
      type="text"
      placeholder="물건을 검색해보세요"
      value={searchTerm}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
};

export default SearchBar;
