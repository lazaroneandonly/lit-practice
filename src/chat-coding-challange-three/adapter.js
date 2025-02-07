const USER_ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
};

export function userRolesAdapter(roleGiven) {
  let rolereturned;

  switch (roleGiven) {
    case USER_ROLES.ADMIN:
      rolereturned = 'Administrator';
      break;

    case USER_ROLES.EDITOR:
      rolereturned = 'Content Editor';
      break;

    case USER_ROLES.VIEWER:
      rolereturned = 'General Viewer';
      break;

    default:
      rolereturned = 'No role given';
  }

  return rolereturned;
}

export function otherUserInfoAdapter(userInfoInput) {
  // Destructuring the object
  const {
    first_name: firstName = 'undefined',
    last_name: lastName = 'undefined',
    email: emailValue = 'undefined',
    category: userCategory = 'undefined',
  } = userInfoInput;

  return {
    userFullName: `${firstName} ${lastName}`,
    userEmail: emailValue,
    userRole: userCategory,
    userRegistrationDate:
      userInfoInput?.details?.registration_date || 'undefined',
    userLastLogin: userInfoInput?.details?.last_login || 'undefined',
  };
}
