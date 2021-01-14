import axios from "axios";

const baseUrl = 'https://ctinfotech.com/CTCC/spiritualize/api/'

export function signIn(data){
  return axios.post(baseUrl+'login', data)
}

//registerhgjkfdhsjkghgdsfjkghjkdfshttps://ctinfotech.com/CTCC/spiritualize/api/getQuotes_testing
export function signUp(data){
  return axios.post(baseUrl+'test_signup/',data)
}

export function  postApi(){
    return axios.get(baseUrl +'getQuotes_testing')
}



