import { db } from "../../../../database/db.database.mjs";

export class AcademicRecordsModel {

    // Método para obtener el Boletín de Notas (Report Card) de un estudiante
    static async getStudentReportCard(studentId) {
        if (!studentId) return { error: 'No se proporcionó el ID del estudiante.' };

        // 1. Se verifica que el estudiante exista
        const [student] = await db.query(
            `SELECT user_id, first_name, last_name, email FROM users WHERE user_id = ?`,
            [studentId]
        );

        if (student.length === 0) return { error: 'El estudiante no existe.' };

        // 2. Se obtiene sus registros académicos finales
        // Se une: Registro Final -> Asignación -> Materia y Profesor
        const query = `
            SELECT 
                s.subject_name AS asignatura,
                CONCAT(u_teach.first_name, ' ', u_teach.last_name) AS docente,
                far.final_score AS nota_final,
                far.status AS estado,
                ay.name AS periodo
            FROM final_academic_records far
            JOIN teacher_assignments ta ON far.assignment_id = ta.assignment_id
            -- Aquí estaba el error: Primero unimos con secciones
            JOIN sections sec ON ta.section_id = sec.section_id
            -- Y luego la sección nos dice el año académico
            JOIN academic_years ay ON sec.academic_year_id = ay.year_id
            
            JOIN subjects s ON ta.subject_id = s.subject_id
            JOIN users u_teach ON ta.teacher_user_id = u_teach.user_id
            WHERE far.student_user_id = ?
            ORDER BY ay.start_date DESC
        `;

        const [reportCard] = await db.query(query, [studentId]);

        if (reportCard.length === 0) {
            return { 
                message: 'El estudiante aún no tiene registros académicos cerrados.',
                student: student[0],
                records: [] 
            };
        }

        return {
            message: `Boletín generado exitosamente.`,
            records: reportCard
        };
    }
}