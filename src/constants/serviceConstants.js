const API = {
  login: 'login',
  validateEmail: 'Users/ValidateEmail',
  forgotPassword: 'Login/ChangePassword',
  register: 'Register/PostRegister',
  completeRegisterationApi: 'Register/CompleteRegistration',
  getNotificationApi: (userId) => `Notifications/GetNotification?UserId=${userId}`

};

export default API;
