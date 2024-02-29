/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_4pWy3QZG.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './404_Zl0yFKoz.mjs';
import { g as getCollection, $ as $$HorizontalCard } from './__6cCzI83w.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="text-xl py-1">Hello there 👋</div> <div class="text-5xl font-bold">Soy Manuel De la Cruz</div> <div class="text-3xl py-3 font-bold">Estudiante de Programación</div> <div class="py-2"> <text class="text-lg">
Estudiante de <b>Computación e Informática</b> del Instituto Superior Tecnológico Cibertec, quinto ciclo. Me considero una 
persona honesta, puntual y proactiva, con habilidades para el trabajo en equipo. En búsqueda de oportunidad laboral 
en la que pueda desarrollar mis habilidades y adquirir experiencia en programación.
</text> </div> <div class="mt-8"> <a class="btn" href="https://www.linkedin.com/in/kit503/" target="_blank"> Conectemos</a> </div> </div> <div> <div class="text-3xl w-full font-bold mb-2">Proyectos más recientes ${"</>"}</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Aplicaci\xF3n M\xF3vil ", "img": "/post_appMovil.webp", "desc": "Prototipo de App de Ventas con conexi\xF3n a Firebase, desarrollada en Kotlin", "url": "https://github.com/kit503/ProyectoDAMI", "target": "_blank", "badge": "NUEVO" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "App Web de Pel\xEDculas", "img": "/post_appWeb.webp", "desc": "App Web para listar pel\xEDculas y colocar comentarios, con conexi\xF3n a MongoDB y FrontEnd desarrollado con React", "url": "https://github.com/kit503/ProyectoPeliculas", "target": "_blank" })} <div class="divider my-0"></div>  ` })}`;
}, "D:/Documentos/Manuel/Otros/Proyectos/WebPersonal/astrofy/src/pages/index.astro", void 0);

const $$file = "D:/Documentos/Manuel/Otros/Proyectos/WebPersonal/astrofy/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
