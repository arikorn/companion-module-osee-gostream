export enum ActionId {
	
	
	//Super Source
	SuperSourceEnable = 'superSourceEnable',
	SuperSourceSource1 = 'superSourceSource1',
	SuperSourceSource2 = 'superSourceSource2',
	SuperSourceBackground = 'superSourceBackground',
	SuperSourceControlStyle = 'superSourceControlStyle',
	SuperSourceControlYPosition = 'superSourceControlYPosition',
	SuperSourceMaskEnable = 'superSourceMaskEnable',
	SuperSourceMaskHStart = 'superSourceMaskHStart',
	SuperSourceMaskVStart = 'superSourceMaskVStart',
	SuperSourceMaskHEnd = 'superSourceMaskHEnd',
	SuperSourceMaskVEnd = 'superSourceMaskVEnd',
	SuperSourceBorderWidth = 'superSourceBorderWidth',
	SuperSourceBorderHue = 'superSourceBorderHue',
	SuperSourceBorderSaturation = 'superSourceBorderSaturation',
	SuperSourceBorderBrightness = 'superSourceBorderBrightness',
	//UpStream Key
	KeyOnAir = 'keyOnAir',
	TransitionSource = 'transitionSource',
	USKOnPreview = 'uskOnPreview', // This is custom function
	UpStreamKeyFillKeyType = 'upStreamKeyFillKeyType',
	UpStreamKeyType = 'upStreamKeyType',
	LumaKeySourceFill = 'lumaKeySourceFill',
	LumaKeySourceKey = 'lumaKeySourceKey',
	LumaKeyMaskEnable = 'lumaKeyMaskEnable',
	LumaKeyMaskHStart = 'lumaKeyMaskHStart',
	LumaKeyMaskVStart = 'lumaKeyMaskVStart',
	LumaKeyMaskHEnd = 'lumaKeyMaskHEnd',
	LumaKeyMaskVEnd = 'lumaKeyMaskVEnd',
	LumaKeyControlShapedKey = 'lumaKeyControlShapedKey',
	LumaKeyControlClip = 'lumaKeyControlClip',
	LumaKeyControlGain = 'lumaKeyControlGain',
	LumaKeyControlInvert = 'lumaKeyControlInvert',
	LumaKeyResizeEnable = 'lumaKeyResizeEnable',
	LumaKeyResizeSize = 'lumaKeyResizeSize',
	LumaKeyResizeXPosition = 'lumaKeyResizeXPosition',
	LumaKeyResizeYPosition = 'lumaKeyResizeYPosition',
	ChromaKeyFill = 'chromaKeyFill',
	ChromaKeyMaskEnable = 'chromaKeyMaskEnable',
	ChromaKeyMaskHStart = 'chromaKeyMaskHStart',
	ChromaKeyMaskVStart = 'chromaKeyMaskVStart',
	ChromaKeyMaskHEnd = 'chromaKeyMaskHEnd',
	ChromaKeyMaskVEnd = 'chromaKeyMaskVEnd',
	ChromaKeyResizeEnable = 'chromaKeyResizeEnable',
	ChromaKeyResizeSize = 'chromaKeyResizeSize',
	ChromaKeyResizeXPosition = 'chromaKeyResizeXPosition',
	ChromaKeyResizeYPosition = 'chromaKeyResizeYPosition',
	ChromaKeyControlSMPXPosition = 'chromaKeyControlSMPXPosition',
	ChromaKeyControlSMPYPosition = 'chromaKeyControlSMPYPosition',
	ChromaKeyControlSample = 'chromaKeyControlSample',
	ChromaKeyControlColor = 'chromaKeyControlColor',
	ChromaKeyControlForeground = 'chromaKeyControlForeground',
	ChromaKeyControlBackground = 'chromaKeyControlBackground',
	ChromaKeyControlKeyEdge = 'chromaKeyControlKeyEdge',
	KeyPatternSourceFill = 'keyPatternSourceFill',
	KeyPatternWipePattern = 'keyPatternWipePattern',
	KeyPatternWipeSize = 'keyPatternWipeSize',
	KeyPatternWipeXPosition = 'keyPatternWipeXPosition',
	KeyPatternWipeYPosition = 'keyPatternWipeYPosition',
	KeyPatternWipeSymmetry = 'keyPatternWipeSymmetry',
	KeyPatternWipeSoftness = 'keyPatternWipeSoftness',
	KeyPatternMaskEnable = 'keyPatternMaskEnable',
	KeyPatternMaskHStart = 'keyPatternMaskHStart',
	KeyPatternMaskVStart = 'keyPatternMaskVStart',
	KeyPatternMaskHEnd = 'keyPatternMaskHEnd',
	KeyPatternMaskVEnd = 'keyPatternMaskVEnd',
	KeyPatternResizeEnable = 'keyPatternResizeEnable',
	KeyPatternResizeSize = 'keyPatternResizeSize',
	KeyPatternResizeXPosition = 'keyPatternResizeXPosition',
	KeyPatternResizeYPosition = 'keyPatternResizeYPosition',
	PipSource = 'pipSource',
	PipSize = 'pipSize',
	PipXPosition = 'pipXPosition',
	PipYPosition = 'pipYPosition',
	PipMaskEnable = 'pipMaskEnable',
	PipMaskHStart = 'pipMaskHStart',
	PipMaskVStart = 'pipMaskVStart',
	PipMaskHEnd = 'pipMaskHEnd',
	PipMaskVEnd = 'pipMaskVEnd',
	PipBorderEnable = 'pipBorderEnable',
	PipBorderWidth = 'pipBorderWidth',
	PipBorderHue = 'pipBorderHue',
	PipBorderSaturation = 'pipBorderSaturation',
	PipBorderBrightness = 'pipBorderBrightness',

	//Macro
	MacroRecord = 'macroRecord',
	MacroInfo = 'macroInfo',
	GetMacroInfoAll = 'getMacroInfoAll',
	MacroRun = 'macroRun',
	RemoveMacro = 'removeMacro',
	MacroSleep = 'macroSleep',
	//Settings
	SrcName = 'srcName',
	MvMeter = 'mvMeter',
	MvLayout = 'mvLayout',
	InputWindowLayout = 'inputWindowLayout',
	Marker = 'marker',
	MicInput = 'micInput',
	RecordFileName = 'recordFileName',
	SrcSelection = 'srcSelection',
	AuxSource = 'auxSource',
	OutFormat = 'outFormat',
	OutputColorSpace = 'outputColorSpace',
	OutSource = 'outSource',
	NetworkProtocol = 'networkProtocol',
	NetworkIpAddress = 'networkIpAddress',
	NetworkSubnetMask = 'networkSubnetMask',
	NetworkGateway = 'networkGateway',
	NetworkPrimaryDNS = 'networkPrimaryDNS',
	NetworkSecondaryDNS = 'networkSecondaryDNS',
	Quality = 'quality',
	Panel = 'panel',
	SdFormat = 'sdFormat',
	SystemReset = 'systemReset',
	RecordStatus = 'recordStatus',
	RecordTime = 'recordTime',
	SdCardStatus = 'sdCardStatus',
	SdFree = 'sdFree',
	LiveStatus = 'liveStatus',
	LiveInfo = 'liveInfo',
}
