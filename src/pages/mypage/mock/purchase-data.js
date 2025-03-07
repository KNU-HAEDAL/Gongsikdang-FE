export const PURCHASE_MOCK_DATA = [
  {
    purchaseId: 1,
    merchantUid: '123456',
    userId: 'hello',
    totalAmount: 6000,
    paymentMethod: 'kakaopay',
    status: 'SUCCESS',
    items: [
      {
        foodId: 101,
        foodName: '돈까스',
        quantity: 1,
        price: 6000,
      },
    ],
  },
  {
    purchaseId: 2,
    merchantUid: '987654',
    userId: 'user123',
    totalAmount: 12000,
    paymentMethod: 'creditcard',
    status: 'PENDING',
    items: [
      {
        foodId: 102,
        foodName: '김치찌개',
        quantity: 2,
        price: 6000,
      },
    ],
  },
  {
    purchaseId: 3,
    merchantUid: '567890',
    userId: 'guest',
    totalAmount: 8000,
    paymentMethod: 'naverpay',
    status: 'CANCELLED',
    items: [
      {
        foodId: 103,
        foodName: '된장찌개',
        quantity: 1,
        price: 8000,
      },
    ],
  },
  {
    purchaseId: 4,
    merchantUid: '111222',
    userId: 'testUser',
    totalAmount: 15000,
    paymentMethod: 'paypal',
    status: 'SUCCESS',
    items: [
      {
        foodId: 104,
        foodName: '삼겹살',
        quantity: 2,
        price: 7500,
      },
      {
        foodId: 105,
        foodName: '소주',
        quantity: 1,
        price: 5000,
      },
    ],
  },
  {
    purchaseId: 5,
    merchantUid: '333444',
    userId: 'randomUser',
    totalAmount: 3000,
    paymentMethod: 'kakaopay',
    status: 'REFUNDED',
    items: [
      {
        foodId: 106,
        foodName: '아이스크림',
        quantity: 1,
        price: 3000,
      },
    ],
  },
];
