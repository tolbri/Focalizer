const batchPlay = function(rgb) {
  return [
    {
      _obj: "make",
      _target: [
         {
            _ref: "layer"
         }
      ],
      layerID: 4,
      _options: {
         dialogOptions: "dontDisplay"
      }
   },
   {
     _obj: "set",
     _target: [
        {
           _ref: "layer",
           _enum: "ordinal",
           _value: "targetEnum"
        }
     ],
     to: {
        _obj: "layer",
        name: "Outline"
     },
     _options: {
        dialogOptions: "dontDisplay"
     }
  },
  {
      _obj: "move",
      _target: [
         {
            _ref: "layer",
            _enum: "ordinal",
            _value: "targetEnum"
         }
      ],
      to: {
         _ref: "layer",
         _index: 2
      },
      adjustment: false,
      version: 5,
      layerID: [
         4
      ],
      _options: {
         dialogOptions: "dontDisplay"
      }
   },
   {
      _obj: "set",
      _target: [
         {
            _ref: "channel",
            _property: "selection"
         }
      ],
      to: {
         _ref: [
            {
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
   }


  ]
  }

export default batchPlay
