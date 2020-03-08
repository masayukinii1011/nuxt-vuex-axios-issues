Nuxt.jsのVuexを理解するために、GitHubのIssue管理ツールを作成しました。
- ユーザは指定したリポジトリのIssue一覧を閲覧できます。
- ユーザは指定したリポジトリにIssueを追加できます。

上記の機能を提供するために、以下を作成しました。
- Vuex Store(store/index.js)
- Issue一覧画面(pages/index.vue)
- Issue個別画面(pages/issue/_id/index.vue)
- Issue投稿画面(pages/new/index.vue)
### Vuex Store(store/index.js)
#### 処理の流れ
1. 各コンポーネントがActionsを呼び出します。
2. ActionsがデータをGithub APIから取得(axiosのgetメソッドを使用)。Mutationsを呼び出します。
3. MutationsがState内のデータを変更します。
4. 変更したStateが各コンポーネントへ反映されます。
#### Actions
API等と非同期通信を行い、データを取得します。
取得後、データをコミットし、Mutationsを呼び出します。
#### Mutations
Actionsまたは、コンポーネントよりデータがコミットされたら、呼び出されます。
唯一State内のデータを変更することが出来ます。
#### State
各コンポーネントで使用するデータはここに集約します。
### Issue一覧画面(pages/index.vue)
マウント時、Vuex StoreのActionsのfetchIssues関数を実行。
Stateのデータissuesを取得して表示します。
### Issue個別画面(pages/issue/_id/index.vue)
Stateのデータissuesのうち、idが一致するものを取得して表示します。
### Issue投稿画面(pages/new/index.vue)
フォームに入力した内容をGithub APIへ送信します(axiosのpostメソッド)。

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
