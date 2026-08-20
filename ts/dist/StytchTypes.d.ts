export interface User {
    created_at?: string;
    emails?: any[];
    name?: Record<string, any>;
    status?: string;
    trusted_metadata?: Record<string, any>;
    user_id?: string;
}
export interface UserLoadMatch {
    id: string;
}
export interface UserListMatch {
    created_at?: string;
    emails?: any[];
    name?: Record<string, any>;
    status?: string;
    trusted_metadata?: Record<string, any>;
    user_id?: string;
}
export interface UserCreateData {
    created_at?: string;
    emails?: any[];
    name?: Record<string, any>;
    status?: string;
    trusted_metadata?: Record<string, any>;
    user_id?: string;
}
export interface UserUpdateData {
    id: string;
    created_at?: string;
    emails?: any[];
    name?: Record<string, any>;
    status?: string;
    trusted_metadata?: Record<string, any>;
    user_id?: string;
}
export interface UserRemoveMatch {
    id: string;
}
