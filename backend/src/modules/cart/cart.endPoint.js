import { availableRoles } from "../../middleware/auth.js";

export const endpoint = {
  add: [availableRoles.user,availableRoles.admin],
  get: [availableRoles.user, availableRoles.admin, availableRoles.admin],
  delete: [availableRoles.user,availableRoles.admin],
  clear: [availableRoles.user,availableRoles.admin],
  getById: [availableRoles.user, availableRoles.admin,availableRoles.admin],
};
