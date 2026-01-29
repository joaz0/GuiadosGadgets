import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  private readonly baseTitle = 'Guia dos Gadgets';
  private readonly baseUrl = 'https://guiadosgadgets.vercel.app';
  private readonly defaultDescription =
    'Reviews, comparacoes e promocoes de tecnologia com foco em custo-beneficio.';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const routeTitle = this.buildTitle(routerState);
    const fullTitle = routeTitle ? `${routeTitle} | ${this.baseTitle}` : this.baseTitle;
    this.title.setTitle(fullTitle);

    const description = this.getRouteDescription(routerState) ?? this.defaultDescription;
    this.meta.updateTag({ name: 'description', content: description });
    this.updateCanonical(routerState.url);
  }

  private getRouteDescription(routerState: RouterStateSnapshot): string | null {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const description = route.data?.['description'];
    return typeof description === 'string' ? description : null;
  }

  private updateCanonical(url: string): void {
    const canonicalUrl = `${this.baseUrl}${this.normalizePath(url)}`;
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }

  private normalizePath(url: string): string {
    const clean = url.split('?')[0].split('#')[0];
    if (!clean || clean === '/') {
      return '/';
    }
    return clean.startsWith('/') ? clean : `/${clean}`;
  }
}
