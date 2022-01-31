export abstract class MyGraphicsPrimitive2D {
  private _leftTop: number;
  private _rightBottom: number;
  
  moovMethod(x: number, y: number): void {
    x = 0;
    y = 0;

    if (this._rightBottom) {
      this._rightBottom += x;
    } else if (this._leftTop) {
      this._leftTop += y;
    } else {
      return null;
    }
  }
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  public abstract square (): number
}

export class MyCircle extends MyAreaPrimitive2D {
  private _center: number;
  private _radius: number;

  public square(): number {
    if (this._radius) {
      this._center / 2;
    } else {
      return this._center;
    }
  }
}

export class MyRectangle extends MyAreaPrimitive2D {
  private _width: number;
  private _height: number;

  get width () {
    return this._width = 4;
  }

  get height () {
    return this._height = 2;
  }

  public square (): number {
    return this._width * this._height;
  }
}

