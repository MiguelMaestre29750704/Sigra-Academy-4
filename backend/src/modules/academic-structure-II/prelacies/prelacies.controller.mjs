import { prelaciesModel } from './prelacies.model.mjs'

export class prelaciesController {
    constructor({ prelaciesModel: model }){
        this.model = model
    }

    // devuelve todas las materias disponibles (catalogo)
    getAllSubjects = async (req, res) => {
        try{
            const result = await this.model.getAllSubjects()
            if(result.error) return res.status(404).json({ error: result.error })
            return res.status(200).json({ message: result.message, subjects: result.subjects })
        }catch(err){
            return res.status(500).json({ error: err.message })
        }
    }

    // devuelve los prerrequisitos para una materia principal (por código)
    getPrereqs = async (req, res) => {
        try{
            const { code } = req.params
            if(!code) return res.status(400).json({ error: 'Missing subject code' })

            const result = await this.model.getPrereqSubjects(code)
            return res.status(200).json({ message: result.message, prerequisites: result.prerequisites })
        }catch(err){
            return res.status(500).json({ error: err.message })
        }
    }
}

export default new prelaciesController({ prelaciesModel })
