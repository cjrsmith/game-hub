import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4ccbcea79657465ca08bf981e37d6d4c'
    }
})