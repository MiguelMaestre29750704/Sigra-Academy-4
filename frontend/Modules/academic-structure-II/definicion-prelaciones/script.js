document.addEventListener('DOMContentLoaded', () => {
    
    const closeBtn = document.querySelector('.close-btn');
    const selectedItem = document.querySelector('.selected-item');
    const addBtn = document.querySelector('.btn-primary-dark'); 
    const prereqList = document.getElementById('prereq-list');
    const saveBtn = document.querySelector('.btn-primary');
    const tableBody = document.querySelector('.data-table tbody');

    const deleteModal = document.getElementById('delete-modal');
    const confirmDeleteBtn = document.getElementById('confirm-delete');
    const cancelDeleteBtn = document.getElementById('cancel-delete');
    
    // Elementos para la búsqueda de materias
    const materiaSearch = document.getElementById('materia-search');
    const selectedMateriaContainer = document.getElementById('selected-materia-container');
    const selectedMateriaTitle = document.getElementById('selected-materia-title');
    const selectedMateriaYear = document.getElementById('selected-materia-year');
    const clearMateriaBtn = document.getElementById('clear-materia-btn');
    const prereqSelect = document.getElementById('prereq-select');
    const addPrereqBtn = document.getElementById('add-prereq-btn');
    
    // Elementos para el modal de prelaciones recientes
    const viewAllBtn = document.getElementById('view-all-prelaciones');
    const prelacionesModal = document.getElementById('prelaciones-modal');
    const closePrelacionesModal = document.getElementById('close-prelaciones-modal');
    const prelacionesList = document.getElementById('prelaciones-list');
    
    // Botón Cancelar de la configuración
    const cancelConfigBtn = document.getElementById('cancel-config-btn');
    
    let filaAEliminar = null;
    let materiaPrincipalSeleccionada = null;

    // Materias completas (1er a 5to año, según el txt)
    const materias = [
        // 1er Año
        { codigo: 'MAT-204', nombre: 'Matematica I', año: '1er Año' },
        { codigo: 'FIS-201', nombre: 'Fisica I', año: '1er Año' },
        { codigo: 'QUI-299', nombre: 'Quimica I', año: '1er Año' },
        { codigo: 'BIO-501', nombre: 'Biologia I', año: '1er Año' },
        { codigo: 'COM-403', nombre: 'Computacion I', año: '1er Año' },
        { codigo: 'DIB-309', nombre: 'Dibujo I', año: '1er Año' },
        { codigo: 'LIT-199', nombre: 'Lenguaje y Literatura I', año: '1er Año' },
        { codigo: 'HIS-101', nombre: 'Historia General', año: '1er Año' },
        { codigo: 'GEO-301', nombre: 'Geografia I', año: '1er Año' },
        { codigo: 'DEP-401', nombre: 'Deporte I', año: '1er Año' },
        { codigo: 'ING-601', nombre: 'Ingles I', año: '1er Año' },
        // 2do Año
        { codigo: 'MAT-205', nombre: 'Matematica II', año: '2do Año' },
        { codigo: 'FIS-202', nombre: 'Fisica II', año: '2do Año' },
        { codigo: 'QUI-300', nombre: 'Quimica II', año: '2do Año' },
        { codigo: 'BIO-502', nombre: 'Biologia II', año: '2do Año' },
        { codigo: 'COM-404', nombre: 'Computacion II', año: '2do Año' },
        { codigo: 'DIB-310', nombre: 'Dibujo II', año: '2do Año' },
        { codigo: 'LIT-200', nombre: 'Lenguaje y Literatura II', año: '2do Año' },
        { codigo: 'HIS-102', nombre: 'Historia II', año: '2do Año' },
        { codigo: 'GEO-302', nombre: 'Geografia II', año: '2do Año' },
        { codigo: 'DEP-402', nombre: 'Deporte II', año: '2do Año' },
        { codigo: 'ING-602', nombre: 'Ingles II', año: '2do Año' },
        // 3er Año
        { codigo: 'MAT-206', nombre: 'Matematica III', año: '3er Año' },
        { codigo: 'FIS-203', nombre: 'Fisica III', año: '3er Año' },
        { codigo: 'QUI-301', nombre: 'Quimica III', año: '3er Año' },
        { codigo: 'BIO-503', nombre: 'Biologia III', año: '3er Año' },
        { codigo: 'COM-405', nombre: 'Computacion III', año: '3er Año' },
        { codigo: 'DIB-311', nombre: 'Dibujo III', año: '3er Año' },
        { codigo: 'LIT-201', nombre: 'Lenguaje y Literatura III', año: '3er Año' },
        { codigo: 'HIS-103', nombre: 'Historia III', año: '3er Año' },
        { codigo: 'GEO-303', nombre: 'Geografia III', año: '3er Año' },
        { codigo: 'DEP-403', nombre: 'Deporte III', año: '3er Año' },
        { codigo: 'ING-603', nombre: 'Ingles III', año: '3er Año' },
        // 4to Año
        { codigo: 'MAT-207', nombre: 'Matematica IV', año: '4to Año' },
        { codigo: 'FIS-204', nombre: 'Fisica IV', año: '4to Año' },
        { codigo: 'QUI-302', nombre: 'Quimica IV', año: '4to Año' },
        { codigo: 'BIO-504', nombre: 'Biologia IV', año: '4to Año' },
        { codigo: 'COM-406', nombre: 'Computacion IV', año: '4to Año' },
        { codigo: 'DIB-312', nombre: 'Dibujo IV', año: '4to Año' },
        { codigo: 'LIT-202', nombre: 'Lenguaje y Literatura IV', año: '4to Año' },
        { codigo: 'HIS-104', nombre: 'Historia IV', año: '4to Año' },
        { codigo: 'GEO-304', nombre: 'Geografia IV', año: '4to Año' },
        { codigo: 'DEP-404', nombre: 'Deporte IV', año: '4to Año' },
        { codigo: 'ING-604', nombre: 'Ingles IV', año: '4to Año' },
        // 5to Año
        { codigo: 'MAT-208', nombre: 'Matematica V', año: '5to Año' },
        { codigo: 'FIS-205', nombre: 'Fisica V', año: '5to Año' },
        { codigo: 'QUI-303', nombre: 'Quimica V', año: '5to Año' },
        { codigo: 'BIO-505', nombre: 'Biologia V', año: '5to Año' },
        { codigo: 'COM-407', nombre: 'Computacion V', año: '5to Año' },
        { codigo: 'DIB-313', nombre: 'Dibujo V', año: '5to Año' },
        { codigo: 'LIT-203', nombre: 'Lenguaje y Literatura V', año: '5to Año' },
        { codigo: 'HIS-105', nombre: 'Historia V', año: '5to Año' },
        { codigo: 'GEO-305', nombre: 'Geografia V', año: '5to Año' },
        { codigo: 'DEP-405', nombre: 'Deporte V', año: '5to Año' },
        { codigo: 'ING-605', nombre: 'Ingles V', año: '5to Año' }
    ];

    // Datos de ejemplo para prelaciones recientes
    const todasLasPrelaciones = [
        {
            codigo: 'FIS-203',
            nombre: 'Física II',
            fecha: 'Hace 2 horas',
            requisitos: ['FIS-201 Física I', 'MAT-204 Matemática I']
        },
        {
            codigo: 'GEO-302',
            nombre: 'Geografía II',
            fecha: 'Ayer',
            requisitos: ['GEO-301 Geografía I']
        },
        {
            codigo: 'HIS-101',
            nombre: 'Historia General',
            fecha: 'Ayer',
            requisitos: []
        },
        {
            codigo: 'MAT-205',
            nombre: 'Matemática II',
            fecha: 'Hace 3 días',
            requisitos: ['MAT-204 Matemática I']
        },
        {
            codigo: 'QUI-300',
            nombre: 'Química II',
            fecha: 'Hace 3 días',
            requisitos: ['QUI-299 Química I']
        },
        {
            codigo: 'BIO-502',
            nombre: 'Biología II',
            fecha: 'Hace 4 días',
            requisitos: ['BIO-501 Biología I', 'QUI-299 Química I']
        },
        {
            codigo: 'COM-404',
            nombre: 'Computación II',
            fecha: 'Hace 5 días',
            requisitos: ['COM-403 Computación I']
        },
        {
            codigo: 'DIB-310',
            nombre: 'Dibujo II',
            fecha: 'Hace 5 días',
            requisitos: ['DIB-309 Dibujo I']
        },
        {
            codigo: 'LIT-200',
            nombre: 'Lenguaje y Literatura II',
            fecha: 'Hace 1 semana',
            requisitos: ['LIT-199 Lenguaje y Literatura I']
        },
        {
            codigo: 'ING-602',
            nombre: 'Inglés II',
            fecha: 'Hace 1 semana',
            requisitos: ['ING-601 Inglés I']
        }
    ];

    // Función robusta para buscar materia por código, nombre o combinación exacta
    function buscarMateria(texto) {
        const textoLower = texto.toLowerCase().trim();
        // 1. Buscar por código exacto (sin espacios)
        let materia = materias.find(m => m.codigo.toLowerCase() === textoLower.replace(/\s+/g, ''));
        if (materia) return materia;
        // 2. Buscar por combinación exacta "CODIGO — Nombre"
        materia = materias.find(m => `${m.codigo} — ${m.nombre}`.toLowerCase() === textoLower);
        if (materia) return materia;
        // 3. Buscar por nombre exacto
        materia = materias.find(m => m.nombre.toLowerCase() === textoLower);
        if (materia) return materia;
        // 4. Buscar por coincidencia parcial única (si solo una materia coincide)
        const coincidencias = materias.filter(m =>
            m.codigo.toLowerCase().includes(textoLower) ||
            m.nombre.toLowerCase().includes(textoLower)
        );
        if (coincidencias.length === 1) return coincidencias[0];
        // 5. Buscar por combinación parcial
        materia = materias.find(m => `${m.codigo} — ${m.nombre}`.toLowerCase().includes(textoLower));
        if (materia) return materia;
        return null;
    }

    // Mapa de materias principales a sus preladoras (según el txt)
    const prelaciones = {
        // 2DO AÑO
        'MAT-205': ['MAT-204'],
        'FIS-202': ['FIS-201'],
        'QUI-300': ['QUI-299'],
        'BIO-502': ['BIO-501', 'QUI-299'],
        'COM-404': ['COM-403'],
        'DIB-310': ['DIB-309'],
        'LIT-200': ['LIT-199'],
        'HIS-102': ['HIS-101'],
        'GEO-302': ['GEO-301'],
        'DEP-402': ['DEP-401'],
        'ING-602': ['ING-601'],
        // 3ER AÑO
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
        // 4TO AÑO
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
        // 5TO AÑO
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
        'ING-605': ['ING-604'],
    };

    // Solo materias que pueden ser preladoras (1er a 4to año)
    const materiasPreladoras = materias.filter(m => !m.año.includes('5to Año'));

    // Llena el select solo con materias que prelan a la principal
    function llenarSelectPrerrequisitos(materiaPrincipal = null) {
        prereqSelect.innerHTML = '<option>Seleccione una asignatura...</option>';
        prereqSelect.disabled = false;
        addPrereqBtn.disabled = false;

        // Si la materia principal es de 1er año, no tiene preladoras
        if (materiaPrincipal && materiaPrincipal.año.includes('1er Año')) {
            prereqSelect.innerHTML = '<option>No tiene prerrequisitos</option>';
            prereqSelect.disabled = true;
            addPrereqBtn.disabled = true;
            return;
        }

        // Si hay materia principal y tiene preladoras según el mapa
        if (materiaPrincipal && prelaciones[materiaPrincipal.codigo]) {
            const codigosPreladoras = prelaciones[materiaPrincipal.codigo];
            materiasPreladoras.forEach(materia => {
                if (codigosPreladoras.includes(materia.codigo)) {
                    const option = document.createElement('option');
                    option.value = materia.codigo;
                    option.textContent = `${materia.codigo} — ${materia.nombre}`;
                    option.dataset.año = materia.año;
                    prereqSelect.appendChild(option);
                }
            });
            // Si no hay preladoras, deshabilitar
            if (codigosPreladoras.length === 0) {
                prereqSelect.innerHTML = '<option>No tiene prerrequisitos</option>';
                prereqSelect.disabled = true;
                addPrereqBtn.disabled = true;
            }
        } else {
            // Si no hay materia principal, mostrar todas menos 5to año
            materiasPreladoras.forEach(materia => {
                const option = document.createElement('option');
                option.value = materia.codigo;
                option.textContent = `${materia.codigo} — ${materia.nombre}`;
                option.dataset.año = materia.año;
                prereqSelect.appendChild(option);
            });
        }
    }

    // Función para cargar las prelaciones en el modal
    function cargarPrelacionesModal() {
        prelacionesList.innerHTML = '';
        
        todasLasPrelaciones.forEach(prelacion => {
            const prelacionItem = document.createElement('div');
            prelacionItem.className = 'prelacion-modal-item';
            
            let requisitosHTML = '';
            if (prelacion.requisitos.length > 0) {
                requisitosHTML = `
                    <div class="prelacion-requisitos">
                        ${prelacion.requisitos.map(req => `
                            <span class="requisito-badge">
                                <i class="fa-solid fa-arrow-right"></i> ${req}
                            </span>
                        `).join('')}
                    </div>
                `;
            } else {
                requisitosHTML = `
                    <div class="prelacion-requisitos">
                        <span class="sin-prelaciones-badge">
                            <i class="fa-solid fa-circle-check"></i> Sin prelaciones
                        </span>
                    </div>
                `;
            }
            
            prelacionItem.innerHTML = `
                <div class="prelacion-header">
                    <span class="prelacion-codigo">${prelacion.codigo}</span>
                    <span class="prelacion-fecha">
                        <i class="fa-solid fa-clock"></i> ${prelacion.fecha}
                    </span>
                </div>
                <div class="prelacion-title">${prelacion.nombre}</div>
                ${requisitosHTML}
            `;
            
            prelacionesList.appendChild(prelacionItem);
        });
    }

    // Inicializar el select de prerrequisitos
    llenarSelectPrerrequisitos();

    // --- 1. Buscar y Seleccionar Materia Principal ---
    if (materiaSearch) {
        // Cuando el campo de búsqueda pierde el foco (se sale del campo)
        materiaSearch.addEventListener('change', function() {
            const textoBusqueda = this.value.trim();
            
            if (textoBusqueda) {
                const materia = buscarMateria(textoBusqueda);
                
                if (materia) {
                    // Actualizar la información mostrada
                    selectedMateriaTitle.textContent = `${materia.codigo} — ${materia.nombre}`;
                    selectedMateriaYear.textContent = materia.año;
                    
                    // Mostrar el contenedor
                    selectedMateriaContainer.style.display = 'flex';
                    selectedMateriaContainer.style.opacity = '1';
                    
                    // Guardar la materia seleccionada
                    materiaPrincipalSeleccionada = materia;
                    
                    // Actualizar el select de prerrequisitos consultando el backend
                    // Si el backend responde sin prerrequisitos, se volverá a llenar con todas
                    fetch(`/api/subjects/prelaciones/prereqs/${materia.codigo}`)
                        .then(res => res.json())
                        .then(data => {
                            if (data && Array.isArray(data.prerequisites) && data.prerequisites.length) {
                                // llenar el select solo con los prerrequisitos devueltos
                                prereqSelect.innerHTML = '<option>Seleccione una asignatura...</option>';
                                prereqSelect.disabled = false;
                                addPrereqBtn.disabled = false;
                                data.prerequisites.forEach(s => {
                                    const option = document.createElement('option');
                                    option.value = s.code;
                                    option.textContent = `${s.code} — ${s.name}`;
                                    option.dataset.año = s.year;
                                    prereqSelect.appendChild(option);
                                });
                            } else {
                                // Si no hay prerrequisitos configurados, dejar el select vacío y deshabilitado
                                prereqSelect.innerHTML = '<option>No tiene prerrequisitos</option>';
                                prereqSelect.disabled = true;
                                addPrereqBtn.disabled = true;
                            }
                        })
                        .catch(err => {
                            console.error('Error fetching prerequisites:', err);
                            // En caso de error, volver al comportamiento por defecto
                            llenarSelectPrerrequisitos(materia);
                        });
                    
                    // Limpiar el campo de búsqueda
                    this.value = '';
                } else {
                    alert('Materia no encontrada. Por favor, verifique el código o nombre e intente nuevamente.');
                }
            }
        });

        // También permitir selección con Enter
        materiaSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.dispatchEvent(new Event('change'));
            }
        });
    }

    // --- 2. Limpiar Materia Seleccionada ---
    if (clearMateriaBtn) {
        clearMateriaBtn.addEventListener('click', () => {
            selectedMateriaContainer.style.opacity = '0';
            setTimeout(() => {
                selectedMateriaContainer.style.display = 'none';
            }, 300);
            
            materiaPrincipalSeleccionada = null;
            
            // Resetear el select de prerrequisitos para incluir todas las materias
            llenarSelectPrerrequisitos();
        });
    }

    // --- 3. Añadir Prerrequisito ---
    if (addPrereqBtn) {
        addPrereqBtn.addEventListener('click', () => {
            const selectedOption = prereqSelect.options[prereqSelect.selectedIndex];
            
            if (selectedOption.value && selectedOption.text !== 'Seleccione una asignatura...') {
                const newItem = document.createElement('div');
                newItem.classList.add('prereq-item');
                newItem.innerHTML = `
                    <div class="prereq-code">${selectedOption.value}</div>
                    <div class="prereq-details">
                        <strong>${selectedOption.text.split('—')[1].trim()}</strong>
                        <span>${selectedOption.dataset.año}</span>
                    </div>
                    <button class="delete-prereq-btn"><i class="fa-solid fa-trash-can"></i></button>
                `;
                newItem.style.animation = "fadeIn 0.5s";
                prereqList.appendChild(newItem);
                
                // Resetear el select
                prereqSelect.selectedIndex = 0;
            }
        });
    }

    // --- 4. Eliminar Prerrequisitos de la lista pequeña ---
    if (prereqList) {
        prereqList.addEventListener('click', (e) => {
            const btn = e.target.closest('.delete-prereq-btn');
            if (btn) {
                const item = btn.closest('.prereq-item');
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                item.style.transition = 'all 0.3s ease';
                setTimeout(() => item.remove(), 300);
            }
        });
    }

    // --- 5. Eliminar de la Tabla con Modal y Efecto de Contracción ---
    const cerrarModal = () => {
        if(deleteModal) {
            deleteModal.classList.remove('active');
            filaAEliminar = null;
        }
    };

    if (tableBody) {
        tableBody.addEventListener('click', (e) => {
            if (e.target.classList.contains('fa-trash-can')) {
                filaAEliminar = e.target.closest('tr');
                if(deleteModal) deleteModal.classList.add('active');
            }
        });
    }

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
            if (filaAEliminar) {
                // Aplicamos la clase que reduce el tamaño y oculta
                filaAEliminar.classList.add('row-collapsing');
                
                // Esperamos a que la transición de CSS termine antes de remover
                setTimeout(() => {
                    filaAEliminar.remove();
                }, 300);
            }
            cerrarModal();
        });
    }

    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', cerrarModal);
    }

    if (deleteModal) {
        deleteModal.addEventListener('click', (e) => {
            if (e.target === deleteModal) cerrarModal();
        });
    }

    // --- 6. Simular Guardado ---
    if(saveBtn) {
        saveBtn.addEventListener('click', () => {
            // Validar que se haya seleccionado una materia principal
            if (!materiaPrincipalSeleccionada) {
                alert('Por favor, seleccione una materia principal primero.');
                return;
            }
            
            const originalText = saveBtn.innerHTML;
            saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Guardando...';
            saveBtn.disabled = true;
            
            setTimeout(() => {
                saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> Guardado';
                saveBtn.style.backgroundColor = '#059669';
                
                // Mostrar mensaje de éxito
                alert(`Prelaciones guardadas exitosamente para ${materiaPrincipalSeleccionada.codigo} - ${materiaPrincipalSeleccionada.nombre}`);
                
                setTimeout(() => {
                    saveBtn.innerHTML = originalText;
                    saveBtn.style.backgroundColor = '';
                    saveBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    // --- 7. Modal de "Ver todas" las Prelaciones Recientes ---
    // Abrir modal de prelaciones
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cargarPrelacionesModal();
            prelacionesModal.classList.add('active');
        });
    }

    // Cerrar modal de prelaciones
    if (closePrelacionesModal) {
        closePrelacionesModal.addEventListener('click', () => {
            prelacionesModal.classList.remove('active');
        });
    }

    // Cerrar modal al hacer clic fuera del contenido
    if (prelacionesModal) {
        prelacionesModal.addEventListener('click', (e) => {
            if (e.target === prelacionesModal) {
                prelacionesModal.classList.remove('active');
            }
        });
    }

    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && prelacionesModal.classList.contains('active')) {
            prelacionesModal.classList.remove('active');
        }
    });

    // --- 8. Cancelar Configuración de Prelaciones ---
    if (cancelConfigBtn) {
        cancelConfigBtn.addEventListener('click', () => {
            // 1. Limpiar materia principal seleccionada
            if (selectedMateriaContainer.style.display !== 'none') {
                selectedMateriaContainer.style.opacity = '0';
                setTimeout(() => {
                    selectedMateriaContainer.style.display = 'none';
                }, 300);
            }
            
            // 2. Restablecer el campo de búsqueda de materia principal
            if (materiaSearch) {
                materiaSearch.value = '';
            }
            
            // 3. Restablecer variable de materia seleccionada
            materiaPrincipalSeleccionada = null;
            
            // 4. Limpiar la lista de prerrequisitos añadidos con animación
            const prereqItems = prereqList.querySelectorAll('.prereq-item');
            prereqItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                item.style.transition = 'all 0.3s ease';
                setTimeout(() => item.remove(), 300);
            });
            
            // Limpiar después de las animaciones
            setTimeout(() => {
                prereqList.innerHTML = '';
            }, 350);
            
            // 5. Restablecer el select de prerrequisitos
            prereqSelect.selectedIndex = 0;
            
            // 6. Llenar el select con todas las materias nuevamente
            llenarSelectPrerrequisitos();
            
            // 7. Si el botón Guardar estaba en estado "Guardado", restablecerlo
            if (saveBtn) {
                saveBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Guardar Prelaciones';
                saveBtn.style.backgroundColor = '';
                saveBtn.disabled = false;
            }
            
            // 8. Mensaje de confirmación (opcional)
            console.log('Configuración cancelada. Todos los campos han sido restablecidos.');
        });
    }
});