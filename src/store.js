import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {
  campuses: [],
  students: [],
}

const GOT_CAMPUSES = 'GOT_CAMPUSES';
const GOT_STUDENTS = 'GOT_STUDENTS';
const CREATED_STUDENT = 'CREATED_STUDENT';
const CREATED_CAMPUS = 'CREATED_CAMPUS';

const gotCampuses = (campuses) => {
  return {
    type: GOT_CAMPUSES,
    campuses,
  }
}

const createdCampus = (campus) => {
  return {
    type: CREATED_CAMPUS,
    campus,
  }
}

const createdStudent = (student) => {
  return {
    type: CREATED_STUDENT,
    student,
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
      .then(campuses => dispatch(gotCampuses(campuses)));
  }
}

export const createStudent = (student) => {
  return dispatch => {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => dispatch(createdStudent(student)));
  }
}

export const createCampus = (campus) => {
  return dispatch => {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(campus => dispatch(createdCampus(campus)));
  }
}

export const fetchStudents = () => {
  return dispatch => {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => dispatch(gotStudents(students)));
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GOT_CAMPUSES:
      return {...state, campuses: action.campuses}
    case GOT_STUDENTS:
      return {...state, students: action.students}
    case CREATED_CAMPUS:
      return {...state, campuses: [...state.campuses, action.campus]}
    case CREATED_STUDENT:
      return {...state, students: [...state.students, action.student]}
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
