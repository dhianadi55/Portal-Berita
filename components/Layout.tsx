import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main style={{ padding: 24 }}>{children}</main>
    {/* Tambahkan Footer jika perlu */}
  </>
);

export default Layout;