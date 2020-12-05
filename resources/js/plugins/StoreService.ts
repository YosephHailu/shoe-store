class StoreService {
    getCredential() {
        const credential = localStorage.credential;

        if (!credential) {
            return null;
        }

        return JSON.parse(credential);
    }

    addCredentialToLocalStorage(credential) {
        localStorage.setItem("credential", JSON.stringify(credential));
    }

    removeCredentialFromLocalStorage() {
        localStorage.removeItem("credential");
    }
}

export default new StoreService();
