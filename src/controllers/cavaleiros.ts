import { Request, Response, NextFunction } from 'express';
import CavaleiroModel from '../model/cavaleiroModel';
import ICavaleiro from '../Interfaces/CavaleiroI';

class Cavaleiro {
  public async listar (req: Request, res: Response, next: NextFunction) {
    try {
      
      const cavaleiros = await CavaleiroModel.listar();

      res.status(200).json({
        cavaleiros,
      });
    } catch (error) {
      next(error);
    }
  }

  public async encontrar (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const cavaleiro = await CavaleiroModel.encontrar(Number(id));

      res.status(200).json({
        cavaleiro,
      });
    } catch (error) {
      next(error);
    }
  }

  public async adicionar (req: Request, res: Response, next: NextFunction) {
    try {
      const {
        nome,
        casa,
        armadura,
        seculo,
      } = req.body;

     await CavaleiroModel.salvar({
        nome,
        casa,
        armadura,
        seculo,
      });

      res.status(201).json({
        message: 'Novo Cavaleiro Adicionado',
      });
    } catch (error) {
      next(error);
    }
  }

  public async adicionarEmLote (req: Request, res: Response, next: NextFunction) {
    try {
      const { cavaleiros } = req.body;

      const cavaleirosInsert = cavaleiros.map((cavaleiro: ICavaleiro) => CavaleiroModel.salvar(cavaleiro))
      
      await Promise.all(cavaleirosInsert);

      res.status(201).json({
        message: "Todos cavaleiros adicionados",
      });
    } catch (error) {
      next(error);
    }
  }
  public async editar (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const {
        nome,
        casa,
        armadura,
        seculo,
      } = req.body;

      
      const cavaleiro = {
        nome,
        casa,
        armadura,
        seculo,
      };
      
      await CavaleiroModel.editar(Number(id), cavaleiro)

      res.status(200).json({
        message: 'Cavaleiro Editado',
      });
    } catch (error) {
      next(error);
    }
  }

  public async excluir(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      
      await CavaleiroModel.excluir(Number(id))

      res.status(200).json({
        message: "Cavaleiro Excluído",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new Cavaleiro();
