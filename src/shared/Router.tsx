import { Routes, Route } from "react-router-dom";
import PrivateRoute from "src/shared/PrivateRoute";
import HomePage from "src/pages/home";
import LoginPage from "src/pages/login";
import RegisterPage from "src/pages/Register";
import PasswordFindPage from "src/pages/password/find";
import PasswordResetPage from "src/pages/password/reset";
import UserProfileEditPage from "src/pages/userEdit";

import PurchasePage from "src/pages/purchase";
import PurchaseDetailPage from "src/pages/purchaseDetail";
import { RootLayout } from "src/components/ui/rootLayout";

// const router = [
//     {path: '/', element : <HomePage />},
//     {path: 'Login', element : <HomePage />}
// ]

// [{path : '/'
// element : <>},]

// const router = [
//     {
//         path: '/',
//         element: <RootLayout/>,
//         children: [
//             {index:true, element:<HomePage/>},
//             {path: 'login', element: <LoginPage/>},
//         ]
//     }
// ]

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

        <Route element={<PrivateRoute />}>
          {/* 마이페이지 등... 로그인 후 사용 가능한 페이지들... */}
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
