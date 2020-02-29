export const state = () => {
  return {
    issues: []
  }
}

export const mutations = {
  SET_ISSUES(state, issues) {
    state.issues = issues
  }
}

export const actions = {
  async fetchIssues(ctx) {
    const url = "/repos/masayukinii1011/nuxt-vuex-axios-issues/issues"
    const { data } = await this.$axios.get(url, {
      headers: {
        Authorization: `token ${process.env.ACCESS_TOKEN}`
      }
    })
    ctx.commit("SET_ISSUES", data)
  }
}
