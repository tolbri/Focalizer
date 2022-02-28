const batchPlay = [
    {
      _obj: "set",
      _target: [{
        _ref: "channel",
        _property: "selection"
      }],
      to: {
        _ref: "channel",
        _enum: "channel",
        _value: "transparencyEnum"
      },
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
         red: 255,
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
        _enum: "ordinal",
        _value: "none"
      },
      _options: {
        dialogOptions: "dontDisplay"
      }
    },
    {
      _obj: "make",
      _target: [{
        _ref: "layer"
      }],
      layerID: 15,
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
         grain: 255,
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
      _obj: "move",
      _target: [{
        _ref: "layer",
        _name: "MASK HERE"
      }],
      to: {
        _ref: "layer",
        _index: 3
      },
      adjustment: false,
      version: 5,
      layerID: [
        2
      ],
      _options: {
        dialogOptions: "dontDisplay"
      }
    }
  ]

export default batchPlay
