export interface FormData {
    name: string;
    email: string;
    password: string;
    mobile: string;
    city: string;
    workStatus: string;
}
export interface Errors {
    name?: string;
    email?: string;
    password?: string;
    mobile?: string;
    city?: string;
    workStatus?: string;
}