import { useActiveObject } from "@layerhub-io/react"
import { Block } from "baseui/block"
import { fabric } from "fabric"
import { useSetRecoilState } from "recoil"
import { hidePopupState } from "../../../../../state/generateImage"
import Common from "./Common"
import { InitImageSettings } from "./GenerationFrame/InitImageSettings"
import { ModelSettings } from "./GenerationFrame/ModelSettings"
import { StepsSettings } from "./GenerationFrame/StepsSettings"
import { Separator } from "./Shared/Separator"

const GenerationFrame = () => {
  const activeObject = useActiveObject<fabric.GenerationFrame | undefined>()
  const setHidePopup = useSetRecoilState(hidePopupState)

  if (!activeObject) return null

  return (
    <Block
      onClick={() => {
        setHidePopup(true)
      }}
      $style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        justifyContent: "space-between",
      }}
    >
      <Block display="flex" gridGap="0.5rem" alignItems="center">
        <ModelSettings />
        <Separator />
        <InitImageSettings />
        <Separator />
        <StepsSettings />
        <Separator />
      </Block>
      <Common />
    </Block>
  )
}

export default GenerationFrame
