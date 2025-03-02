export type TAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemestername = 'Autumn' | 'Summar' | 'Fall';
export type TAcademicSemestercode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TAcademicSemestername;
  year: Date;
  code: TAcademicSemestercode;
  startMonth: TAcademicSemesterMonth;
  endMonth: TAcademicSemesterMonth;
};
