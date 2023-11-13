import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../shared/PrivateRoute";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/login/index";
import RegisterPage from "../pages/Register/index";
import PasswordFindPage from "../pages/password/find/index";
import PasswordResetPage from "../pages/password/reset/index";
import UserProfileEditPage from "../pages/userEdit/index";

import RootLayout from "@/components/ui/rootLayout";
import GroupBuyPage from "../pages/groupBuy/index";
import GroupBuyDetailPage from "../pages/groupBuyDetail/index";
import GroupBuyWritePage from "@/pages/groupBuyPay";
import GroupBuyEditPage from "@/pages/groupBuyEdit";
import GroupBuyPayPage from "@/pages/groupBuyPay";

import CommunityPage from "@/pages/community";
import CommunityDetailPage from "@/pages/communityDetail";
import CommunityWritePage from "@/pages/communityWrite";
import MyPage from "@/pages/mypage";
import UserUpdateInfoPage from "@/pages/userUpdateInfo";
import PasswordUpdatePage from "@/pages/passwordUpdate";
import PointChargePage from "@/pages/pointCharge";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/password-find" element={<PasswordFindPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/user-edit" element={<UserProfileEditPage />} />

        <Route path="/group-buy" element={<GroupBuyPage />} />
        <Route path="/group-buy/:id" element={<GroupBuyDetailPage />} />
        <Route path="/group-buy/:id/edit" element={<GroupBuyEditPage />} />
        <Route path="/group-buy/:id/order" element={<GroupBuyPayPage />} />

        <Route path="/group-buy/write" element={<GroupBuyWritePage />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/community/write" element={<CommunityWritePage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/update" element={<UserUpdateInfoPage />} />
          <Route
            path="/mypage/password-update"
            element={<PasswordUpdatePage />}
          />
          <Route path="/mypage/point-charge" element={<PointChargePage />} />
          {/* 마이페이지 등... 로그인 후 사용 가능한 페이지들... */}
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
