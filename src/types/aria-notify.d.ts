interface Document {
  ariaNotify?(message: string, options?: { priority?: 'normal' | 'high' }): void;
}
