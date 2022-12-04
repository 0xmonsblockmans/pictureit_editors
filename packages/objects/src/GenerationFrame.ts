import { fabric } from "fabric"
import { StaticImageObject } from "./StaticImage"
import { StaticTextObject } from "./StaticText"

// @ts-ignore
export class GenerationFrameObject extends fabric.Group {
  static type = "GenerationFrame"
  id: string

  //@ts-ignore
  initialize(objects?: fabric.Object[], options?: GenerationFrameOptions) {
    const id = options.id

    const groupObjects =
      objects.length > 0
        ? objects
        : [
            new fabric.Rect({
              ...options,
              //@ts-ignore
              id: `${id}-rect`,
              type: "rect",
              selectable: true,
              hasControls: true,
              hasBorders: true,
              absolutePositioned: true,
            }),
          ]

    //@ts-ignore
    super.initialize(groupObjects, {
      //@ts-ignore
      id,
      type: GenerationFrameObject.type,
      top: options.top,
      left: options.left
    })
    return this
  }

  async setImage(src: string) {
    return new Promise<void>((resolve, _reject) => {
      fabric.util.loadImage(
        src,
        (img) => {
          const currentImage = this._objects.find((item) => (item as any).id == `${this.id}-image`)
          if (currentImage) {
            this.removeWithUpdate(currentImage)
          }

          if (!img) {
            const errorText = new fabric.StaticText({
              //@ts-ignore
              id: `${this.id}-image`,
              type: StaticTextObject.type,
              top: this.top + this.height / 2,
              left: this.left,
              width: this.width,
              text: "Error loading image",
              fontFamily: "Uber Move Text, sans-serif",
              fontSize: 18,
              editable: false,
              textAlign: "center",
              originY: "center",
            })
            this.addWithUpdate(errorText as any)

            resolve()
            return
          }

          const staticImage = new fabric.StaticImage(img, {
            src,
            id: `${this.id}-image`,
            type: StaticImageObject.type,
            top: this.top,
            left: this.left,
            width: this.width,
            height: this.height,
          })

          this.addWithUpdate(staticImage as any)

          resolve()
        },
        null,
        "anonymous"
      )
    })
  }

  getRect() {
    return this._objects.find(
      (object) =>
        //@ts-ignore
        object.id == `${this.id}-rect`
    )!
  }

  toObject(propertiesToInclude: string[] = []) {
    return super.toObject(propertiesToInclude)
  }
  toJSON(propertiesToInclude: string[] = []) {
    return super.toObject(propertiesToInclude)
  }

  static fromObject(options: GenerationFrameOptions, callback: (arg: fabric.GenerationFrame) => void) {
    fabric.util.enlivenObjects(
      (options as any).objects,
      (enlivenObjects: fabric.Object[]) => {
        callback && callback(new fabric.GenerationFrame(enlivenObjects, options))
      },
      ""
    )
  }
}

fabric.GenerationFrame = fabric.util.createClass(GenerationFrameObject, {
  type: GenerationFrameObject.type,
})
fabric.GenerationFrame.fromObject = GenerationFrameObject.fromObject

export interface GenerationFrameOptions extends fabric.IGroupOptions {
  id: string
}

declare module "fabric" {
  namespace fabric {
    class GenerationFrame extends GenerationFrameObject {
      constructor(objects?: fabric.Object[], options?: GenerationFrameOptions)
    }
  }
}
