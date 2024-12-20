import { ActionId } from './actionId'
import { getOptNumber, getOptString } from '../../actions/index'
import { StreamingChoices, SwitchChoices } from '../../model'
import { ReqType } from '../../enums'
import { sendCommand } from '../../connection'
import type { GoStreamInstance } from '../../index'
import type { CompanionActionDefinitions } from '@companion-module/base'

export function create(instance: GoStreamInstance): CompanionActionDefinitions {
	return {
		[ActionId.StreamOutput]: {
			name: 'Streaming:Set Output',
			options: [
				{
					type: 'dropdown',
					label: 'Stream',
					id: 'StreamID',
					choices: StreamingChoices,
					default: 0,
				},
				{
					type: 'dropdown',
					label: 'Enable',
					id: 'EnableId',
					choices: SwitchChoices,
					default: 0,
				},
			],
			callback: async (action) => {
				const opt1 = getOptNumber(action, 'StreamID')
				const opt2 = getOptNumber(action, 'EnableId')
				let paramOpt = 0
				if (opt2 === 2) {
					if (opt1 === 0) {
						paramOpt = instance.states.StreamingProp.stream1 === true ? 0 : 1
					} else if (opt1 === 1) {
						paramOpt = instance.states.StreamingProp.stream2 === true ? 0 : 1
					} else if (opt1 === 2) {
						paramOpt = instance.states.StreamingProp.stream3 === true ? 0 : 1
					}
					await sendCommand(ActionId.StreamOutput, ReqType.Set, [opt1, paramOpt])
				} else {
					await sendCommand(ActionId.StreamOutput, ReqType.Set, [opt1, opt2])
				}
			},
		},
		[ActionId.StreamUrl]: {
			name: 'Streaming:Set Stream Url',
			options: [
				{
					type: 'dropdown',
					label: 'Stream',
					id: 'StreamID',
					choices: StreamingChoices,
					default: 0,
				},
				{
					type: 'textinput',
					label: 'Url',
					id: 'StreamUrl',
					default: '',
					required: true,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.StreamOutput, ReqType.Set, [
					getOptNumber(action, 'StreamID'),
					getOptString(action, 'StreamUrl'),
				])
			},
		},
	}
}
