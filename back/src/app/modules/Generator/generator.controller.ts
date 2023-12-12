import { Request, Response } from 'express'
import { GeneratorService } from './generator.service'

export class GeneratorController {
  constructor(private generatorService: GeneratorService) {}

  public generate(req: Request, res: Response) {
    return this.generatorService.generate(req, res)
  }
}
