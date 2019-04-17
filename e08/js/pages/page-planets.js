const pagePlanets = {
  template: `
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
  `,

  data () {
    return {
      planets: [],
      loading: false
    }
  },

  created () {
    this.loading = true

    fetch('https://swapi.co/api/planets')
      .then(response => response.json())
      .then(({ results }) => {
        this.planets = results
        this.loading = false
      })
  }
}
