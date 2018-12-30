<template lang="pug">
  v-app#inspire
    v-content
      v-container(fluid fill-height)
        v-layout(align-center justify-center)
          v-flex(xs12 sm8 md4)
            v-card
              v-card-text
                v-text-field(name="Name" label="Full Name")
                v-text-field(type="email" name="email" label="Email")
                v-text-field(type="password" name="password" label="Password")
              v-card-actions
                v-spacer
                v-btn(color="primary") Sign up
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