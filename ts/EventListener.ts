type Listeners = {
  [id: string]: {
    event: string
    element: HTMLElement
    handler: (e: Event) => void
  }
}

export class EventListener {
  private readonly listeners: Listeners = {}

  add(listenersId: string, event: string, element: HTMLElement, handler: (e: Event) => void) {
    this.listeners[listenersId] = {
      event,
      element,
      handler,
    }

    element.addEventListener(event, handler)
  }
}
