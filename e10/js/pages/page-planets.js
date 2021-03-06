const pagePlanets = {
  template: `
    <q-page padding>
      <q-table
        title="Star Wars Planets"
        :columns="[
          {name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true},
          {name: 'climate', label: 'Climate', align: 'left', field: 'climate', sortable: true},
          {name: 'terrain', label: 'Terrain', align: 'left', field: 'terrain', sortable: true}
        ]"
        :data="planets"
        row-key="name"
        :loading="loading"
      ></q-table>
    </q-page>
  `,

  data () {
    return {
      loading: false
    }
  },

  computed: Vuex.mapGetters([
    'planets'
  ]),

  methods: Vuex.mapActions([
    'loadPlanets'
  ]),

  async created () {
    this.loading = true
    await this.loadPlanets()
    this.loading = false
  }
}
