import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../shared/PrivateRoute";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/login/index";
import RegisterPage from "@/pages/Register";
import PasswordFindPage from "../pages/password/find/index";
import PasswordResetPage from "../pages/password/reset/index";

import RootLayout from "@/components/ui/rootLayout";
import GroupBuyPage from "../pages/groupBuy/index";
import GroupBuyDetailPage from "../pages/groupBuyDetail/index";
import GroupBuyEditPage from "@/pages/groupBuyEdit";
import GroupBuyPayPage from "@/pages/groupBuyPay";
import GroupBuyWritePage from "@/pages/groupBuyWrite";

import CommunityPage from "@/pages/community";
import CommunityDetailPage from "@/pages/communityDetail";
import CommunityWritePage from "@/pages/communityWrite";
import MyPage from "@/pages/mypage";
import UserUpdateInfoPage from "@/pages/userUpdateInfo";
import PasswordUpdatePage from "@/pages/passwordUpdate";
import PointChargePage from "@/pages/pointCharge";
import MyPageBadge from "@/pages/mypageBadge";
import MyPagePost from "@/pages/myPagePost";
import MyPageGroupBuy from "@/pages/mypageGroupBuy";
import ChattingPage from "@/pages/chatting";
import ChattingDetailPage from "@/pages/chattingDetail";
import ChattingDetailEdit from "@/pages/chattingDetailEdit";
import SearchPage from "@/pages/search";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/password-find" element={<PasswordFindPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />

        <Route path="/group-buy" element={<GroupBuyPage />} />
        <Route path="/group-buy/:id" element={<GroupBuyDetailPage />} />
        <Route path="/group-buy/:id/edit" element={<GroupBuyEditPage />} />
        <Route path="/group-buy/:id/order" element={<GroupBuyPayPage />} />

        <Route path="/group-buy/write" element={<GroupBuyWritePage />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/community/write" element={<CommunityWritePage />} />

        <Route path="/chat" element={<ChattingPage />} />
        <Route path="/chat/:id" element={<ChattingDetailPage />} />
        <Route path="/chat/:id/edit" element={<ChattingDetailEdit />} />
        <Route path="/search" element={<SearchPage />} />

        <Route element={<PrivateRoute />}>
          {/* 마이페이지 등... 로그인 후 사용 가능한 페이지들... */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/badge" element={<MyPageBadge />} />
          <Route path="/mypage/post" element={<MyPagePost />} />
          <Route path="/mypage/group-buy" element={<MyPageGroupBuy />} />
          <Route path="/mypage/update" element={<UserUpdateInfoPage />} />
          <Route
            path="/mypage/password-update"
            element={<PasswordUpdatePage />}
          />
          <Route path="/mypage/point-charge" element={<PointChargePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
