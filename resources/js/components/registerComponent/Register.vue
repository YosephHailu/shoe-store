<template>
  <div class="text-center">
    <v-dialog :value="registerDialog" persistent width="500">
      <v-card color="purple" dark>
        <v-card-title class="text-center py-3 title purple darken-2">
          <v-list-item-title class="py-0 my-0"> Register</v-list-item-title>
        </v-card-title>

        <v-form
          ref="form"
          v-model="isRegisterFormValid"
          lazy-validation
          class="px-3"
        >
          <v-text-field
            v-model="user.name"
            :rules="[(v) => !!v || 'Name is required']"
            label="Full name"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.email"
            :rules="[
              (v) => !!v || 'E-mail is required',
              (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]"
            label="Email"
            required
          ></v-text-field>

          <v-row>
            <v-text-field
              type="password"
              class="col-6"
              v-model="user.password"
              :rules="[(v) => !!v || 'Password is required']"
              label="Password"
              required
            ></v-text-field>

            <v-text-field
              type="password"
              class="col-6"
              v-model="user.password_confirmation"
              :rules="[
                (v) => !!v || 'Password confirmation is required',
                (v) =>
                  user.password_confirmation === this.user.password ||
                  'Password does not match',
              ]"
              label="confirm"
              required
            ></v-text-field>
          </v-row>
        </v-form>

        <v-card-text class="text-center mt-3">
          <v-btn color="yellow" outlined light @click="$emit('register-dialog-change')">
            <v-icon left>cancel</v-icon>
            Cancel</v-btn
          >
          <v-btn color="yellow" light @click="register">
            <v-icon left>register</v-icon>
            Register</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import RegisterService from "./RegisterService.ts";
export default {
  props: {
    registerDialog: Boolean,
  },
  data() {
    return {
      isRegisterFormValid: false,
      isUserFormInvalid: false,
      user: {},
    };
  },
  computed: {},
  methods: {
    register() {
      RegisterService.register(this.user)
        .then((response) => {
          this.clearRegisterForm();
          this.$emit("register-dialog-change");
        })
        .catch((error) => {
          console.log(error.response.data);
          this.isUserFormInvalid = true;
        });
    },
    clearRegisterForm() {
      this.user = {};
      this.isUserFormInvalid = false;
    },
  },
  created() {
    console.log("crea");
    // this.getMyCartProducts();
  },
};
</script>