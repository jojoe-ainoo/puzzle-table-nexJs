import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import TableComponent from "@/components/table/table/Table.component";
import * as FakerUtil from "@/utils/MockDataUtils";
import { TableData } from "@/types/AppTypes";
import { login, logout } from "@/services/UserService.service";
import { Provider } from "react-redux";
import store from "@/store";
import LoginComponent from "@/components/auth/login/Login.component";
import LogoutComponent from "@/components/auth/logout/Logout.component";
import { UserContext } from "@/contexts/UserContext";
import SaveDataComponent from "@/components/table/table/SaveData.component";
import LoadDataComponent from "@/components/table/table/LoadData.component";
import * as TableTypes from "@/components/table/table/types";

const initialColumnOrder: TableTypes.TableColumn[] = [
  { id: "id", index: 0 },
  { id: "firstName", index: 1 },
  { id: "lastName", index: 2 },
  { id: "email", index: 3 },
  { id: "city", index: 4 },
  { id: "registeredAt", index: 5 },
  { id: "fullName", index: 6 },
  { id: "dsr", index: 7 },
];

export default function Home() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [columnOrder, setColumnOrder] =
    useState<TableTypes.TableColumn[]>(initialColumnOrder);
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

  const handleLoad = (loadedColumnOrder: TableTypes.TableColumn[]) => {
    setColumnOrder(loadedColumnOrder);
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
                    <SaveDataComponent columnOrder={columnOrder} />
                    <LoadDataComponent onLoad={handleLoad} />
                    <LogoutComponent onLogout={handleLogout} />
                  </div>
                ) : (
                  <LoginComponent onLogin={handleLogin} />
                )}
              </div>
              {}
              <TableComponent
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
