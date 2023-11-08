import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../shared/PrivateRoute";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/login/index";
import RegisterPage from "../pages/Register/index";
import PasswordFindPage from "../pages/password/find/index";
import PasswordResetPage from "../pages/password/reset/index";
import UserProfileEditPage from "../pages/userEdit/index";

import PurchasePage from "../pages/purchase/index";
import PurchaseDetailPage from "../pages/purchaseDetail/index";
import RootLayout from "@/components/ui/rootLayout";

import CommunityPage from "@/pages/community";
import CommunityDetailPage from "@/pages/communityDetail";
import CommunityWritePage from "@/pages/communityWrite";
import MyPage from "@/pages/mypage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password-find" element={<PasswordFindPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/user-edit" element={<UserProfileEditPage />} />

        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/purchase/:id" element={<PurchaseDetailPage />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/community/write" element={<CommunityWritePage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/mypage" element={<MyPage />} />
          {/* 마이페이지 등... 로그인 후 사용 가능한 페이지들... */}
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
