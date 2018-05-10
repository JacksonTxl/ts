import { CustomerModuleModule } from './customer-module.module';

describe('CustomerModuleModule', () => {
  let customerModuleModule: CustomerModuleModule;

  beforeEach(() => {
    customerModuleModule = new CustomerModuleModule();
  });

  it('should create an instance', () => {
    expect(customerModuleModule).toBeTruthy();
  });
});
