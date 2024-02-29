import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_4pWy3QZG.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r\nincididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer\r\nmalesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas\r\npretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse\r\nplatea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada\r\nfames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus\r\nvestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea\r\ndictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst\r\nquisque sagittis purus sit amet.</p>\n<p>Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum\r\nquisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet.\r\nTellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus.\r\nAccumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit\r\nullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt\r\ndui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc.\r\nBibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus\r\narcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed\r\ntempus urna et pharetra pharetra massa massa ultricies mi.</p>\n<p>Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam\r\nsit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec.\r\nEgestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna\r\nfermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et\r\negestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel\r\nturpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra\r\nnam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus\r\nvestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim\r\npraesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus\r\negestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam\r\nac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor\r\npurus non. Amet dictum sit amet justo donec enim.</p>\n<p>Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut\r\nconsequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra.\r\nVenenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor\r\ndignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor\r\ndignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque\r\neu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim\r\nblandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices\r\ntincidunt arcu. Id cursus metus aliquam eleifend mi.</p>\n<p>Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus\r\nimperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu\r\ncursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt\r\ndui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat\r\nsed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.\r\nEgestas integer eget aliquet nibh praesent tristique magna.</p>";

				const frontmatter = {"title":"Demo Post 3","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","pubDate":"Sep 12 2022","heroImage":"/post_img.webp","badge":"Demo badge","tags":["rust","tokio"]};
				const file = "D:/Documentos/Manuel/Otros/Proyectos/WebPersonal/astrofy/src/content/blog/post3.md";
				const url = undefined;
				function rawContent() {
					return "\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r\nincididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer\r\nmalesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas\r\npretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse\r\nplatea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada\r\nfames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus\r\nvestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea\r\ndictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst\r\nquisque sagittis purus sit amet.\r\n\r\nMorbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum\r\nquisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet.\r\nTellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus.\r\nAccumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit\r\nullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt\r\ndui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc.\r\nBibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus\r\narcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed\r\ntempus urna et pharetra pharetra massa massa ultricies mi.\r\n\r\nMollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam\r\nsit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec.\r\nEgestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna\r\nfermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et\r\negestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel\r\nturpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra\r\nnam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus\r\nvestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim\r\npraesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus\r\negestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam\r\nac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor\r\npurus non. Amet dictum sit amet justo donec enim.\r\n\r\nMattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut\r\nconsequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra.\r\nVenenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor\r\ndignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor\r\ndignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque\r\neu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim\r\nblandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices\r\ntincidunt arcu. Id cursus metus aliquam eleifend mi.\r\n\r\nTempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus\r\nimperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu\r\ncursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt\r\ndui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat\r\nsed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.\r\nEgestas integer eget aliquet nibh praesent tristique magna.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
