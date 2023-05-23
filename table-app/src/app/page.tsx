"use client";
import React from "react";
import RootLayout from "../layouts/RootLayout";
import TablePage from "@/pages/table";
import { Provider } from "react-redux";
import store from "@/store"; //

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootLayout>
        <TablePage />
      </RootLayout>
    </Provider>
  );
};

export default App;
