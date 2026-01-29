import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
    title: 'Home',
    data: {
      description: 'Guia dos Gadgets: reviews, comparacoes e promocoes em tecnologia.'
    }
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre').then((m) => m.SobreComponent),
    title: 'Sobre',
    data: { description: 'Conheca a equipe e a metodologia do Guia dos Gadgets.' }
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato').then((m) => m.ContatoComponent),
    title: 'Contato',
    data: { description: 'Fale com o Guia dos Gadgets para parcerias e sugestoes.' }
  },
  {
    path: 'politicas-afiliados',
    loadComponent: () =>
      import('./pages/politicas-afiliados/politicas-afiliados').then(
        (m) => m.PoliticasAfiliadosComponent
      ),
    title: 'Politicas de Afiliados',
    data: {
      description: 'Entenda como funcionam os links de afiliados e nossa transparencia.'
    }
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews').then((m) => m.ReviewsComponent),
    title: 'Reviews',
    data: { description: 'Reviews detalhadas de produtos com foco em custo-beneficio.' }
  },
  {
    path: 'comparacoes',
    loadComponent: () =>
      import('./pages/comparacoes/comparacoes').then((m) => m.ComparacoesComponent),
    title: 'Comparacoes',
    data: { description: 'Comparacoes objetivas para ajudar na escolha do melhor gadget.' }
  },
  {
    path: 'promocoes',
    loadComponent: () => import('./pages/promocoes/promocoes').then((m) => m.PromocoesComponent),
    title: 'Promocoes',
    data: { description: 'Promocoes e ofertas de tecnologia com historico de preco.' }
  },
  { path: '**', redirectTo: 'reviews' }
];
