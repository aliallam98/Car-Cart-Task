import { availableRoles } from "../../middleware/auth.js";

export const endpoint = {
  add: [availableRoles.admin],
  update: [availableRoles.admin],
  delete: [availableRoles.admin],
  get: [availableRoles.user, availableRoles.admin],
};
