import { Request, Response } from 'express'

export class GeneratorService {
  constructor() {}

  public generate(req: Request, res: Response) {
    return res.json({
      response: 'Hello World',
    })
  }
}

// export const generatorService = new GeneratorService()
