const PRODUCT_1 = 'p1';
const PRODUCT_2 = 'p2';
const PRODUCT_3 = 'p3';
const PRODUCT_4 = 'p4';
const PRODUCT_5 = 'p5';

const PRODUCT_LIST = [
  {
    id: 'p1',
    name: '버그 없애는 키보드',
    val: 10000,
    originalVal: 10000,
    q: 50,
    onSale: false,
    suggestSale: false,
  },
  {
    id: 'p2',
    name: '생산성 폭발 마우스',
    val: 20000,
    originalVal: 20000,
    q: 30,
    onSale: false,
    suggestSale: false,
  },
  {
    id: 'p3',
    name: '거북목 탈출 모니터암',
    val: 30000,
    originalVal: 30000,
    q: 20,
    onSale: false,
    suggestSale: false,
  },
  {
    id: 'p4',
    name: '에러 방지 노트북 파우치',
    val: 15000,
    originalVal: 15000,
    q: 0,
    onSale: false,
    suggestSale: false,
  },
  {
    id: 'p5',
    name: `코딩할 때 듣는 Lo-Fi 스피커`,
    val: 25000,
    originalVal: 25000,
    q: 10,
    onSale: false,
    suggestSale: false,
  },
];

const PRODUCT_STATUS = {
  OUT_OF_STOCK: 'outOfStock',
  SUPER_SALE: 'superSale',
  LIGHTNING_SALE: 'lightningSale',
  SUGGESTION_SALE: 'suggestionSale',
  NORMAL: 'normal',
};

export { PRODUCT_1, PRODUCT_2, PRODUCT_3, PRODUCT_4, PRODUCT_5, PRODUCT_LIST, PRODUCT_STATUS };
