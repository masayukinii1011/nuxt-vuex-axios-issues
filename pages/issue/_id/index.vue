<template>
  <section>
    <h2 class="mb-3">#{{issue.number}} {{issue.title}}</h2>
    <div class="text-right mb-5">
      <a :href="issue.html_url">Open Github</a>
    </div>
    <div class="mb-5">{{issue.body}}</div>
    <router-link class="btn btn-outline-primary" to="/">back</router-link>
  </section>
</template>

<script>
export default {
  computed: {
    //idが一致するissueを返す
    issue() {
      for (let issue of this.$store.state.issues) {
        if (this.$route.params.id == issue.number) {
          return issue;
        }
      }
      return null;
    }
  },
  created() {
    // issueがなければ一覧画面へ
    if (!this.issue) {
      this.$router.push("/");
    }
  }
};
</script>
