# ⏳ Real-Time Launch Countdown Timer - React & TypeScript

Un temporizador de cuenta regresiva inmersivo y responsivo diseñado para eventos de lanzamiento. El proyecto destaca por el cálculo matemático preciso del tiempo restante y la sincronización de intervalos en tiempo real dentro del ciclo de vida de React, renderizado a través de componentes modulares fuertemente tipados con TypeScript.

🎯 **Demo en Vivo:** [Visita la aplicación desplegada](https://melodious-zuccutto-59fbf4.netlify.app)

---

## 🛠️ Stack Tecnológico

* **Core:** React (Vite)
* **Tipado:** TypeScript
* **Manejo del Tiempo:** JavaScript Date API & Web APIs (`setInterval`)
* **Estilos:** CSS3 Estructurado (BEM Workflow / Selectores Semánticos)

---

## 🚀 Características Clave y Desafíos Técnicos

* **Motor de Cálculo Temporal Real:** Conversión precisa de milisegundos crudos a unidades de tiempo legibles (Días, Horas, Minutos, Segundos) usando operaciones matemáticas de residuo (`%`) y redondeo (`Math.floor`).
* **Sincronización del Ciclo de Vida:** Control estricto de intervalos de tiempo con `useEffect` para asegurar que el contador se actualice de forma síncrona cada 1000ms sin generar fugas de memoria (*memory leaks*).
* **Arquitectura de Componentes Modulares:** Reutilización eficiente de la interfaz mediante un componente `<Card />` parametrizado que recibe de forma limpia los valores y etiquetas dinámicas.
* **Layout Responsivo Futurista:** Estructuración fluida y centrada que adapta el tamaño de los contadores numéricos de manera elástica para pantallas móviles y de escritorio.

---

## 📐 Criterio de Ingeniería y Estructura

### Gestión de Ciclo de Vida y Limpieza de Intervalos
Para evitar la duplicación de procesos en el navegador y garantizar el rendimiento del cliente, el hilo de ejecución del temporizador se encapsula en un `useEffect`. Es crucial la función de limpieza (*clean-up*) que destruye el intervalo cuando el componente se desmonta:

```typescript
// Sincronización del temporizador con desmontaje seguro
useEffect(() => {
  const interval = setInterval(() => {
    setCountdown(calculateCountdown());
  }, 1000);
  
  // Clean-up para evitar fugas de memoria (Memory Leaks)
  return () => clearInterval(interval);
}, []);
```
### Algoritmo de Conversión de Tiempo
El cálculo se realiza abstrayendo el timestamp objetivo frente al momento actual. Al operar con milisegundos puros, se aplican divisiones consecutivas para aislar cada unidad temporal:
```typescript
const calculateCountdown = () => {
  const currentDate = new Date();
  const releaseDate = proxDate.getTime() - currentDate.getTime();
  
  // Segmentación matemática por unidades de tiempo
  const daysRemaining = Math.floor(releaseDate / day);
  const hoursRemaining = Math.floor((releaseDate % day) / hour);
  const minutesRemaining = Math.floor((releaseDate % hour) / minute);
  const secondsRemaining = Math.floor((releaseDate % minute) / milisecond);

  return { daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining };
};
```
---
## 🔧 Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/gab0o06/LaunchCountDown-FrontendMentor.git](https://github.com/gab0o06/LaunchCountDown-FrontendMentor.git)
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor
   ```bash
   npm run dev
   ```
