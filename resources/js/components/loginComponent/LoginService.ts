import http from "../../plugins/axios";

class LoginService {

    login(credential) {
        return http.post("/login/", credential);
    }
    
    logout() {
        return http.post("/logout");
    }
}

export default new LoginService();
