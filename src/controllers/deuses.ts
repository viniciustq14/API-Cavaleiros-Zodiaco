import { Request, Response, NextFunction } from 'express';
import deusModel from '../model/deusModel';
import IDeus from '../Interfaces/IDeus';

class Deus {
  public async listar (req: Request, res: Response, next: NextFunction) {
    try {
      
      const deuses = await deusModel.listar();

      res.status(200).json({
        deuses,
      });
    } catch (error) {
      next(error);
    }
  }

  public async encontrar (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const deus = await deusModel.encontrar(Number(id));

      res.status(200).json({
        deus,
      });
    } catch (error) {
      next(error);
    }
  }

  public async adicionar (req: Request, res: Response, next: NextFunction) {
    try {
      const {
        nome,
      } = req.body;

     await deusModel.salvar({
        nome,
      });

      res.status(201).json({
        message: 'Novo Deus Adicionado',
      });
    } catch (error) {
      next(error);
    }
  }

  public async adicionarEmLote (req: Request, res: Response, next: NextFunction) {
    try {
      const { deuses } = req.body;

      const deusesInsert = deuses.map((deus: IDeus) => deusModel.salvar(deus));
      
      await Promise.all(deusesInsert);

      res.status(201).json({
        message: "Todos deuses adicionados",
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
      } = req.body;

      
      const deus = {
        nome,
      };
      
      await deusModel.editar(Number(id), deus);

      res.status(200).json({
        message: 'Deus Editado',
      });
    } catch (error) {
      next(error);
    }
  }

  public async excluir(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      
      await deusModel.excluir(Number(id))

      res.status(200).json({
        message: "Deus Excluído",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new Deus();
