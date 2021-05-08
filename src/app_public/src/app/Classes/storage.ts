import { InjectionToken } from '@angular/core';

export const SHRAMBA_BRSKALNIKA = new InjectionToken<Storage>(
  'Browser storage',
  {
    providedIn: 'root',
    factory: () => localStorage
  }
);
