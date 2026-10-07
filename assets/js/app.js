"use strict";

let diaSeleccionado = "LUNES";
        let expandidos = {};
        let completados = JSON.parse(localStorage.getItem('completados')) || {};
        
        function inicializar() {
            renderTabs();
            renderContent();
            document.getElementById('searchInput').addEventListener('input', buscar);
        }
        
        function renderTabs() {
            const container = document.getElementById('tabsContainer');
            container.innerHTML = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES'].map(dia => 
                `<button class="tab-btn ${dia === diaSeleccionado ? 'active' : ''}" onclick="cambiarDia('${dia}')">${dia}</button>`
            ).join('');
        }
        
        function cambiarDia(dia) {
            diaSeleccionado = dia;
            renderTabs();
            renderContent();
        }
        
        function renderContent() {
            const container = document.getElementById('contentContainer');
            const datosEjercicios = RUTINA[diaSeleccionado].ejercicios;
            
            let html = `
                <div class="dia-header">
                    <h2>${diaSeleccionado} - ${RUTINA[diaSeleccionado].titulo}</h2>
                    <p>Duración: ${RUTINA[diaSeleccionado].duracion}</p>
                </div>
            `;
            
            datosEjercicios.forEach((ej, idx) => {
                const id = `${diaSeleccionado}-${idx}`;
                const expanded = expandidos[id] ? 'expanded' : '';
                const isCompleted = completados[id];
                const toggleIcon = expandidos[id] ? '−' : '+';
                const smartworkoutUrl = `https://smartworkout.app/es/biblioteca-ejercicios/pecho/${ej.smartworkout}`;
                
                html += `
                    <div class="ejercicio-card ${expanded}" id="card-${id}">
                        <div class="ejercicio-header" onclick="toggleEjercicio('${id}')">
                            <div style="flex: 1;">
                                <div class="ejercicio-info">
                                    <h3>${ej.nombre}</h3>
                                    <div class="ejercicio-tags">
                                        <span class="tag tipo">${ej.musculo}</span>
                                        <span class="tag">${ej.tipo}</span>
                                    </div>
                                    ${isCompleted ? '<div class="completado-badge">✓ Completado</div>' : ''}
                                </div>
                            </div>
                            <div class="ejercicio-toggle">${toggleIcon}</div>
                        </div>
                        <div class="ejercicio-content">
                            <div class="smartworkout-section">
                                <div class="smartworkout-icon">📱</div>
                                <h4>Ver Imagen & Video en SmartWorkout</h4>
                                <p>Haz click para ver ejercicio con imagen y técnica correcta</p>
                                <a href="${smartworkoutUrl}" target="_blank" rel="noopener noreferrer" class="btn-smartworkout">
                                    🎬 Abrir en SmartWorkout
                                </a>
                            </div>
                            
                            <div class="ejercicio-detalles">
                                <div class="detalle">
                                    <div class="detalle-label">Series</div>
                                    <div class="detalle-valor">${ej.series}</div>
                                </div>
                                <div class="detalle">
                                    <div class="detalle-label">Reps</div>
                                    <div class="detalle-valor">${ej.reps}</div>
                                </div>
                                <div class="detalle">
                                    <div class="detalle-label">Descanso</div>
                                    <div class="detalle-valor">60-120s</div>
                                </div>
                                <div class="detalle">
                                    <div class="detalle-label">Tipo</div>
                                    <div class="detalle-valor" style="font-size: 14px;">${ej.tipo}</div>
                                </div>
                            </div>
                            
                            <div class="progreso-section">
                                <div style="font-size: 12px; font-weight: 700; color: var(--text-secondary); margin-bottom: 8px; text-transform: uppercase;">Progreso</div>
                                <input type="text" id="notas-${id}" class="progreso-input" placeholder="Peso, series completadas, sensación...">
                                <div class="progreso-buttons">
                                    <button class="btn-check" onclick="marcarCompleto('${id}')">✓ Completado</button>
                                    <button class="btn-reset" onclick="limpiarProgreso('${id}')">Limpiar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        }
        
        function toggleEjercicio(id) {
            expandidos[id] = !expandidos[id];
            const card = document.getElementById(`card-${id}`);
            if (card) card.classList.toggle('expanded');
        }
        
        function marcarCompleto(id) {
            const notas = document.getElementById(`notas-${id}`).value;
            completados[id] = { fecha: new Date().toLocaleString(), notas: notas };
            localStorage.setItem('completados', JSON.stringify(completados));
            renderContent();
        }
        
        function limpiarProgreso(id) {
            delete completados[id];
            localStorage.setItem('completados', JSON.stringify(completados));
            renderContent();
        }
        
        function buscar(e) {
            const query = e.target.value.toLowerCase();
            const container = document.getElementById('contentContainer');
            
            if (!query) {
                renderContent();
                return;
            }
            
            const resultados = RUTINA[diaSeleccionado].ejercicios.filter(ej => 
                ej.nombre.toLowerCase().includes(query) || 
                ej.musculo.toLowerCase().includes(query)
            );
            
            if (resultados.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 60px 20px;">
                        <div style="font-size: 48px; opacity: 0.3;">🔍</div>
                        <div style="color: var(--text-secondary);">No encontramos ejercicios</div>
                    </div>
                `;
                return;
            }
            
            let html = '';
            resultados.forEach((ej) => {
                html += `
                    <div class="ejercicio-card">
                        <div class="ejercicio-header">
                            <div style="flex: 1;">
                                <div class="ejercicio-info">
                                    <h3>${ej.nombre}</h3>
                                    <div class="ejercicio-tags"><span class="tag tipo">${ej.musculo}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        }
        
        function mostrarAyuda() {
            alert('ℹ️ CÓMO USAR ESTA APP\\n\\n✓ Selecciona un día en las tabs\\n✓ Abre cada ejercicio para ver detalles\\n✓ Haz click en "Abrir en SmartWorkout" para ver imágenes\\n✓ Marca ejercicios como completados\\n✓ Los datos se guardan automáticamente\\n\\n💪 ¡A entrenar!');
        }
        
        inicializar();
