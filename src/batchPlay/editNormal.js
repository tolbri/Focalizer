const batchPlay = function(opacity) {
  return [{
      _obj: "select",
      _target: [{
        _ref: "layer",
        _name: "Layer 1"
      }],
      makeVisible: false,
      layerID: [
        3
      ],
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "fill",
      using: {
        _enum: "fillContents",
        _value: "color"
      },
      color: {
        _obj: "RGBColor",
        red: 0,
        grain: 0,
        blue: 0
      },
      opacity: {
        _unit: "percentUnit",
        _value: 100
      },
      mode: {
        _enum: "blendMode",
        _value: "normal"
      },
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "set",
      _target: [{
        _ref: "channel",
        _property: "selection"
      }],
      to: {
        _ref: [{
            _ref: "channel",
            _enum: "channel",
            _value: "transparencyEnum"
          },
          {
            _ref: "layer",
            _name: "MASK HERE"
          }
        ]
      },
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "select",
      _target: [{
        _ref: "layer",
        _name: "Layer 1"
      }],
      makeVisible: false,
      layerID: [
        3
      ],
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "make",
      new: {
        _class: "channel"
      },
      at: {
        _ref: "channel",
        _enum: "channel",
        _value: "mask"
      },
      using: {
        _enum: "userMaskEnabled",
        _value: "revealSelection"
      },
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "select",
      _target: [{
          _ref: "channel",
          _enum: "channel",
          _value: "mask"
        },
        {
          _ref: "layer",
          _name: "Layer 1"
        }
      ],
      makeVisible: false,
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "invert",
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "select",
      _target: [{
        _ref: "layer",
        _name: "MASK HERE"
      }],
      makeVisible: false,
      layerID: [
        2
      ],
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "hide",
      null: [{
        _ref: "layer",
        _enum: "ordinal",
        _value: "targetEnum"
      }],
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "select",
      _target: [{
        _ref: "layer",
        _name: "Layer 1"
      }],
      makeVisible: false,
      layerID: [
        3
      ],
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "set",
      _target: [{
        _ref: "layer",
        _enum: "ordinal",
        _value: "targetEnum"
      }],
      to: {
        _obj: "layer",
        opacity: {
          _unit: "percentUnit",
          _value: opacity
        }
      },
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "set",
      _target: [{
        _ref: "layer",
        _enum: "ordinal",
        _value: "targetEnum"
      }],
      to: {
        _obj: "layer",
        name: "Overlay"
      },
      _options: {
        dialogOptions: "dontDisplay"
      }
    }
  ]
}

export default batchPlay
