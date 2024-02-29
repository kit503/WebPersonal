/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderSlot, j as renderComponent } from '../astro_4pWy3QZG.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './404_Zl0yFKoz.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://astrofy-template.netlify.app");
const $$TimeLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "D:/Documentos/Manuel/Otros/Proyectos/WebPersonal/astrofy/src/components/cv/TimeLine.astro", void 0);

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold">Perfil</div> </div> <div class="mb-10 text-justify">
Estudiante de Computación e Informática del Instituto Superior Tecnológico Cibertec, quinto ciclo. Me considero una 
persona honesta, puntual y proactiva, con habilidades para el trabajo en equipo. En búsqueda de oportunidad laboral 
en la que pueda desarrollar mis habilidades y adquirir experiencia en programación. Tengo conocimientos en 
lenguajes de programación como JAVA, C# .NET Framework, Spring Boot, React, HTML, CSS3 y JavaScript.
Conocimiento de Base de datos MySql, SQL Server y Mongo DB permitiendo diseñar, mantener y realizar consultas 
a base de datos transaccionales. Por último, para tema de análisis he empleado programas como BIZAGI e IBM 
RATIONAL RHAPSODY empleando modelados BPMN y metodología RUP. Destaco por mi responsabilidad y 
compromiso en mi trabajo.
</div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Educación</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Programaci\xF3n e Inform\xE1tica", "subtitle": "[2022] - [a la fecha] en [Cibertec], [Lima], [Per\xFA]" })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Experiencia</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Asistente Administrativo", "subtitle": "Desde [Abril 2016] hasta [la fecha] en [Farmacia Leo EIRL], [Lima], [Per\xFA]" }, { "default": ($$result3) => renderTemplate`
• Supervisé las operaciones diarias para cumplir con las expectativas de rendimiento, calidad y servicio.<br>
• Controlé la entrada de efectivo y los registros de depósitos, aumentando la precisión y reduciendo las 
    discrepancias.<br>
• Realicé conteos regulares de inventario para verificar los niveles de existencias, abordar discrepancias y 
    prever futuras necesidades.<br>
• Asesoré a los miembros del equipo para mejorar su desarrollo profesional y la responsabilidad en el lugar 
    de trabajo.<br>
• Revisé el informe de ventas y de beneficios brutos para evaluar la eficiencia de la empresa.
` })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Certificaciones</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-2"> <li> <a href="https://coursera.org/verify/professional-cert/DEBEATY6XEHF" target="_blank">Coursera - Meta Back-End Developer</a> </li> <li> <a href="https://www.coursera.org/account/accomplishments/certificate/BC2BQYNYDFSZ" target="_blank">Coursera - Django Web Framework</a> </li> <li> <a href="https://lse.credential.getsmarter.com/e2621af1-227b-416f-a523-5b0b988dfbe3" target="_blank">Becas Santander Skills | London School of Economics - MBA Essentials 2022</a> </li> <li> <a href="https://www.freecodecamp.org/certification/kit503/javascript-algorithms-and-data-structures" target="_blank">FreeCodeCamp -  JavaScript Algorithms and Data Structures</a> </li> <li> <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/SEGS5FKB6WG4" target="_blank">Coursera Programa Especializado - Google Project Management</a> </li> <li> <a href="https://cert.efset.org/cSHHop" target="_blank">EF SET English Certificate 84/100 (C2 Proficient)</a> </li> </ul> <div class="mb-5"> <div class="text-3xl w-full font-bold">Tecnologías</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> <li>Java 17</li> <li>C# (.Net)</li> <li>Html5 + CSS3</li> <li>Office365</li> <li>MySQL</li> <li>SQL Server</li> <li>JavaScript</li> <li>Spring Framework</li> <li>Spring boot</li> <li>React</li> <li>Docker</li> </ul> ` })}`;
}, "D:/Documentos/Manuel/Otros/Proyectos/WebPersonal/astrofy/src/pages/cv.astro", void 0);

const $$file = "D:/Documentos/Manuel/Otros/Proyectos/WebPersonal/astrofy/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
