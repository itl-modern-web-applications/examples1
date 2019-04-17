<template>
  <div class="main">
    <div class="products">
      <ul>
        <h2>Products</h2>
        <product-item
          class="item"
          :item="products"
          @make-folder="makeFolder"
          @add-item="addItem"
        />
      </ul>
    </div>
    <product-view />
    <product-form />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'
import ProductView from '@/components/ProductView'
import ProductForm from '@/components/ProductForm'

export default {
  name: 'App',
  components: {
    ProductItem,
    ProductView,
    ProductForm
  },
  data () {
    return {
      products: {
        name: 'Hračky',
        type: 'category',
        children: [
          {
            name: 'Lego',
            type: 'product',
            id: '01',
            img: '@/assets/toys/01',
            qt: '3'
          }
        ]
      }
    }
  },
  methods: {
    makeFolder (item) {
      this.$set(item, 'children', [])
      this.addItem(item)
    },
    addItem (item) {
      item.children.push({ name: 'new stuff' })
    }
  }
}
</script>

<style>
body {
  margin: 0em;
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.products {
  width: 20%;
  margin: 1em;
}
</style>
