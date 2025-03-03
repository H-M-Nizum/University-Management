import {
  TAcademicSemestercode,
  TAcademicSemesterMonth,
  TAcademicSemestername,
} from './academicSemester.interface';

export const AcademicSemesterMonths: TAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterNames: TAcademicSemestername[] = [
  'Autumn',
  'Summar',
  'Fall',
];
export const AcademicSemesterCodes: TAcademicSemestercode[] = [
  '01',
  '02',
  '03',
];

// Mapping for valid name-code combinations
export const validNameCodeMap: Record<string, string> = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};
