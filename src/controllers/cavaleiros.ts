import { Request, Response, NextFunction } from 'express';

interface ICavaleiro {
  id: number,
  nome: String,
  casa: String,
  armadura: String,
  seculo: Number,
}

class Cavaleiro {
  private cavaleiros: Array<ICavaleiro> = [
    {
      id: 1,
      nome: 'Shiryu',
      casa: 'Libra',
      armadura: 'Dragão',
      seculo: 20,
    },
    {
      id: 2,
      nome: 'Seiya',
      casa: 'Sagitario',
      armadura: 'Pegasus',
      seculo: 20,
    },
    {
      id: 3,
      nome: 'Shun',
      casa: 'Virgem',
      armadura: 'Andromeda',
      seculo: 20,
    },
    {
      id: 4,
      nome: 'Hyoga',
      casa: 'Aquario',
      armadura: 'Cisne',
      seculo: 20,
    },
    {
      id: 5,
      nome: 'Ikki',
      casa: 'Leão',
      armadura: 'Fenix',
      seculo: 20,
    }
  ];

  public listar (req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({
        cavaleiros: this.cavaleiros,
      });
    } catch (error) {
      next(error);
    }
  }

  public encontrar (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const cavaleiro = this.cavaleiros.find(cavaleiro => cavaleiro.id === Number(id));

      res.status(200).json({
        cavaleiro,
      });
    } catch (error) {
      next(error);
    }
  }

  public adicionar (req: Request, res: Response, next: NextFunction) {
    try {
      const {
        nome,
        casa,
        armadura,
        seculo,
      } = req.body;

      const idListCavaleiros = this.cavaleiros.reduce((acc: Array<number>, curr) => [...acc, curr.id], []);
      const maxId = Math.max(...idListCavaleiros)

      const cavaleiro: ICavaleiro = {
        id: maxId + 1,
        nome,
        casa,
        armadura,
        seculo,
      };

      this.cavaleiros.push(cavaleiro);

      res.status(201).json({
        message: 'Novo Cavaleiro Adicionado',
      });
    } catch (error) {
      next(error);
    }
  }

  public editar (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const {
        nome,
        casa,
        armadura,
        seculo,
      } = req.body;

      const cavaleiroIdx: number = this.cavaleiros.findIndex(cavaleiro => cavaleiro.id === Number(id));
      
      const cavaleiro: ICavaleiro = {
        ...this.cavaleiros[cavaleiroIdx],
        nome: nome || this.cavaleiros[cavaleiroIdx]?.nome,
        casa: casa || this.cavaleiros[cavaleiroIdx]?.casa,
        armadura: armadura || this.cavaleiros[cavaleiroIdx]?.armadura,
        seculo: seculo || this.cavaleiros[cavaleiroIdx]?.seculo
      };
      
      this.cavaleiros[cavaleiroIdx] = cavaleiro;

      res.status(200).json({
        message: 'Cavaleiro Editado',
        ...cavaleiro
      });
    } catch (error) {
      next(error);
    }
  }

  public excluir(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      
      const cavaleiroIdx: number = this.cavaleiros.findIndex(cavaleiro => cavaleiro.id === Number(id));

      if (cavaleiroIdx < 0)
        throw new Error('Cavaleiro Não Existe');

      this.cavaleiros.splice(cavaleiroIdx, 1);

      res.status(200).json({
        message: "Cavaleiro Excluído",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new Cavaleiro();
