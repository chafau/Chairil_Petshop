import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
import DescriptionCard from '../components/DescriptionCard.vue'
import HelloWorld from '../components/HelloWorld.vue'
import DefaultButton from '../components/Button/DefaultButton.vue'
// import CardProduct from '../components/CardProduct.vue'

const globalComponents = {
    install(Vue) {
      Vue.component(Header.name, Header);
      Vue.component(DescriptionCard.name, DescriptionCard)
      Vue.component(HelloWorld.name, HelloWorld)
      Vue.component(DefaultButton.name, DefaultButton)
      // Vue.component(CardProduct.name, CardProduct)
    }
  };
  
export default globalComponents;