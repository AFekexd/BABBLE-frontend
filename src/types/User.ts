//interface User

export interface CustomTheme {
    primary?: string;
    secondary?: string;
    accent?: string;
    error?: string;
    info?: string;
    success?: string;
    warning?: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
    role: string;
    online?: boolean;
    lastLogin?: Date;
}

export interface PublicUser {
    id: number;
    name: string;
    email: string;
    role: string;
    lastLogin?: Date;
    online?: boolean;
    customTheme?: CustomTheme;
}
