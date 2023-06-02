import axiosInstance from '@/services/axios';

export function getUsers() {
    return axiosInstance.get('/users');
}

export function getUserById(id:string) {
    return axiosInstance.get(`/users/${id}`);
}