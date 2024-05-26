//main AdminColumns but inside theres User, category, and report
export const AdminColumns = {
    User: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "role", label: "Role" },
        { key: "lastLogin", label: "Last login" },
        { key: "online", label: "Online" },
    ],
    Category: [
        { key: "name", label: "Name" },
        { key: "description", label: "Description" },
        { key: "posts", label: "Posts" },
    ],
    Report: [
        { key: "reporter", label: "Reporter" },
        { key: "reported", label: "Reported" },
        { key: "reason", label: "Reason" },
        { key: "status", label: "Status" },
    ],
};