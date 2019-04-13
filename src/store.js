import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {
  campuses: [],
  students: [],
}

const GOT_CAMPUSES = 'GOT_CAMPUSES';
const GOT_STUDENTS = 'GOT_STUDENTS';

const gotCampuses = (campuses) => {
  return {
    type: GOT_CAMPUSES,
    campuses,
  }
}

const gotStudents = (students) => {
  return {
    type: GOT_STUDENTS,
    students,
  }
}

export const fetchCampuses = () => {
  return dispatch => {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(gotCampuses(campuses)))
      .catch(e => console.log(e));
  }
}

export const fetchStudents = () => {
  return dispatch => {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => dispatch(gotStudents(students)))
      .catch(e => console.log(e));
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GOT_CAMPUSES:
      return {...state, campuses: action.campuses}
    case GOT_STUDENTS:
      return {...state, students: action.students}
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
