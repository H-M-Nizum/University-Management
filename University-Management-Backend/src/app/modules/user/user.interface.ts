export type TUser = {
  id: string;
  password: string | undefined;
  needsPasseordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
