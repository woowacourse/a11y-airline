let liveRegion: HTMLDivElement | undefined;
let announcementTimer: ReturnType<typeof setTimeout> | undefined;

export function announce(message: string) {
  if (typeof document.ariaNotify === 'function') {
    document.ariaNotify(message);
  } else {
    if (!liveRegion) {
      const announcer = document.createElement('div');
      announcer.className = 'visually-hidden';
      const description = document.createElement('p');
      description.textContent = '안내 메시지 영역입니다';
      liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      announcer.append(description, liveRegion);
      document.body.appendChild(announcer);
    }

    liveRegion.textContent = '';

    clearTimeout(announcementTimer);

    announcementTimer = setTimeout(() => {
      if (liveRegion) liveRegion.textContent = message;
    }, 100);
  }
}
