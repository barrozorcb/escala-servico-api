import { getRepository, Not, Repository } from 'typeorm';

import PostoServico from '../entities/PostoServico';
import IPeriodosServicoRepository from '@modules/escala/repositories/IPeriodosServicoRepository';
import PeriodoServico from '../entities/PeriodoServico';

class PeriodosServicoRepository implements IPeriodosServicoRepository {

  private ormRepository: Repository<PeriodoServico>;

  constructor() {
    this.ormRepository = getRepository(PeriodoServico);
  }


  public async findAll (): Promise<PeriodoServico[]> {

    const periodosServico = await this.ormRepository.find({ select: ["id_periodo_servico", "tp_periodo_servico"] });

    return periodosServico;
  }

  // public async findByEmail(email: string): Promise<User | undefined> {

  //   const user = await this.ormRepository.findOne({ where: { email } });

  //   return user;

  // }
  // public async findById(id: string): Promise<User | undefined> {

  //   const user = await this.ormRepository.findOne(id);

  //   return user;
  // }

  // public async findAllProviders({ except_user_id }: IFindAllProvidersDTO): Promise<User[]> {
  //   let users: User[];

  //   if (except_user_id) {
  //     users = await this.ormRepository.find({
  //       where: {
  //         id: Not(except_user_id)
  //       }
  //     });
  //   } else {
  //     users = await this.ormRepository.find();
  //   }

  //   return users;

  // }

  // public async save(user: User): Promise<User> {
  //   return this.ormRepository.save(user);

  // }
}
export default PeriodosServicoRepository;
