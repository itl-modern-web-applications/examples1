Vue.component('my-table', {
  template: `
    <table>
      <thead>
        <tr>
          <th v-for="column in columns">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data">
          <td v-for="(value, key) in columns">
            {{ row[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  `,

  props: [
    'columns',
    'data'
  ]
})