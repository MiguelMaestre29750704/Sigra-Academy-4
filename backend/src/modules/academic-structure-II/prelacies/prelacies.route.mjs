import { Router } from 'express'
import prelaciesController from './prelacies.controller.mjs'

const router = Router()

// Obtener catálogo completo de materias (útil para selects)
router.get('/all', prelaciesController.getAllSubjects)

// Obtener prerrequisitos para una materia principal (code en path)
router.get('/prereqs/:code', prelaciesController.getPrereqs)

export default router
