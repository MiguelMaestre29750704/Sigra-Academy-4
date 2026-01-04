export class AcademicRecordsController {
    constructor({ ModelRecords }) {
        this.model = ModelRecords;
    }

    getStudentReportCard = async (req, res) => {
        const { studentId } = req.params;

        try {
            // Validación simple de que sea un número
            if (!studentId || isNaN(studentId)) {
                return res.status(400).json({ error: 'ID de estudiante inválido.' });
            }

            const result = await this.model.getStudentReportCard(studentId);

            if (result.error) {
                return res.status(404).json({ error: result.error });
            }

            return res.status(200).json(result);

        } catch (error) {
            console.error('Error en AcademicRecordsController.getStudentReportCard:', error);
            return res.status(500).json({
                error: 'Error del servidor al generar el boletín.'
            });
        }
    }
}