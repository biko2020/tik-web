<template>
  <div class="containe">
    <div class="d-flex justify-content-start">
      <div class="col-md-6 mt-5">
        <div class="card">
          <div class="card-header">Account</div>
          <div class="card-body">
            <h3>Bien Venu , {{ user.email }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      if (!this.user) this.$router.push("/");
    });
  },
};
</script>

<style>
</style>