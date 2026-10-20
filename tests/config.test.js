import { describe, it, expect } from 'vitest';
import { assertConfig } from '../config/settings.js';

describe('assertConfig', () => {
  it('falla con mensaje claro si falta API_TOKEN', () => {
    expect(() => assertConfig({})).toThrow(/API_TOKEN/);
  });
  it('pasa si API_TOKEN existe, sin exponer su valor', () => {
    expect(assertConfig({ API_TOKEN: 'valor-de-prueba' })).toBe(true);
  });
});
