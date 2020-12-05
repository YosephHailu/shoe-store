import http from "../../plugins/axios";

class RegisterService {

    register(user) {
        return http.post("/register/", user);
    }
}

export default new RegisterService();
