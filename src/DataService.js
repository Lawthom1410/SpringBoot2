import axios from 'axios';

class DataService{

    getAllRecords(){
        return axios.get(`http://localhost:8080/getAll`);
    }

    deleteRecord(id){
        return axios.delete(`http://localhost:8080/delete?id=${id}`);
    }

    saveRecord(body){
        return axios.post(`http://localhost:8080/savePerson`, body);
    }
}
export default new DataService();