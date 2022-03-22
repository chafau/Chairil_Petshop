import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
import ConsultationList from '../components/ConsultationList.vue'
import HelloWorld from '../components/HelloWorld.vue'
// import CardProduct from '../components/CardProduct.vue'

const globalComponents = {
    install(Vue) {
      Vue.component(Header.name, Header);
      Vue.component(ConsultationList.name, ConsultationList)
      Vue.component(HelloWorld.name, HelloWorld)
      // Vue.component(CardProduct.name, CardProduct)
    }
  };
  
export default globalComponents;