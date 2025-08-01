import Component from '../../lib/Component.js';

export default class HelpOverlay extends Component {
  setEvent() {
    const closeBtn = this.$target.querySelector('.close-btn');
    const manualOverlay = this.$target.querySelector('#manualOverlay');
    const manualColumn = this.$target.querySelector('#manualColumn');

    // 닫기 버튼 클릭 이벤트
    closeBtn?.addEventListener('click', () => {
      manualOverlay?.classList.add('hidden');
      manualColumn?.classList.add('translate-x-full');
    });

    // 배경 클릭 이벤트
    manualOverlay?.addEventListener('click', e => {
      if (e.target === manualOverlay) {
        manualOverlay.classList.add('hidden');
        manualColumn?.classList.add('translate-x-full');
      }
    });
  }

  template() {
    return /* HTML */ `<div
      id="manualOverlay"
      class="fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300"
    >
      <div
        id="manualColumn"
        class="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto z-50 transform translate-x-full transition-transform duration-300"
      >
        <button class="close-btn absolute top-4 right-4 text-gray-500 hover:text-black">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 class="text-xl font-bold mb-4">📖 이용 안내</h2>
        <div class="mb-6">
          <h3 class="text-base font-bold mb-3">💰 할인 정책</h3>
          <div class="space-y-3">
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">개별 상품</p>
              <p class="text-gray-700 text-xs pl-2">
                • 키보드 10개↑: 10%<br />
                • 마우스 10개↑: 15%<br />
                • 모니터암 10개↑: 20%<br />
                • 스피커 10개↑: 25%
              </p>
            </div>
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">전체 수량</p>
              <p class="text-gray-700 text-xs pl-2">• 30개 이상: 25%</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">특별 할인</p>
              <p class="text-gray-700 text-xs pl-2">
                • 화요일: +10%<br />
                • ⚡번개세일: 20%<br />
                • 💝추천할인: 5%
              </p>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-base font-bold mb-3">🎁 포인트 적립</h3>
          <div class="space-y-3">
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">기본</p>
              <p class="text-gray-700 text-xs pl-2">• 구매액의 0.1%</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-3">
              <p class="font-semibold text-sm mb-1">추가</p>
              <p class="text-gray-700 text-xs pl-2">
                • 화요일: 2배<br />
                • 키보드+마우스: +50p<br />
                • 풀세트: +100p<br />
                • 10개↑: +20p / 20개↑: +50p / 30개↑: +100p
              </p>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-4 mt-4">
          <p class="text-xs font-bold mb-1">💡 TIP</p>
          <p class="text-2xs text-gray-600 leading-relaxed">
            • 화요일 대량구매 = MAX 혜택<br />
            • ⚡+💝 중복 가능<br />
            • 상품4 = 품절
          </p>
        </div>
      </div>
    </div>`;
  }
}
