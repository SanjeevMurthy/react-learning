import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses){
  return {
    type:types.LOAD_COURSES_SUCCESS,courses:courses
  };
}

export function createCourseSuccess(course){
  return {
    type:types.CREATE_COURSE_SUCCESS,course:course
  };
}

export function updateCourseSuccess(course){
  return {
    type:types.UPDATE_COURSE_SUCCESS,course:course
  };
}

export function loadCourses(){
  debugger;
  return function(dispatch){
    dispatch(beginAjaxCall());
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error =>{
      throw(error);
    });
  };
}

export function saveCourse(course){
  debugger;
  return (dispatch,getState)=>{
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(savedCourse =>{
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
          dispatch(createCourseSuccess(savedCourse));
    }).catch(error =>{
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
