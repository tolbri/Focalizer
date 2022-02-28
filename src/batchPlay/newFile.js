const batchPlay  = [
    {
      _obj: "make",
      _target: [{
        _ref: "layer"
      }],
      layerID: 1,
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
        name: "MASK HERE"
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
        color: {
          _enum: "color",
          _value: "red"
        }
      },
      _options: {
        dialogOptions: "dontDisplay"
      }
    }
  ]

  export default batchPlay
