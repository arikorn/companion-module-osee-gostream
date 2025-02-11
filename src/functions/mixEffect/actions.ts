import { ActionId } from './actionId'
import { getOptNumber } from '../../util'
import { ReqType, ActionType, TransitionStyle } from '../../enums'
import { sendCommand } from '../../connection'
import type { CompanionActionDefinitions } from '@companion-module/base'
import { TransitionStyleChoice, WipeDirectionChoices, SwitchChoices, KeySwitchChoices } from '../../model'
import { getInputChoices } from './../../models'
import { GoStreamModel } from '../../models/types'
import { MixEffectStateT } from './state'

function createActionName(name: string): string {
	return 'MixEffect: ' + name
}
export function create(model: GoStreamModel, state: MixEffectStateT): CompanionActionDefinitions {
	return {
		[ActionId.PgmIndex]: {
			name: createActionName('Set PGM Source'),
			options: [
				{
					type: 'dropdown',
					label: 'Source',
					id: 'Source',
					default: 0,
					choices: getInputChoices(model),
				},
			],
			callback: async (action) => {
				const id = getOptNumber(action, 'Source')
				await sendCommand(ActionId.PgmIndex, ReqType.Set, [id])
			},
		},
		[ActionId.PvwIndex]: {
			name: createActionName('Set PVW Source'),
			options: [
				{
					type: 'dropdown',
					label: 'Source',
					id: 'Source',
					default: 0,
					choices: getInputChoices(model),
				},
			],
			callback: async (action) => {
				const id = getOptNumber(action, 'Source')
				await sendCommand(ActionId.PvwIndex, ReqType.Set, [id])
			},
		},
		[ActionId.CutTransition]: {
			name: createActionName('Perform CUT transition'),
			options: [],
			callback: async () => {
				await sendCommand(ActionId.CutTransition, ReqType.Set)
			},
		},
		[ActionId.AutoTransition]: {
			name: createActionName('Perform AUTO transition'),
			options: [],
			callback: async () => {
				await sendCommand(ActionId.AutoTransition, ReqType.Set)
			},
		},
		[ActionId.FTB]: {
			name: createActionName('Perform FTB Transition'),
			options: [],
			callback: async () => {
				await sendCommand(ActionId.FTB, ReqType.Set)
			},
		},
		[ActionId.FtbAudioAFV]: {
			name: createActionName('Perform FTB Transition,Audio follows video and pops in'),
			options: [
				{
					type: 'dropdown',
					label: 'FTB Audio AFV',
					id: 'FtbAudioAFV',
					default: 0,
					choices: SwitchChoices,
				},
			],
			callback: async (action) => {
				const opt = getOptNumber(action, 'FtbAudioAFV')
				let paramOpt = 0
				if (opt === 2) {
					if (state.fadeToBlack.AFV === true) {
						paramOpt = 0
					} else {
						paramOpt = 1
					}
					await sendCommand(ActionId.FtbAudioAFV, ReqType.Set, [paramOpt])
				} else {
					await sendCommand(ActionId.FtbAudioAFV, ReqType.Set, [opt])
				}
			},
		},
		[ActionId.FtbRate]: {
			name: createActionName('Set rate of FTB'),
			options: [
				{
					type: 'number',
					label: 'FTB Rate(s)',
					id: 'FtbRate',
					default: 2,
					min: 0.5,
					max: 8.0,
					range: true,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.FtbRate, ReqType.Set, [getOptNumber(action, 'FtbRate')])
			},
		},
		[ActionId.Prev]: {
			name: createActionName('Preview switch'),
			options: [
				{
					type: 'dropdown',
					label: 'PREV',
					id: 'prevEnable',
					default: 2,
					choices: SwitchChoices,
				},
			],
			callback: async (action) => {
				const opt = getOptNumber(action, 'prevEnable')
				let paramOpt = 0
				if (opt === 2) {
					if (state.selectTransitionStyle.PrevState === true) {
						paramOpt = 0
					} else {
						paramOpt = 1
					}
					await sendCommand(ActionId.Prev, ReqType.Set, [paramOpt])
				} else {
					await sendCommand(ActionId.Prev, ReqType.Set, [opt])
				}
			},
		},
		[ActionId.TransitionIndex]: {
			name: createActionName('Set transition style/pattern'),
			options: [
				{
					type: 'dropdown',
					label: 'Transition Style',
					id: 'TransitionStyle',
					default: TransitionStyle.MIX,
					choices: TransitionStyleChoice,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionIndex, ReqType.Set, [getOptNumber(action, 'TransitionStyle')])
			},
		},
		[ActionId.TransitionRate]: {
			name: createActionName('Change transition rate'),
			options: [
				{
					type: 'dropdown',
					label: 'Transition Style',
					id: 'TransitionStyle',
					default: TransitionStyle.MIX,
					choices: TransitionStyleChoice,
				},
				{
					type: 'number',
					label: 'Transition Rate',
					id: 'TransitionRate',
					default: 2,
					min: 0.5,
					max: 8.0,
					step: 0.5,
					range: true,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionRate, ReqType.Set, [
					getOptNumber(action, 'TransitionStyle'),
					getOptNumber(action, 'TransitionRate'),
				])
			},
		},
		[ActionId.TransitionDipSource]: {
			name: createActionName('Change transition dip source'),
			options: [
				{
					type: 'dropdown',
					label: 'Change Dip Source',
					id: 'TransitionDipSource',
					default: 0,
					choices: model.getChoices(ActionType.TransitionDipSource),
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionDipSource, ReqType.Set, [getOptNumber(action, 'TransitionDipSource')])
			},
		},
		[ActionId.TransitionWipePattern]: {
			name: createActionName('Change transition wipe pattern'),
			options: [
				{
					type: 'number',
					label: 'Wipe Pattern',
					id: 'WipePatternID',
					min: 0,
					max: 17,
					default: 0,
					range: true,
					step: 1,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionWipePattern, ReqType.Set, [getOptNumber(action, 'WipePatternID')])
			},
		},
		[ActionId.TransitionWipeXPosition]: {
			name: createActionName('Change transition wipe X position'),
			options: [
				{
					type: 'number',
					label: 'X Position',
					id: 'XPosition',
					default: 0,
					min: -16.0,
					max: 16.0,
					step: 0.2,
					range: true,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionWipeXPosition, ReqType.Set, [getOptNumber(action, 'XPosition')])
			},
		},
		[ActionId.TransitionWipeYPosition]: {
			name: createActionName('Change transition wipe Y position'),
			options: [
				{
					type: 'number',
					label: 'Y Position',
					id: 'YPosition',
					default: 0,
					min: -9.0,
					max: 9.0,
					step: 0.2,
					range: true,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionWipeYPosition, ReqType.Set, [getOptNumber(action, 'YPosition')])
			},
		},
		[ActionId.TransitionWipeDirection]: {
			name: createActionName('Change transition wipe style direction'),
			options: [
				{
					type: 'dropdown',
					label: 'Change Wipe Style Direction',
					id: 'WipeDirection',
					default: 0,
					choices: WipeDirectionChoices,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionWipeDirection, ReqType.Set, [getOptNumber(action, 'WipeDirection')])
			},
		},
		[ActionId.TransitionWipeSymmetry]: {
			name: createActionName('Change transition wipe style symmetry'),
			options: [
				{
					type: 'number',
					label: 'Symmetry',
					id: 'WipeSymmetry',
					default: 50,
					min: 0,
					max: 100,
					range: true,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionWipeSymmetry, ReqType.Set, [getOptNumber(action, 'WipeSymmetry')])
			},
		},
		[ActionId.TransitionWipeSoftness]: {
			name: createActionName('Change transition wipe style softness'),
			options: [
				{
					type: 'number',
					label: 'Softness',
					id: 'WipeSoftness',
					default: 0,
					min: 0,
					max: 100,
					range: true,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionWipeSoftness, ReqType.Set, [getOptNumber(action, 'WipeSoftness')])
			},
		},
		[ActionId.TransitionWipeBorder]: {
			name: createActionName('Change transitions wipe style border'),
			options: [
				{
					type: 'number',
					label: 'Border',
					id: 'WipeBorder',
					default: 0,
					min: 0,
					max: 100,
					range: true,
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionWipeBorder, ReqType.Set, [getOptNumber(action, 'WipeBorder')])
			},
		},
		[ActionId.TransitionWipeFillSource]: {
			name: createActionName('Change transition wipe style fill source'),
			options: [
				{
					type: 'dropdown',
					label: 'Fill Source',
					id: 'WipeFillSource',
					default: 0,
					choices: model.getChoices(ActionType.TransitionWipeFillSource),
				},
			],
			callback: async (action) => {
				await sendCommand(ActionId.TransitionWipeFillSource, ReqType.Set, [getOptNumber(action, 'WipeFillSource')])
			},
		},
		[ActionId.TransitionSourceBG]: {
			name: createActionName('Change transition selection'),
			options: [
				{
					type: 'checkbox',
					label: 'Background',
					id: 'Background',
					default: false,
				},
			],
			callback: async (action) => {
				let num = 0
				const bg = action.options.Background
				if (bg === true) {
					num += 1 << 2
				}
				await sendCommand(ActionId.TransitionSource, ReqType.Set, [num])
			},
		},
		[ActionId.KeyOnAir]: {
			name: createActionName('Set USK OnAir'),
			options: [
				{
					type: 'dropdown',
					label: 'USK OnAir',
					id: 'KeyOnAir',
					choices: [
						{ id: 0, label: 'Off' },
						{ id: 1, label: 'On Air' },
						{ id: 2, label: 'Toggle' },
					],
					default: 2,
				},
			],
			callback: async (action) => {
				const opt = getOptNumber(action, 'KeyOnAir')
				let paramOpt = opt
				if (opt === 2) {
					if (state.keyOnAir === true) {
						paramOpt = 0
					} else {
						paramOpt = 1
					}
				}
				await sendCommand(ActionId.KeyOnAir, ReqType.Set, [paramOpt])
			},
		},
		[ActionId.DskOnAir]: {
			name: createActionName('Set DSK OnAir'),
			options: [
				{
					type: 'dropdown',
					label: 'DSK OnAir',
					id: 'DSKOnAir',
					choices: [
						{ id: 0, label: 'Off' },
						{ id: 1, label: 'On Air' },
						{ id: 2, label: 'Toggle' },
					],
					default: 0,
				},
			],
			callback: async (action) => {
				const opt = getOptNumber(action, 'DSKOnAir')
				let paramOpt = opt
				if (opt === 2) {
					if (state.dskOnAir === true) {
						paramOpt = 0
					} else {
						paramOpt = 1
					}
				}
				await sendCommand(ActionId.DskOnAir, ReqType.Set, [paramOpt])
			},
		},
		[ActionId.TransitionSource]: {
			name: createActionName('Next Transition:Tie key to next transition'),
			options: [
				{
					type: 'dropdown',
					label: 'Switch',
					id: 'KeySwitch',
					choices: KeySwitchChoices,
					default: 2,
				},
				{
					type: 'dropdown',
					label: 'Switch',
					id: 'OnOffSwitch',
					choices: [
						{ id: 0, label: 'Off' },
						{ id: 1, label: 'On' },
						{ id: 2, label: 'Toggle' },
					],
					default: 0,
				},
			],
			callback: async (action) => {
				const keyIdx = getOptNumber(action, 'KeySwitch')
				const operation = getOptNumber(action, 'OnOffSwitch')
				const keyObj = KeySwitchChoices.find(item => item.id === keyIdx)
				if (keyObj === undefined) {
					console.log("Undefined KeySwitchChoices value")
					return
				}
				// ...else: keyObj is found (it always should be): we can proceed
				const keyName = keyObj.label.toUpperCase()
				let ntState = state.nextTState.copy()

				switch (operation) {
					case 0:
						ntState[keyName] = false
						break;
					case 1:
						ntState[keyName] = true
						break;
					case 2:
						// Toggle
						ntState[keyName] = !ntState[keyName]
						break;
					default:
						console.log('Unknown operation')
						return
				}

				await sendCommand(ActionId.TransitionSource, ReqType.Set, [ntState.pack()])
			},
		},
		[ActionId.USKOnPreview]: {
			name: createActionName('Next Transition:Set USK on preview bus only'),
			options: [
				{
					type: 'dropdown',
					label: 'State',
					id: 'USKPvwState',
					choices: [
						{ id: 1, label: 'show in PVW' },
						{ id: 0, label: 'hide in PVW' },
						{ id: 2, label: 'toggle in PVW' },
					],
					default: 0,
				},
			],
			callback: async (action) => {
				const choice = getOptNumber(action, 'USKPvwState')
				const ntState = state.nextTState.copy()
				if (choice == 2) {
					// just toggle it
					ntState.KEY = !ntState.KEY
				} else if (state.keyOnAir) {
					// if OnAir, "Key" logic is reversed
					ntState.KEY = choice === 0
				} else {
					ntState.KEY = choice === 1
				}

				await sendCommand(ActionId.TransitionSource, ReqType.Set, [ntState.pack()])
			},
		},
	}
}
