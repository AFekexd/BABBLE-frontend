import { createContext, useContext, useState } from "react";

type AuthContextType = {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    // Add other authentication related states here
};

// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
    token: null,
    setToken: () => {},
    // Add other authentication related states here
});

export const AuthProvider: React.FC = ({ children }: any) => {
    const [token, setToken] = useState<string | null>(null);
    // Add other authentication related states here

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useAuth = () => useContext(AuthContext);
