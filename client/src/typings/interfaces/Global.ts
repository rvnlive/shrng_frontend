export interface vTouch {
  evt: {
    isTrusted: boolean
  }
  touch: boolean
  mouse: boolean
  position: {
    top: number
    left: number
  }
  direction: string
  isFirst: boolean
  isFinal: boolean
  duration: number
  distance: {
    x: number
    y: number
  }
  offset: {
    x: number
    y: number
  }
  delta: {
    x: number
    y: number
  }
}

export interface cssStyle {
  height: string
  transform: string
}
