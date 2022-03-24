import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
import DescriptionCard from '../components/DescriptionCard.vue'
import HelloWorld from '../components/HelloWorld.vue'
import DefaultButton from '../components/Button/DefaultButton.vue'
import Footer from '../components/Footer.vue'
import TableProduct from '../components/Tables/productTable.vue'
// import CardProduct from '../components/CardProduct.vue'

const globalComponents = {
    install(Vue) {
      Vue.component(Header.name, Header);
      Vue.component(DescriptionCard.name, DescriptionCard)
      Vue.component(HelloWorld.name, HelloWorld)
      Vue.component(DefaultButton.name, DefaultButton)
      Vue.component(Footer.name, Footer)
      Vue.component(TableProduct.name, TableProduct)
      // Vue.component(CardProduct.name, CardProduct)
    }
  };
  
export default globalComponents;