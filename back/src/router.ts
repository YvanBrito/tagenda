import { Router } from 'express'
import { GeneratorController, GeneratorService } from './app/modules/Generator'

const generatorService = new GeneratorService()
const generatorController = new GeneratorController(generatorService)
const router: Router = Router()

router.get('/generate', generatorController.generate)

export { router }
