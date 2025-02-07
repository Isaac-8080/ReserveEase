const users = []
function login(credentials) {
    const user = users.find((user) => user.username === credentials.username && user.password === credentials.password)
     return user ? true : false
}

function register(formData) {
    const user = {
        username: formData.username,
        email: formData.email,
        password: formData.password
    }
    users.push(user);
    return true;
}

export {login, register}
