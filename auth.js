// Login function for user authentication
function login(username, password) {
    // Kiểm tra username rỗng
    if (!username || username.trim() === "") {
        throw new Error("Username cannot be empty");
    }

    // Kiểm tra password rỗng
    if (!password || password.trim() === "") {
        throw new Error("Password cannot be empty");
    }

    // Tài khoản bị khóa
    if (username === "locked") {
        throw new Error("Account is locked");
    }

    // Mật khẩu chứa ký tự đặc biệt
    if (/[^a-zA-Z0-9]/.test(password)) {
        throw new Error("Password contains special characters");
    }

    // Kiểm tra tài khoản và mật khẩu
    if (username === "admin" && password === "9999") {
        return true;
    }

    // Sai mật khẩu hoặc tài khoản
    return false;
}

module.exports = { login };
