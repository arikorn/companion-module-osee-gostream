import { combineRgb } from '@companion-module/base'
import { CompanionPresetDefinitions } from '@companion-module/base'
import { ActionId } from './actionId'
import { FeedbackId } from './feedbackId'
import { StreamingChoices } from '../../model'
import { GoStreamModel } from '../../models/types'

const ptzSize = '18'
export function create(_model: GoStreamModel): CompanionPresetDefinitions {
	const presets = {}

	for (const st of StreamingChoices) {
		presets[`StreamingSwitch_${st.id}`] = {
			type: 'button',
			category: 'Streaming',
			name: 'Push Streaming',
			style: {
				text: `${st.label}`,
				size: ptzSize,
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.StreamOutput,
							options: {
								StreamID: st.id,
								EnableId: 2,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: FeedbackId.StreamOutput,
					options: {
						StreamID: st.id,
					},
					style: {
						bgcolor: combineRgb(255, 255, 0),
						color: combineRgb(0, 0, 0),
					},
				},
			],
		}
	}

	presets[`Live_0`] = {
		type: 'button',
		category: 'Live',
		name: 'Live',
		style: {
			text: `Live`,
			size: ptzSize,
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		steps: [
			{
				down: [
					{
						actionId: ActionId.Live,
						options: {
							LiveEnable: 2,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: FeedbackId.LiveInfo,
				options: {
					statesId: 1,
				},
				style: {
					bgcolor: combineRgb(255, 0, 0),
					color: combineRgb(0, 0, 0),
				},
			},
		],
	}

	return presets
}
