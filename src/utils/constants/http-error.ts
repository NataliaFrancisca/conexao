export const GET_HTTP_ERROR_STATUS = (code: string) => {
  let statusCode: number;

  switch (code) {
    case 'auth/user-not-found':
      statusCode = 404;
      break;
    case 'auth/user-not-authenticated':
      statusCode = 401;
      break;
    case 'auth/wrong-password':
      statusCode = 401;
      break;
    case 'auth/invalid-email':
      statusCode = 400;
      break;
    case 'auth/user-disabled':
      statusCode = 403;
      break;
    case 'auth/too-many-requests':
      statusCode = 429;
      break;
    default:
      statusCode = 500;
      break;
  }

  return statusCode;
};
