import { Router } from 'express';
import { AcademicRecordsController } from './records.controller.mjs';
import { AcademicRecordsModel } from './records.model.mjs';

const router = Router();

// Inyectamos el modelo al controlador (siguiendo el patrón de tu líder)
const recordsController = new AcademicRecordsController({ ModelRecords: AcademicRecordsModel });

// Definimos la ruta: GET /api/records/boletin/5
router.get('/boletin/:studentId', recordsController.getStudentReportCard);

export const RecordsRoutes = router;