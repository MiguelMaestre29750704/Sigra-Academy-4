// Modelo en memoria para prelaciones basado en materias proporcionadas
export class prelaciesModel {
	static subjects = [
		// 1er Año
		{ code: 'MAT-204', name: 'Matemática I', year: '1er Año' },
		{ code: 'FIS-201', name: 'Física I', year: '1er Año' },
		{ code: 'QUI-299', name: 'Química I', year: '1er Año' },
		{ code: 'BIO-501', name: 'Biología I', year: '1er Año' },
		{ code: 'COM-403', name: 'Computación I', year: '1er Año' },
		{ code: 'DIB-309', name: 'Dibujo I', year: '1er Año' },
		{ code: 'LIT-199', name: 'Lenguaje y Literatura I', year: '1er Año' },
		{ code: 'HIS-101', name: 'Historia General', year: '1er Año' },
		{ code: 'GEO-301', name: 'Geografía I', year: '1er Año' },
		{ code: 'DEP-401', name: 'Deporte I', year: '1er Año' },
		{ code: 'ING-601', name: 'Inglés I', year: '1er Año' },

		// 2do Año
		{ code: 'MAT-205', name: 'Matemática II', year: '2do Año' },
		{ code: 'FIS-202', name: 'Física II', year: '2do Año' },
		{ code: 'QUI-300', name: 'Química II', year: '2do Año' },
		{ code: 'BIO-502', name: 'Biología II', year: '2do Año' },
		{ code: 'COM-404', name: 'Computación II', year: '2do Año' },
		{ code: 'DIB-310', name: 'Dibujo II', year: '2do Año' },
		{ code: 'LIT-200', name: 'Lenguaje y Literatura II', year: '2do Año' },
		{ code: 'HIS-102', name: 'Historia II', year: '2do Año' },
		{ code: 'GEO-302', name: 'Geografía II', year: '2do Año' },
		{ code: 'DEP-402', name: 'Deporte II', year: '2do Año' },
		{ code: 'ING-602', name: 'Inglés II', year: '2do Año' },

		// 3er Año
		{ code: 'MAT-206', name: 'Matemática III', year: '3er Año' },
		{ code: 'FIS-203', name: 'Física III', year: '3er Año' },
		{ code: 'QUI-301', name: 'Química III', year: '3er Año' },
		{ code: 'BIO-503', name: 'Biología III', year: '3er Año' },
		{ code: 'COM-405', name: 'Computación III', year: '3er Año' },
		{ code: 'DIB-311', name: 'Dibujo III', year: '3er Año' },
		{ code: 'LIT-201', name: 'Lenguaje y Literatura III', year: '3er Año' },
		{ code: 'HIS-103', name: 'Historia III', year: '3er Año' },
		{ code: 'GEO-303', name: 'Geografía III', year: '3er Año' },
		{ code: 'DEP-403', name: 'Deporte III', year: '3er Año' },
		{ code: 'ING-603', name: 'Inglés III', year: '3er Año' },

		// 4to Año
		{ code: 'MAT-207', name: 'Matemática IV', year: '4to Año' },
		{ code: 'FIS-204', name: 'Física IV', year: '4to Año' },
		{ code: 'QUI-302', name: 'Química IV', year: '4to Año' },
		{ code: 'BIO-504', name: 'Biología IV', year: '4to Año' },
		{ code: 'COM-406', name: 'Computación IV', year: '4to Año' },
		{ code: 'DIB-312', name: 'Dibujo IV', year: '4to Año' },
		{ code: 'LIT-202', name: 'Lenguaje y Literatura IV', year: '4to Año' },
		{ code: 'HIS-104', name: 'Historia IV', year: '4to Año' },
		{ code: 'GEO-304', name: 'Geografía IV', year: '4to Año' },
		{ code: 'DEP-404', name: 'Deporte IV', year: '4to Año' },
		{ code: 'ING-604', name: 'Inglés IV', year: '4to Año' },

		// 5to Año
		{ code: 'MAT-208', name: 'Matemática V', year: '5to Año' },
		{ code: 'FIS-205', name: 'Física V', year: '5to Año' },
		{ code: 'QUI-303', name: 'Química V', year: '5to Año' },
		{ code: 'BIO-505', name: 'Biología V', year: '5to Año' },
		{ code: 'COM-407', name: 'Computación V', year: '5to Año' },
		{ code: 'DIB-313', name: 'Dibujo V', year: '5to Año' },
		{ code: 'LIT-203', name: 'Lenguaje y Literatura V', year: '5to Año' },
		{ code: 'HIS-105', name: 'Historia V', year: '5to Año' },
		{ code: 'GEO-305', name: 'Geografía V', year: '5to Año' },
		{ code: 'DEP-405', name: 'Deporte V', year: '5to Año' },
		{ code: 'ING-605', name: 'Inglés V', year: '5to Año' }
	];

	// Mapa de materia principal -> array de códigos de prerrequisitos
	static prelacies = {
		// 2do Año
		'MAT-205': ['MAT-204'],
		'FIS-202': ['FIS-201'],
		'QUI-300': ['QUI-299'],
		'BIO-502': ['BIO-501','QUI-299'],
		'COM-404': ['COM-403'],
		'DIB-310': ['DIB-309'],
		'LIT-200': ['LIT-199'],
		'HIS-102': ['HIS-101'],
		'GEO-302': ['GEO-301'],
		'DEP-402': ['DEP-401'],
		'ING-602': ['ING-601'],

		// 3er Año
		'MAT-206': ['MAT-205'],
		'FIS-203': ['FIS-202'],
		'QUI-301': ['QUI-300'],
		'BIO-503': ['BIO-502'],
		'COM-405': ['COM-404'],
		'DIB-311': ['DIB-310'],
		'LIT-201': ['LIT-200'],
		'HIS-103': ['HIS-102'],
		'GEO-303': ['GEO-302'],
		'DEP-403': ['DEP-402'],
		'ING-603': ['ING-602'],

		// 4to Año
		'MAT-207': ['MAT-206'],
		'FIS-204': ['FIS-203'],
		'QUI-302': ['QUI-301'],
		'BIO-504': ['BIO-503'],
		'COM-406': ['COM-405'],
		'DIB-312': ['DIB-311'],
		'LIT-202': ['LIT-201'],
		'HIS-104': ['HIS-103'],
		'GEO-304': ['GEO-303'],
		'DEP-404': ['DEP-403'],
		'ING-604': ['ING-603'],

		// 5to Año
		'MAT-208': ['MAT-207'],
		'FIS-205': ['FIS-204'],
		'QUI-303': ['QUI-302'],
		'BIO-505': ['BIO-504'],
		'COM-407': ['COM-406'],
		'DIB-313': ['DIB-312'],
		'LIT-203': ['LIT-202'],
		'HIS-105': ['HIS-104'],
		'GEO-305': ['GEO-304'],
		'DEP-405': ['DEP-404'],
		'ING-605': ['ING-604']
	};

	static async getAllSubjects(){
		if(this.subjects.length === 0) return { error: 'No subjects available' };
		return { message: 'Subjects retrieved', subjects: this.subjects };
	}

	static async getPrereqSubjects(mainCode){
		// Si la materia principal es de 1er año, no tiene preladoras
		const main = this.subjects.find(s => s.code === mainCode);
		if (!main || main.year.includes('1er Año')) {
			return { message: 'No prerequisites configured', prerequisites: [] };
		}
		const codes = this.prelacies[mainCode];
		if(!codes) return { message: 'No prerequisites configured', prerequisites: [] };
		// Solo materias de 1er a 4to año pueden ser preladoras
		const prerequisites = codes
			.map(code => this.subjects.find(s => s.code === code && !s.year.includes('5to Año')))
			.filter(Boolean);
		return { message: 'Prerequisites retrieved', prerequisites };
	}
}
