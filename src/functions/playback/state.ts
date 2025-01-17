import { ActionId } from './actionId'
import { sendCommands, GoStreamCmd } from '../../connection'
import { ReqType } from '../../enums'
import type { IModelSpec } from '../../models/types'

export type PlaybackStateT = {
	Mode: number
	Repeat: boolean
	Pause: boolean
	Bar: boolean
	File: number
	// Not really state variable, hold videofile list
	// TODO: place somewhere more logical
	FileList: string[]
}

export function create(_model: IModelSpec): PlaybackStateT {
	return {
		Mode: 0,
		Repeat: false,
		Pause: false,
		Bar: false,
		File: 0,
		FileList: [],
	}
}

export async function sync(_model: IModelSpec): Promise<boolean> {
	const cmds: GoStreamCmd[] = [
		{ id: ActionId.PlaybackMode, type: ReqType.Get },
		{ id: ActionId.PlaybackRepeat, type: ReqType.Get },
		{ id: ActionId.PlaybackPause, type: ReqType.Get },
		{ id: ActionId.PlaybackBar, type: ReqType.Get },
		{ id: ActionId.PlaybackList, type: ReqType.Get },
	]
	return await sendCommands(cmds)
}
export function update(state: PlaybackStateT, data: GoStreamCmd): boolean {
	switch (data.id as ActionId) {
		case ActionId.PlaybackMode:
			state.Mode = data.value![0]
			break
		case ActionId.PlaybackRepeat:
			state.Repeat = data.value![0] === 1 ? true : false
			break
		case ActionId.PlaybackPause:
			state.Pause = data.value![0] === 1 ? true : false
			//updatePlayStatedVariables(instance, instance.states.PlayBackState.PlaybackPause)
			break
		case ActionId.PlaybackBar:
			state.Bar = data.value![0] === 1 ? true : false
			break
		case ActionId.PlayFile:
			state.File = state.FileList.indexOf(data.value![0])
			//updatePlayFileVariables(instance, data.value[0])
			break
		case ActionId.PlaybackList:
			state.FileList = state.FileList.concat(<any[]>data.value!)
			// Re-initialize actions and feedbacks so that dropdown are updated
			return true
	}
	return false
}
