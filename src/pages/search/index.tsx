import { MobileContainer } from "@/styles/commonStyles";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const TABS = ["all", "groupBuy", "community"] as const;

type Tab = (typeof TABS)[number];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "all";
  const [activeTab, setActiveTab] = useState<Tab>(
    TABS.includes(tab as Tab) ? (tab as Tab) : "all",
  );

  const handleClickTab = (tab: Tab) => {
    setActiveTab(tab);
    setSearchParams((prev) => {
      const searchParams = new URLSearchParams(prev);
      searchParams.set("tab", tab);
      return searchParams;
    });
  };

  return (
    <MobileContainer>
      SearchPage
      <p> "{searchParams.get("s")}"에 대한 검색 결과</p>
      <ul style={{ display: "flex" }}>
        <li
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => handleClickTab("all")}
        >
          전체
        </li>
        <li
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => handleClickTab("groupBuy")}
        >
          공동구매
        </li>
        <li
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            cursor: "pointer",
          }}
          onClick={() => handleClickTab("community")}
        >
          커뮤니티
        </li>
      </ul>
      {activeTab === "all" && <div>전체</div>}
      {activeTab === "groupBuy" && <div>공동구매</div>}
      {activeTab === "community" && <div>커뮤니티</div>}
    </MobileContainer>
  );
};

export default SearchPage;
