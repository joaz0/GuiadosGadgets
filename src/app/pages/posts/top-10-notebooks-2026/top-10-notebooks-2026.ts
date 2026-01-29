import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-10-notebooks-2026',
  standalone: true,
  templateUrl: './top-10-notebooks-2026.html',
  styleUrl: './top-10-notebooks-2026.scss'
})
export class Top10Notebooks2026Component implements OnInit, OnDestroy {
  private jsonLdScript?: HTMLScriptElement;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'Top 10 Melhores Notebooks para Comprar em 2026: Guia de Compra Completo',
          description:
            'Guia com os melhores notebooks de 2026, incluindo custo-beneficio, gamers e premium.',
          author: {
            '@type': 'Person',
            name: 'Joaz'
          },
          datePublished: '2026-01-29',
          dateModified: '2026-01-29',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
          }
        },
        {
          '@type': 'ItemList',
          itemListOrder: 'https://schema.org/ItemListOrderDescending',
          numberOfItems: 10,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Lenovo Slim 3i (i5-13420H)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Acer Nitro V15 (RTX 3050)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Samsung Galaxy Book4 (i5)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Lenovo LOQ (RTX 4050)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'MacBook Air M2',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'ASUS VivoBook 15 (i5-1334U)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 7,
              name: 'Dell Inspiron 15 (i5-1335U)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 8,
              name: 'Lenovo IdeaPad 1 (Ryzen 5)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 9,
              name: 'ASUS TUF Gaming F16 (RTX 4050)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            },
            {
              '@type': 'ListItem',
              position: 10,
              name: 'Dell XPS 13 (Core Ultra 7)',
              url: 'https://guiadosgadgets.vercel.app/reviews/top-10-notebooks-2026'
            }
          ]
        }
      ]
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
    this.jsonLdScript = script;
  }

  ngOnDestroy(): void {
    this.jsonLdScript?.remove();
  }
}
