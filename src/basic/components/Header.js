import Component from '../lib/Component';
import cartStore from '../store/cartStore';
import { getCartTotalCount } from '../utils/cart.util';

/**
 * 헤더 컴포넌트 생성 함수
 * @returns {HTMLElement} 생성된 헤더 요소
 */
export default class Header extends Component {
  setup() {
    const unsubscribe = cartStore.subscribe(state => {
      this.state = state;
    });

    return () => unsubscribe();
  }

  template() {
    const { cartItems } = cartStore.getState();

    return /* HTML */ `
      <div class="mb-8">
        <h1 class="text-xs font-medium tracking-extra-wide uppercase mb-2">
          🛒 Hanghae Online Store
        </h1>
        <div class="text-5xl tracking-tight leading-none">Shopping Cart</div>
        <p id="item-count" class="text-sm text-gray-500 font-normal mt-3">
          🛍️ ${getCartTotalCount(cartItems)} items in cart
        </p>
      </div>
    `;
  }
}
