import axios from 'axios'
import { baseUrl} from '../config/api'

export const getCourses=()=>{
  return axios.get(baseUrl).then(res=>res.data)
}

export const getCoursesByParams = (param)=>{
    return axios.get(baseUrl+`?term=${param}&page=1&size=30&sortOrder=1`).then(res=>res.data)
}