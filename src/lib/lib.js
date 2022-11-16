import axios from 'axios';

const FLASK_IP = process.env.REACT_APP_BACKEND_IP;
const FLASK_PORT = process.env.REACT_APP_BACKEND_PORT;

export function getPhones(){
    return axios.get(`http://${FLASK_IP}:${FLASK_PORT}/phones`)
}

export function addPhone(param) {
    return axios({
        method: 'post',
        url : `http://${FLASK_IP}:${FLASK_PORT}/addPhone`,
        data: param
    })
}

export function deletePhone(param) {
    return axios({
        method: 'post',
        url : `http://${FLASK_IP}:${FLASK_PORT}/deletePhone`,
        data: param
    })
}

export function updatePhone(param) {
    return axios({
        method: 'post',
        url : `http://${FLASK_IP}:${FLASK_PORT}/updatePhone`,
        data: param
    })
}
