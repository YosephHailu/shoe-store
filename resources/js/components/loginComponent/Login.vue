<template>
  <div class="text-center">
    <v-dialog :value="loginDialog" persistent width="500">
      <v-card color="purple" dark>
        <v-card-title class="text-center py-3 title purple darken-2">
          <v-list-item-title class="py-0 my-0">
            Login using your credentials</v-list-item-title
          >
        </v-card-title>

        <v-form
          ref="form"
          v-model="isLoginFormValid"
          lazy-validation
          class="px-3"
        >
          <v-alert
            color="white"
            v-model="isCredentialInvalid"
            dense
            dismissible
            text
            type="info"
          >
            Wrong email or password !!!
          </v-alert>
          <v-text-field
            v-model="credential.email"
            :rules="[
              (v) => !!v || 'E-mail is required',
              (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="credential.password"
            :rules="[(v) => !!v || 'Password is required']"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-form>

        <v-card-text class="text-center mt-3">
          <v-btn color="yellow" outlined light @click="$emit('dialog-change')">
            <v-icon left>cancel</v-icon>
            Cancel</v-btn
          >
          <v-btn color="yellow" light @click="login">
            <v-icon left>login</v-icon>
            Login</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LoginService from "./LoginService.ts";

// import { mapMutations } from "vuex";
export default {
  props: {
    loginDialog: Boolean,
  },
  data() {
    return {
      isLoginFormValid: false,
      isCredentialInvalid: false,
      credential: {},
    };
  },
  computed: {},
  methods: {
    login() {
      LoginService.login(this.credential)
        .then((response) => {
          this.clearLoginForm();
          this.$store.commit("updateUserAndToken", response.data);
          this.$emit("dialog-change");
          location.reload();
        })
        .catch((error) => {
          console.log(error.response.data);
          this.isCredentialInvalid = true;
        });
    },
    clearLoginForm() {
      this.credential = {};
      this.isCredentialInvalid = false;
    },
  },
  created() {
    // this.getMyCartProducts();
  },
};
</script>