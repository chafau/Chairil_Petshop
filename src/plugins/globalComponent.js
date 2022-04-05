import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
import ProductCard from '../components/cards/ProductCard.vue'
import DescriptionCard from '../components/DescriptionCard.vue'
import HelloWorld from '../components/HelloWorld.vue'
import DefaultButton from '../components/Button/DefaultButton.vue'
import Footer from '../components/Footer.vue'
import ImageTable from '../components/Tables/imageTable.vue'
import ProductTable from '../components/Tables/productTable.vue'
import InputCurrency from '../components/input/CurrencyInput.vue'

const globalComponents = {
  install(Vue) {
    Vue.component(ProductCard.name, ProductCard);
    Vue.component(Header.name, Header);
    Vue.component(DescriptionCard.name, DescriptionCard)
    Vue.component(HelloWorld.name, HelloWorld)
    Vue.component(DefaultButton.name, DefaultButton)
    Vue.component(Footer.name, Footer)
    Vue.component(ImageTable.name, ImageTable)
    Vue.component(ProductTable.name, ProductTable)
    Vue.component(InputCurrency.name, InputCurrency)
  }
};

export default globalComponents;