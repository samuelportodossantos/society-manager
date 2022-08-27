<template>
  <div class="window">
    <div class="sub-window">
      <h1>Gerenciamento inteligente do seu society</h1>
    </div>
    <div class="sub-window form">
      <div class="form-window">
        <div class="form-header">
          <img src="@/assets/images/logo.svg" alt="" />
          <span class="version-label">v1.0</span>
        </div>
        <div class="form-content">
          <form>
            <FieldComponent label="Username" icon="user"></FieldComponent>
            <FieldComponent type="password" label="Password" icon="password"></FieldComponent>
            <FieldComponent type="button" label="Login" :hidelabel="true"></FieldComponent>
          </form>

          <a href="#">I can't login</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FieldComponent from "@/components/FieldComponent.vue";
export default {
  name: "LoginView",
  components: {
    FieldComponent,
  },
};
</script>

<style scoped>
.window {
  background-image: url("@/assets/images/background-3.png"),
    url("@/assets/images/background-1.svg");
  background-position-x: 16%, left;
  background-position-y: bottom, center;
  background-repeat: no-repeat, no-repeat;
  background-size: 450px, cover;
  background-blend-mode: luminosity, normal;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-end;
}

.sub-window {
  border: 5px solud cyan;
  width: 50vw;
  height: 100%;
  padding: 80px 50px;
}

h1 {
  font-family: "Julius Sans One Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 52px;
  color: white;
}

.form {
  background-image: url("@/assets/images/background-2.jpeg");
  background-position: center center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}

.form-window {
  width: 300px;
  height: 360px;
  background-color: #f0f0f0;
  border-bottom: 25px solid #d9d9d9;
}

.form-header {
  background-color: #320742;
  padding: 10px 20px;
  position: relative;
}
.form-content {
  padding: 20px;
}
.version-label {
  color: white;
  font-size: 10px;
  position: absolute;
  right: 20px;
  bottom: 7px;
}

@media (min-width: 1470px) {
  .window {
    max-width: 1440px;
    max-height: 880px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  .sub-window:last-of-type {
    border-radius: 0 5px 5px 0;
  }
}

@media (max-width: 1000px) {
  .form {
    background-image: none;
  }
  .sub-window {
    width: 100vw;
  }
  .sub-window:last-of-type {
    position: absolute;
    width: 60vw;
  }
}

@media (max-width: 600px) {
  .sub-window:last-of-type {
    width: 100vw;
  }
  h1 {
    font-size: 38px;
  }
}
</style>