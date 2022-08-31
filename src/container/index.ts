import { container } from 'tsyringe';
import { IRepository } from '../repository/protocols/IRepository';
import { Repository } from '../repository/Repository';

enum TokenRegister {
  CURRENCY_REPOSITORY = `CurrencyRepo`,
}

container.registerSingleton<IRepository>(TokenRegister.CURRENCY_REPOSITORY, Repository);
export { TokenRegister };
