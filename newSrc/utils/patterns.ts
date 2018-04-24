export const patterns = {
  username: /^[a-zA-Z0-9_-]{4,16}$/,
  password: /^(?:\d|[a-zA-Z]|[!@#$%^&*-_]){6,16}$/,
  email: /^[a-z0-9A-Z]+([._\\-]*[a-z0-9A-Z])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/,
  phone: /^1(3|4|5|7|8)[0-9]\d{8}$/,
  code: /^[0-9]{6}$/,
};
