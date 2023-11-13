import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('product', () => {

  const productList = ref([
    {
      name: '상품1',
      imagePath: 'src/assets/product1.jpg',
      price: 10000,
      isFavorite: false
    },
    {
      name: '상품2',
      imagePath: 'src/assets/product2.jpg',
      price: 20000,
      isFavorite: false
    },
    {
      name: '상품3',
      imagePath: 'src/assets/product3.jpg',
      price: 30000,
      isFavorite: true
    },
    {
      name: '상품4',
      imagePath: 'src/assets/product4.jpg',
      price: 40000,
      isFavorite: false
    }
  ])
  const addFavorite = function (item) {
    productList.value.map((pdt) => {
      if(pdt.name === item){
        pdt.isFavorite = !pdt.isFavorite
      }
      return pdt
    })
  }

  const countFavorites = computed(() => {
    return productList.value.filter((pdt) => pdt.isFavorite).length
  })

  return { productList, addFavorite, countFavorites }
})
