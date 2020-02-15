<template>
  <section>
    <h2>Open New Issue</h2>
    <div>
      <form>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" v-model="form.title" />
        </div>
        <div class="form-group">
          <label>Body</label>
          <textarea class="form-control" v-model="form.body" />
        </div>
        <a class="btn btn-primary" tabindex @click="submit">Submit</a>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    /* 入力内容を送信 */
    async submit() {
      const url = `/repos/masayukinii1011/nuxt-vuex-axios-issues/issues`;
      const requestBody = {
        title: this.form.title,
        body: this.form.body
      };
      await this.$axios.post(url, requestBody, {
        headers: {
          Authorization: `token ${process.env.ACCESS_TOKEN}`
        }
      });
      this.$router.push("/");
    }
  }
};
</script>
