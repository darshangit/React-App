import * as type from './actiontypes'

export function createCourse(course) {
    return { type: type.CREATE_COURSE, course };
}