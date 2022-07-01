import { Student } from "./student";

export interface ClassInformations {
    name?: string,
    date?: {
        start?: any,
        end?: any,
    },
    students: Student[],
    teacher: {
        firstname: string,
        lastname: string,
        hasSigned?: boolean,
    }
}