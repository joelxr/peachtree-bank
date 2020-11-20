import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import { Transaction } from '../shared/types/Transaction';
import { SortingOrder } from '../shared/types/SortingPreference';

const dummyTransactions: Array<Transaction> = [
  {
    categoryCode: '#12a580',
    dates: {
      valueDate: 1600493600000,
    },
    transaction: {
      amountCurrency: {
        amount: 5000,
        currencyCode: 'EUR',
      },
      type: 'Salaries',
      creditDebitIndicator: 'CRDT',
    },
    merchant: {
      name: 'Backbase',
      accountNumber: 'SI64397745065188826',
    },
  },
  {
    categoryCode: '#d4bb80',
    dates: {
      valueDate: new Date().getTime(),
    },
    transaction: {
      amountCurrency: {
        amount: 6000,
        currencyCode: 'EUR',
      },
      type: 'Salaries',
      creditDebitIndicator: 'CRDT',
    },
    merchant: {
      name: 'Aequilibrium',
      accountNumber: 'X364397745065188826',
    },
  },
];

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchTransactions returns a promise', () => {
    const promise = service.fetchTransactions();
    expect(promise).toBeInstanceOf(Promise);
  });

  it('apply text filter', () => {
    const result = service.filter(dummyTransactions, {
      searchBy: 'Aeq',
      sortingPreferences: [
        { prop: 'date', order: SortingOrder.DESC },
        { prop: 'beneficiary', order: SortingOrder.NONE },
        { prop: 'amount', order: SortingOrder.NONE }
      ]
    });

    expect(result).toBeTruthy();
    expect(result).toEqual([ dummyTransactions[1] ]);
  });

  it('apply sorting preference, name ASC', () => {
    const result = service.filter(dummyTransactions, {
      searchBy: '',
      sortingPreferences: [
        { prop: 'date', order: SortingOrder.NONE },
        { prop: 'beneficiary', order: SortingOrder.ASC },
        { prop: 'amount', order: SortingOrder.NONE }
      ]
    });

    expect(result).toBeTruthy();
    expect(result).toEqual([ dummyTransactions[1], dummyTransactions[0] ]);
  });

  it('apply sorting preference, name DESC', () => {
    const result = service.filter(dummyTransactions, {
      searchBy: '',
      sortingPreferences: [
        { prop: 'date', order: SortingOrder.NONE },
        { prop: 'beneficiary', order: SortingOrder.DESC },
        { prop: 'amount', order: SortingOrder.NONE }
      ]
    });

    expect(result).toBeTruthy();
    expect(result).toEqual([ dummyTransactions[0], dummyTransactions[1] ]);
  });

  it('apply sorting preference, date ASC', () => {
    const result = service.filter(dummyTransactions, {
      searchBy: '',
      sortingPreferences: [
        { prop: 'date', order: SortingOrder.ASC },
        { prop: 'beneficiary', order: SortingOrder.NONE},
        { prop: 'amount', order: SortingOrder.NONE }
      ]
    });

    expect(result).toBeTruthy();
    expect(result).toEqual([ dummyTransactions[0], dummyTransactions[1] ]);
  });

  it('apply sorting preference, date DESC', () => {
    const result = service.filter(dummyTransactions, {
      searchBy: '',
      sortingPreferences: [
        { prop: 'date', order: SortingOrder.DESC },
        { prop: 'beneficiary', order: SortingOrder.NONE},
        { prop: 'amount', order: SortingOrder.NONE }
      ]
    });

    expect(result).toBeTruthy();
    expect(result).toEqual([ dummyTransactions[1], dummyTransactions[0] ]);
  });

  it('apply sorting preference, amount ASC', () => {
    const result = service.filter(dummyTransactions, {
      searchBy: '',
      sortingPreferences: [
        { prop: 'date', order: SortingOrder.NONE},
        { prop: 'beneficiary', order: SortingOrder.NONE},
        { prop: 'amount', order: SortingOrder.ASC}
      ]
    });

    expect(result).toBeTruthy();
    expect(result).toEqual([ dummyTransactions[0], dummyTransactions[1] ]);
  });

  it('apply sorting preference, amount DESC', () => {
    const result = service.filter(dummyTransactions, {
      searchBy: '',
      sortingPreferences: [
        { prop: 'date', order: SortingOrder.NONE},
        { prop: 'beneficiary', order: SortingOrder.NONE},
        { prop: 'amount', order: SortingOrder.DESC }
      ]
    });

    expect(result).toBeTruthy();
    expect(result).toEqual([ dummyTransactions[1], dummyTransactions[0] ]);
  });

  it('adds one new to the start of the array', () => {
    const t =  {
      categoryCode: '#d4bb80',
      dates: {
        valueDate: new Date().getTime(),
      },
      transaction: {
        amountCurrency: {
          amount: 6000,
          currencyCode: 'EUR',
        },
        type: 'Salaries',
        creditDebitIndicator: 'CRDT',
      },
      merchant: {
        name: 'Aequilibrium',
        accountNumber: 'X364397745065188826',
      },
    };

    const result = service.add(t);

    expect(result).toBeTruthy();
    expect(result.length).toEqual(1);
    expect(result).toEqual([t]);
  });

  it('load returns a promise', () => {
    const result = service.load({
      searchBy: '',
      sortingPreferences: [
        { prop: 'date', order: SortingOrder.ASC },
        { prop: 'beneficiary', order: SortingOrder.NONE},
        { prop: 'amount', order: SortingOrder.NONE }
      ]
    });
    expect(result).toBeTruthy();
    expect(result).toBeInstanceOf(Promise);
  });

});

