"use client";
import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Table from "../components/Table";
import { UserContext } from "../contexts/UserContext";
import * as FakerUtil from "../utils/FakerUtil";
import { TableData } from "@/types/AppTypes";
import { login, logout } from "@/services/UserService.service";
import { saveToLocalStorage, loadFromLocalStorage } from "@/utils/StorageUtils";
import { Provider } from "react-redux";
import store from "../store";

interface TableColumn {
  id: string;
  index: number;
}

const initialColumnOrder: TableColumn[] = [
  { id: "id", index: 0 },
  { id: "firstName", index: 1 },
  { id: "lastName", index: 2 },
  { id: "email", index: 3 },
  { id: "city", index: 4 },
  { id: "registeredDate", index: 5 },
  { id: "fullName", index: 6 },
  { id: "dsr", index: 7 },
];

export default function Home() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [columnOrder, setColumnOrder] =
    useState<TableColumn[]>(initialColumnOrder);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Load fake data when the component mounts
    const fakeData = FakerUtil.generateFakeData(500);
    const updatedData = fakeData.map((user) => ({ ...user }));
    setTableData(updatedData);
  }, []);

  const handleLogin = async () => {
    // Simulate user login
    const success = await login("user1", "password1");
    if (success) {
      setCurrentUser("user1");
      setLoggedIn(true);
    }
  };

  const handleLogout = async () => {
    // Simulate user logout
    await logout();
    setCurrentUser(null);
    setLoggedIn(false);
  };

  const handleSave = () => {
    // Persist table column orders to localStorage
    saveToLocalStorage("columnOrder", columnOrder);
  };

  const handleLoad = () => {
    // Load table column orders from localStorage
    const savedColumnOrder = loadFromLocalStorage("columnOrder");
    if (savedColumnOrder) {
      setColumnOrder(savedColumnOrder);
    }
  };

  const handleColumnReorder = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedColumnOrder = Array.from(columnOrder);
    const [removedColumn] = reorderedColumnOrder.splice(result.source.index, 1);
    reorderedColumnOrder.splice(result.destination.index, 0, removedColumn);

    setColumnOrder(reorderedColumnOrder);
  };

  return (
    <Provider store={store}>
      <DragDropContext onDragEnd={handleColumnReorder}>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">Puzzle Table</h1>
                {loggedIn ? (
                  <div className="flex space-x-4">
                    <button
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-500"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-500"
                      onClick={handleLoad}
                    >
                      Load
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-400 border border-red-500"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-500"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                )}
              </div>
              {/* Your component JSX */}
              <Table
                className="dashboard-table"
                columns={columnOrder.map((column) => ({
                  key: column.id,
                  label: column.id.toUpperCase(),
                }))}
                data={tableData}
                // onColumnOrderChange={setColumnOrder}
              />
            </div>
          </div>
        </main>
      </DragDropContext>
    </Provider>
  );
}
