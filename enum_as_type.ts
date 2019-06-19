class EnumManager<T> {
  public en;
  constructor(en) {
    this.en = en;
  }
  public getValueByKey(key: T) {
    return this.en[key];
  }
}


enum BillStatus {
  Created,
  Deleted,
  Skipped,
}

type BillStatusType = keyof typeof BillStatus; // 'Created' | 'Deleted' | 'Skipped'


const enumManagerInstance = new EnumManager<BillStatusType>(BillStatus)

let first = enumManagerInstance.getValueByKey('Created');
console.log(first);

first = enumManagerInstance.getValueByKey('Create');