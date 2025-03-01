export type TUser = {
  id: string;
  password: string;
  needsPasseordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
