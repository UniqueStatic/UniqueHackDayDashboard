export const patterns = {
    username: /^[a-zA-Z0-9_-]{4,16}$/,
    password: /^(?:\d|[a-zA-Z]|[!@#$%^&*-_]){6,16}$/,
    email: /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    phone: /^1[3-9]\d{9}$/,
    code: /^[0-9]{6}$/,
};
