import { Request, Response, NextFunction } from 'express';
import reencarnacaoModel from '../model/reencarnacaoModel';
import IReencarnacao from '../Interfaces/IReencarnacao';

class reencarnacao {
  public async listar (req: Request, res: Response, next: NextFunction) {
    try {
      
      const reencarnacoes = await reencarnacaoModel.listar();

      res.status(200).json({
        reencarnacoes,
      });
    } catch (error) {
      next(error);
    }
  }

  public async encontrar (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const reencarnacao = await reencarnacaoModel.encontrar(Number(id));

      res.status(200).json({
        reencarnacao,
      });
    } catch (error) {
      next(error);
    }
  }

  public async adicionar (req: Request, res: Response, next: NextFunction) {
    try {
      const {
        nome,
        deus,
        seculo,
      } = req.body;

     await reencarnacaoModel.salvar({
        nome,
        deus,
        seculo,
      });

      res.status(201).json({
        message: 'Nova reencarnação Adicionado',
      });
    } catch (error) {
      next(error);
    }
  }

  public async adicionarEmLote (req: Request, res: Response, next: NextFunction) {
    try {
      const { reencarnacoes } = req.body;

      const reencarnacoesInsert = reencarnacoes.map((reencarnacao: IReencarnacao) => reencarnacaoModel.salvar(reencarnacao))
      
      await Promise.all(reencarnacoesInsert);

      res.status(201).json({
        message: "Todas reencarnações adicionados",
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
        deus,
        seculo,
      } = req.body;

      
      const reencarnacao = {
        nome,
        deus,
        seculo,
      };
      
      await reencarnacaoModel.editar(Number(id), reencarnacao)

      res.status(200).json({
        message: 'Reencarnação Editado',
      });
    } catch (error) {
      next(error);
    }
  }

  public async excluir(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      
      await reencarnacaoModel.excluir(Number(id))

      res.status(200).json({
        message: "Reencarnação Excluído",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new reencarnacao();
