<template>
  <product-item
    class="view"
    :item="products"
    @make-folder="makeFolder"
    @add-item="addItem"
  />
</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
  name: 'ProductView',
  components: {
    ProductItem
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

</style>
