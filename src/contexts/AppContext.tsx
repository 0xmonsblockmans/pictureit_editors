import { PanelType } from "~/constants/app-options"
import { User } from "../api/adapters/pictureit"
import { RemoteData } from "../interfaces/common"
import { atom, RecoilState } from "recoil"
import { Template } from "@layerhub-io/core"

export const isMobileState: RecoilState<boolean | undefined> = atom({
  key: "isMobileState",
  default: undefined as boolean | undefined
})

export const templatesState: RecoilState<Template[]> = atom({
  key: "templatesState",
  default: [] as Template[],
})

export const uploadsState: RecoilState<any[]> = atom({
  key: "uploadsState",
  default: [] as any[],
})

export const shapesState: RecoilState<Template[]> = atom({
  key: "shapesState",
  default: [] as Template[],
})

export const activePanelState: RecoilState<PanelType> = atom({
  key: "activePanelState",
  default: PanelType.MOVE as PanelType,
})

export const activeSubMenuState: RecoilState<string | null> = atom({
  key: "activeSubMenuState",
  default: null as string | null,
})

export const currentTemplateState: RecoilState<any> = atom({
  key: "currentTemplateState",
  default: null,
})

export const userState: RecoilState<RemoteData<User>> = atom({
  key: "userState",
  default: { state: "NOT_ASKED" } as RemoteData<User>,
})
