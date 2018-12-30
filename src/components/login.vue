<template lang="pug">
  v-app#inspire
    v-content
      v-container(fluid fill-height)
        v-layout(align-center justify-center)
          v-flex(xs12 sm8 md4)
            v-card
              v-card-text
                v-text-field(prepend-icon="person" name="login" label="Login" type="text")
                v-text-field(id="password" prepend-icon="lock" name="password" label="Password" type="password")
              v-card-actions
                v-btn(flat color="primary" :to="{name: 'signup'}") Create an account
                v-spacer
                v-btn(color="primary") Log in
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),

  props: {
    source: String
  }
};
</script>