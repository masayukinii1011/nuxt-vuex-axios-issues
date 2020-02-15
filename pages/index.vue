<template>
  <section>
    <h2>Issues</h2>
    <div class="text-right mb-3">
      <router-link class="btn btn-outline-primary" to="/new">Open New Issue</router-link>
    </div>
    <div>
      <div class="list-group list-group-flush">
        <router-link
          :to="`/issue/${issue.number}`"
          class="list-group-item list-group-item-action"
          v-for="(issue,index) in issues"
          :key="index"
        >
          <div class>#{{issue.number}} {{issue.title}}</div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    issues() {
      //ストアのissuesを返す
      return this.$store.state.issues;
    }
  },
  async mounted() {
    //ストアのfetchIssuesを実行
    this.$store.dispatch("fetchIssues");
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  /*min-height: 100vh;*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
