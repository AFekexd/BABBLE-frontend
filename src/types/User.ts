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
  name?: string;
  email?: string;
  username: string;
  phone?: string;
  role?: string;
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
