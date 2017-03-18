import { Action } from "@ngrx/store";
import { Course } from "../models/course";

export const actionTypes = {
  LOAD_COURSES: 'LOAD_COURSES',
  LOAD_COURSES_SUCCESS: 'LOAD_COURSES_SUCCESS',
  LOAD_COURSES_FAIL: 'LOAD_COURSES_FAIL',
  ADD_COURSE: 'ADD_COURSE',
  ADD_COURSE_SUCCESS: 'ADD_COURSE_SUCCESS',
  ADD_COURSE_FAIL: 'ADD_COURSE_FAIL',
  REMOVE_COURSE: 'REMOVE_COURSE',
  REMOVE_COURSE_SUCCESS: 'REMOVE_COURSE_SUCCESS',
  REMOVE_COURSE_FAIL: 'REMOVE_COURSE_FAIL',
  SEARCH_COURSE: 'SEARCH_COURSE'
};

export class LoadCoursesAction implements Action {
  type = actionTypes.LOAD_COURSES;

  constructor () { }
}

export class LoadCoursesSuccessAction implements Action {
  type = actionTypes.LOAD_COURSES_SUCCESS;

  constructor (public payload: Course[]) { }
}

export class LoadCoursesFailAction implements Action {
  type = actionTypes.LOAD_COURSES_FAIL;

  constructor (public payload: any) { }
}

export class AddCourseAction implements Action {
  type = actionTypes.ADD_COURSE;

  constructor (public payload: Course) { }
}

export class RemoveCourseAction implements Action {
  type = actionTypes.REMOVE_COURSE;

  constructor (public payload: string) { }
}


export class SearchCourseAction implements Action {
  type = actionTypes.SEARCH_COURSE;

  constructor (public payload: string) { }
}