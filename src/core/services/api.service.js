import axios from 'axios';

class ApiService {
  someApiServiceMethod = (params) => {
    return axios.get(`some_endpoint${params.valueA}/${params.valueB}`);
  };
}

export const apiService = new ApiService();