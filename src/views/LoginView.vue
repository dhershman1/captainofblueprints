<template>
  <div class="wrap">
    <basic-card size="sm">
      <template #content>
        <div class="login">
          <section class="login__switch">
            <p
              :class="formStatus.signin"
              @click="isSignup = false"
            >
              Sign In
            </p>
            <p
              :class="formStatus.signup"
              @click="isSignup = true"
            >
              Sign Up
            </p>
          </section>
          <section class="login__form">
            <form>
              <input
                v-model="username"
                type="text"
                class="login__input"
                name="login"
                placeholder="Email"
              >
              <transition
                name="slide-fade"
                mode="out-in"
              >
                <input
                  v-show="isSignup"
                  v-model="displayName"
                  type="text"
                  class="login__input"
                  name="displayName"
                  placeholder="Display Name"
                >
              </transition>
              <input
                v-model="password"
                type="text"
                class="login__input"
                name="login"
                placeholder="Password"
              >
              <input
                type="submit"
                class="login__btn"
                :value="submitTxt"
              >
            </form>
          </section>
          <section class="login__foot">
            <a
              class="underlineHover"
              href="#"
            >Forgot Password?</a>
          </section>
        </div>
      </template>
    </basic-card>
  </div>
</template>

<script>
import BasicCard from '@/components/BasicCard'

export default {
  components: {
    BasicCard
  },

  data () {
    return {
      isSignup: false,
      username: '',
      password: '',
      displayName: '',
      remember: false
    }
  },

  computed: {
    submitTxt () {
      if (this.isSignup) {
        return 'Register'
      }

      return 'Log In'
    },

    formStatus () {
      if (this.isSignup) {
        return {
          signup: 'active',
          signin: 'inactive'
        }
      }

      return {
        signup: 'inactive',
        signin: 'active'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100%;
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
