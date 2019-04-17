const pageHeroes = {
  template: `
    <q-table
      title="Star Wars Heroes"
      :columns="[
        {name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true},
        {name: 'gender', label: 'Gender', align: 'left', field: 'gender', sortable: true},
        {name: 'birth_year', label: 'Birth year', align: 'left', field: 'birth_year', sortable: true}
      ]"
      :data="heroes"
      row-key="name"
      :loading="loading"
    ></q-table>
  `,

  data () {
    return {
      heroes: [],
      loading: false
    }
  },

  created () {
    this.loading = true

    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(({ results }) => {
        this.heroes = results
        this.loading = false
      })
  }
}
