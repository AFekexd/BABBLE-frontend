import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { MdFlag, MdGroup } from "react-icons/md";
import AdminInfoCard from "../components/Admin/AdminInfoCard";
import AdminTable from "../components/Admin/AdminTable";
import { AdminColumns } from "../types/AdminColumns";
import { useGetUsersQuery } from "../features/user/userApiSlice";
const Admin = () => {
  const [activeTab, setActiveTab] = useState("users");

  const [rows, setRows] = useState([]);

  const screenSize = window.innerWidth;

  const { data, error, isLoading, refetch } = useGetUsersQuery({} as any);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return (
          <AdminTable type="users" rows={rows} columns={AdminColumns.User} />
        );
      case "categories":
        return (
          <AdminTable
            type="categories"
            rows={rows}
            columns={AdminColumns.Category}
          />
        );
      case "profanity":
        return <AdminTable type="profanity" rows={rows} columns={columns} />;
      case "reports":
        return (
          <AdminTable
            type="reports"
            rows={rows}
            columns={AdminColumns.Report}
          />
        );
      default:
        return <AdminTable type="users" rows={rows} columns={columns} />;
    }
  };

  return (
    <>
      <div className="flex w-full h-[90dvh] justify-evenly  gap-5 mt-3 p-4 ">
        <div className="flex flex-col gap-3 sm:w-2/12 h-full justify-between min-w-fit">
          <Card className="h-fit p-3">
            {/* 
          List of admin actions as buttons: 
            - Manage users
            - Manage posts
            - Manage comments
            - Manage categories
            - Profinity filter
            - Manage reports
          */}

            <div className="flex flex-col gap-3 ">
              <Button
                color={"primary"}
                variant={activeTab === "users" ? "solid" : "flat"}
                onClick={() => setActiveTab("users")}
                startContent={<MdGroup />}
                isIconOnly={screenSize < 768}
              >
                {screenSize > 768 && "Manage users"}
              </Button>
              <Divider />
              <Button
                color={"success"}
                variant={activeTab === "categories" ? "solid" : "flat"}
                onClick={() => setActiveTab("categories")}
                startContent={<MdFlag />}
                isIconOnly={screenSize < 768}
              >
                {screenSize > 768 && "Manage categories"}
              </Button>
              <Button
                color={"success"}
                variant={activeTab === "profanity" ? "solid" : "flat"}
                onClick={() => setActiveTab("profanity")}
                startContent={<MdFlag />}
                isIconOnly={screenSize < 768}
              >
                {screenSize > 768 && "Profinity filter"}
              </Button>
              <Divider />
              <Button
                color={"danger"}
                variant={activeTab === "reports" ? "solid" : "flat"}
                onClick={() => setActiveTab("reports")}
                startContent={<MdFlag />}
                isIconOnly={screenSize < 768}
              >
                {screenSize > 768 && "Manage reports"}
              </Button>
            </div>
          </Card>
          <Card className="hidden sm:flex h-fit p-3">
            <AdminInfoCard />
          </Card>
          <Card className="sm:hidden h-fit p-3">
            <div className="flex flex-row gap-1  text-success">
              <MdGroup />

              <p>0/500</p>
            </div>
            <div className="flex flex-row gap-1 text-danger">
              <MdFlag />
              <p>0</p>
            </div>
          </Card>
        </div>

        <Card className="sm:w-10/12 h-full p-3">
          <CardHeader
            className="flex justify-between items-center"
            title="Admin"
          >
            <h1 className="text-2xl font-bold">
              {activeTab === "users"
                ? "Manage users"
                : activeTab === "categories"
                ? "Manage categories"
                : activeTab === "profanity"
                ? "Profinity filter"
                : activeTab === "reports"
                ? "Manage reports"
                : "Manage users"}
            </h1>
          </CardHeader>
          <CardBody>{activeTab && renderContent()}</CardBody>
        </Card>
      </div>
    </>
  );
};

export default Admin;
