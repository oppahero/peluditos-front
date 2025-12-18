import { UserRoles } from '../enums/rol.enum';

export interface User {
  users_id: string;
  username: string;
  rol: UserRoles;
  email?: string;
  isActive?: boolean;
  createdAt?: Date;
}
