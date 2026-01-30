import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Review {
  id: number;
  title: string;
  category: string;
  image: string;
  rating: number;
  summary: string;
  badge?: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class ReviewsComponent {
  featuredReview: Review = {
    id: 1,
    title: 'Top 10 Melhores Notebooks para Comprar em 2026',
    category: 'Computadores',
    image: 'assets/images/LenovoLOQ.png',
    rating: 9.8,
    summary: 'Analisamos 45 modelos com dados do BenchPromos. O vencedor vai te surpreender pelo preço.',
    badge: 'Guia Definitivo',
    date: '29 Jan 2026',
    link: '/reviews/top-10-notebooks-2026'
  };

  reviews: Review[] = [
    {
      id: 2,
      title: 'Galaxy S26 Ultra: A Câmera de 300MP Vale a Pena?',
      category: 'Smartphones',
      image: 'assets/images/review-placeholder.svg',
      rating: 9.5,
      summary: 'Testamos o novo zoom ótico variável. O resultado em baixa luz é assustador.',
      badge: 'Escolha do Editor',
      date: '28 Jan 2026',
      link: '/reviews'
    },
    {
      id: 3,
      title: 'Fone Sony WH-1000XM6 vs. AirPods Max 2',
      category: 'Áudio',
      image: 'assets/images/review-placeholder.svg',
      rating: 8.9,
      summary: 'O cancelamento de ruído da Sony continua rei, mas a Apple ganhou em conforto.',
      date: '25 Jan 2026',
      link: '/reviews'
    },
    {
      id: 4,
      title: 'Monitor Dell UltraSharp U2724D: O Sonho do Home Office',
      category: 'Periféricos',
      image: 'assets/images/review-placeholder.svg',
      rating: 9.2,
      summary: 'A tecnologia IPS Black faz diferença real para quem trabalha com design.',
      badge: 'Melhor para Trabalho',
      date: '20 Jan 2026',
      link: '/reviews'
    },
    {
      id: 5,
      title: 'Teclado Keychron K3 Pro: Mecânico e Low Profile',
      category: 'Periféricos',
      image: 'assets/images/review-placeholder.svg',
      rating: 8.5,
      summary: 'A ergonomia é perfeita, mas a bateria poderia durar mais.',
      date: '15 Jan 2026',
      link: '/reviews'
    },
    {
      id: 6,
      title: 'Os 10 Melhores Celulares de 2026: Do Barato ao Topo de Linha',
      category: 'Smartphones',
      image: 'assets/images/smartphones-2026.jpg',
      rating: 9.6,
      summary:
        'iPhone 17, S26 Ultra ou o rei do custo-beneficio da Motorola? Testamos os principais lancamentos do ano.',
      badge: 'Guia Atualizado',
      date: '02 Feb 2026',
      link: '/reviews/top-10-celulares-2026'
    }
  ];

  trackById(index: number, review: Review): number {
    return review.id;
  }
}
