import type { ImageMetadata } from 'astro';
import penPearl from '../assets/images/catalog/6061-pearl.png';
import penObsidian from '../assets/images/catalog/obsidian-no-01.png';
import penChampagne from '../assets/images/catalog/atelier-champagne.png';
import penCarbon from '../assets/images/catalog/carbon-edition.png';
import penOnyx from '../assets/images/catalog/archive-onyx.png';
import penPalladium from '../assets/images/catalog/palladium-line.png';
import penTravertine from '../assets/images/catalog/travertine-ivory.png';
import penTitanium from '../assets/images/catalog/titanium-serie-v.png';
import penSignature from '../assets/images/catalog/signature-blanc.png';

export interface Product {
  slug: string;
  name: string;
  image: ImageMetadata;
  detail: string;
  specification: string;
  accentColor: string;
  material: string;
  tip: string;
  weight: string;
  finish: string;
  price: string;
}

export const products: Product[] = [
  { slug:'6061-pearl', name:'6061 Pearl', image:penPearl, detail:'Corpo usinado em alumínio aeroespacial com equilíbrio central.', specification:'142 mm · 20 g', accentColor:'#20211e', material:'Alumínio 6061-T6', tip:'Precisão 0,5 mm', weight:'20 g', finish:'Acetinado', price:'R$ 1.290,00' },
  { slug:'obsidian-no-01', name:'Obsidian No. 01', image:penObsidian, detail:'Acabamento grafite fosco para sessões longas de criação.', specification:'Ponta 0,5 mm', accentColor:'#11120f', material:'Alumínio anodizado', tip:'Precisão 0,5 mm', weight:'21 g', finish:'Fosco', price:'R$ 1.390,00' },
  { slug:'atelier-champagne', name:'Atelier Champagne', image:penChampagne, detail:'Construção em latão escovado com presença e peso controlados.', specification:'28 g · 50/50', accentColor:'#514329', material:'Latão escovado', tip:'Precisão 0,7 mm', weight:'28 g', finish:'Escovado', price:'R$ 1.490,00' },
  { slug:'carbon-edition', name:'Carbon Édition', image:penCarbon, detail:'Estrutura leve em fibra de carbono para movimentos rápidos.', specification:'14 g · 140 mm', accentColor:'#85867f', material:'Fibra de carbono', tip:'Precisão 0,5 mm', weight:'14 g', finish:'Acetinado', price:'R$ 1.590,00' },
  { slug:'archive-onyx', name:'Archive Onyx', image:penOnyx, detail:'Projetada para tinta documental e registros de longa duração.', specification:'Ponta 0,7 mm', accentColor:'#d6d7d0', material:'Alumínio 6061-T6', tip:'Precisão 0,7 mm', weight:'22 g', finish:'Fosco', price:'R$ 1.350,00' },
  { slug:'palladium-line', name:'Palladium Line', image:penPalladium, detail:'Corpo hexagonal que oferece apoio firme e controle preciso.', specification:'18 g · 6 faces', accentColor:'#5d605c', material:'Alumínio hexagonal', tip:'Precisão 0,5 mm', weight:'18 g', finish:'Escovado', price:'R$ 1.420,00' },
  { slug:'travertine-ivory', name:'Travertine Ivory', image:penTravertine, detail:'Formato compacto para acompanhar cadernos e rotinas móveis.', specification:'118 mm · 16 g', accentColor:'#a24f36', material:'Alumínio compacto', tip:'Precisão 0,5 mm', weight:'16 g', finish:'Texturizado', price:'R$ 1.190,00' },
  { slug:'titanium-serie-v', name:'Titanium Série V', image:penTitanium, detail:'Titânio grau 5 com alta resistência e textura micro-grip.', specification:'22 g · Ra 0,8 μm', accentColor:'#2d302d', material:'Titânio grau 5', tip:'Precisão 0,5 mm', weight:'22 g', finish:'Micro-grip', price:'R$ 1.890,00' },
  { slug:'signature-blanc', name:'Signature Blanc', image:penSignature, detail:'Edição clara numerada, criada para coleções especiais.', specification:'1 de 500', accentColor:'#dfff00', material:'Alumínio 6061-T6', tip:'Precisão 0,5 mm', weight:'20 g', finish:'Acetinado', price:'R$ 1.690,00' },
];
