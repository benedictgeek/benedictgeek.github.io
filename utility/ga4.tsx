declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface GAEventPayload {
  event: string;
  [key: string]: string;
}

export const sendGAEvent = (props: GAEventPayload) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    ...props,
  });
};
