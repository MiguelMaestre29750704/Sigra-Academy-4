import { Router } from 'express';
import { subjectRoute } from '../../modules/academic-structure-II/subjects/subjects.route.mjs';
import prelaciesRoute from '../../modules/academic-structure-II/prelacies/prelacies.route.mjs';

const router = Router();

// Definir todas las rutas de los módulos aquí
// Ruta para materias: /api/subject/subjects
// Ruta para prelaciones: /api/subject/prelaciones

// Montar las rutas de materias
router.use("/subjects", subjectRoute);

// Montar las rutas de prelaciones
router.use("/prelaciones", prelaciesRoute);

export const ListRoutes = {
    subject: router
};