const USER_ROLES = [
  {admin: 'Administrator'},
  {editor: 'Content Editor'},
  {viewer: 'General Viewer'},
];

export function userRolesAdapter(roleGiven) {
  for (const role of USER_ROLES) {
    const key = Object.keys(role)[0]; // Get the first key (e.g., 'ADMIN')
    if (key === roleGiven) {
      return role[key]; // Return the value (e.g., 'admin')
    }
  }
  return "No role given";
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
