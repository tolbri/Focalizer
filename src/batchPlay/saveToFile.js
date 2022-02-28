const batchPlay = function(token) {
  return [{
       _obj: "save",
       as: {
          _obj: "JPEG",
          extendedQuality: 9,
          matteColor: {
             _enum: "matteColor",
             _value: "none"
          }
       },
       in: {
          _path: token,
          _kind: "local"
       },
       documentID: 310,
       lowerCase: true,
       saveStage: {
          _enum: "saveStageType",
          _value: "saveBegin"
       },
       _isCommand: false
    },
    {
         _obj: "close",
         saving: {
            _enum: "yesNo",
            _value: "no"
         },
         documentID: 975,
         _options: {
            dialogOptions: "dontDisplay"
         }
      }]
}

export default batchPlay
