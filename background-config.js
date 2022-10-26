export default {
  "camera": {
      "position": [5, 5, 5],
      "rotation": [-0.7853981633974481, 0.6154797086703871, 0.5235987755982987],
      "fov": 45,
      "near": 0.1,
      "far": 1000,
      "slides": [
          {
              "duration": 1000,
              "easing": "easeOut",
              "value": {
                  "position": [5, 5, 5],
                  "rotation": [-0.7853981633974481, 0.6154797086703871, 0.5235987755982987]
              }
          },
          {
              "duration": 1000,
              "easing": "easeOut",
              "value": {
                  "position": [12.8, 3.6, -5.1],
                  "rotation": [-0.73213854253762, 0.8990814671273191, 0.6130858748703774]
              }
          },
          {
              "duration": 1000,
              "easing": "easeOut",
              "value": {
                  "position": [20.5, 2, -17],
                  "rotation": [-0.48852609032828626, 0.5814109808619947, 0.28400889984767563]
              }
          },
          {
              "duration": 1000,
              "easing": "easeOut",
              "value": {
                  "position": [23, 1.8, -18],
                  "rotation": [-0.48852609032828626, 0.5814109808619947, 0.28400889984767563]
              }
          },
          {
              "duration": 1000,
              "easing": "easeOut",
              "value": {
                  "position": [23, 1.8, -18],
                  "rotation": [-0.48852609032828626, 0.5814109808619947, 0.28400889984767563]
              }
          },
          {
              "duration": 1000,
              "easing": "easeOut",
              "value": {
                  // "position": [30, 2, -30],
                  "position": [0, 16, 0],
                  // "rotation": [-1.57, 0, 0]
                  "rotation": [-1.48852609032828626, 0.5814109808619947, 0.28400889984767563]
              }
          },
          {
              "duration": 1000,
              "easing": "easeOut",
              "value": {
                  // "position": [30, 2, -30],
                  "position": [0, 0, 0],
                  "rotation": [-1.57, 0, 0]
              }
          },
          {
              "duration": 1000,
              "easing": "easeOut",
              "value": {
                  "position": [30, 2, -30],
                  "rotation": [-1.57, 0, 0]
              }
          }
      ]
  },
  "shadows": true,
  "helpers": true,
  "objects": [
      {
          "type": "plane",
          "position": [0, 0, 0],
          "rotation": [-1.57, 0, 0],
          "scale": [1, 1, 1],
          "size": [1000, 1000],
          "receiveShadow": true,
          "material": {
              "type": "phong",
              "color": [1, 0.5, 0.2],
              "shininess": 0,
              "wireframe":false
          }
      },
      // {
      //     "name": "slide 1",
      //     "type": "group",
      //     "position": [0, 0, 2],
      //     "rotation": [0, 0, 0],
      //     "scale": [1, 1, 1],
      //     "children": [
      //         {
      //             "type": "box",
      //             "position": [-1, 0.1, 1.2],
      //             "rotation": [0, 0, 0],
      //             "scale": [1, 1, 1],
      //             "size": [1.3, 0.2, 0.7],
      //             "castShadow": true,
      //             "receiveShadow": true,
      //             "material": {
      //                 "type":"phong",
      //                 "color":[0.5, 0.5, 0.5],
      //                 "opacity":1,
      //                 "flatShading":false,
      //                 "wireframe":false
      //             }
      //         },
      //         {
      //             "type": "group",
      //             "position": [-1, 0, -1],
      //             "rotation": [0, 1.57, 0],
      //             "scale": [0.5, 0.5, 0.5],
      //             "castShadow": true,
      //             "receiveShadow": true,
      //             "children": [
      //                 {
      //                     "type": "object",
      //                     "url": "./3d models/press/structure.obj",
      //                     "position": [0, 0, 0],
      //                     "rotation": [0, 0, 0],
      //                     "scale": [1, 1, 1],
      //                     "castShadow": true,
      //                     "receiveShadow": true,
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.4, 0.4, 0.5],
      //                         "opacity":1,
      //                         "wireframe":false
      //                     }
      //                 },
      //                 {
      //                     "type": "object",
      //                     "url": "./3d models/press/head.obj",
      //                     "position": [0, 0.9, 0],
      //                     "rotation": [0, 0, 0],
      //                     "scale": [1, 1, 1],
      //                     "castShadow": true,
      //                     "receiveShadow": true,
      //                     "animation": [
      //                         {
      //                             "duration": 1000,
      //                             "easing": "linear",
      //                             "value": {
      //                                 "position": [0 , 0.9, 0]
      //                             }
      //                         },
      //                         {
      //                             "duration": 500,
      //                             "easing": "cubic-bezier(0.42, 0, 0.58, 1)",
      //                             "value": {
      //                                 "position": [0 , -0.96, 0]
      //                             }
      //                         },
      //                         {
      //                             "duration": 2500,
      //                             "easing": "cubic-bezier(0.42, 0, 0.58, 1)",
      //                             "value": {
      //                                 "position": [0 , 0.9, 0]
      //                             }
      //                         }
      //                     ],
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.35, 0.35, 0.45],
      //                         "opacity":1,
      //                         "wireframe":false
      //                     }
      //                 },
      //                 {
      //                     "type": "box",
      //                     "position": [0, 0.58, 0],
      //                     "rotation": [0, 0, 0],
      //                     "scale": [1, 1, 1],
      //                     "size": [1.4, 0.004, 2.6],
      //                     "castShadow": true,
      //                     "receiveShadow": true,
      //                     "animation": [
      //                         {
      //                             "duration": 2000,
      //                             "easing": "snap",
      //                             "value": {
      //                                 "visible": false   
      //                             }
      //                         },
      //                         {
      //                             "duration": 2000,
      //                             "easing": "snap",
      //                             "value": {
      //                                 "visible": true
      //                             }
      //                         }
                              
      //                     ],
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.5, 0.5, 0.5],
      //                         "opacity":1,
      //                         "flatShading":false,
      //                         "wireframe":false
      //                     }
      //                 }
      //             ]
      //         },
      //         {
      //             "type": "group",
      //             "position": [-1.5, 0, 0.3],
      //             "rotation": [0, 0, 0],
      //             "scale": [1, 1, 1],
      //             "castShadow": true,
      //             "receiveShadow": true,
      //             "children": [
      //                 {
      //                     "type": "object",
      //                     "url": "./3d models/press arm/1.obj",
      //                     "position": [0, 0, 0],
      //                     "rotation": [0, 0, 0],
      //                     "scale": [1, 1, 1],
      //                     "castShadow": true,
      //                     "receiveShadow": true,
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.6, 0.1, 0.1],
      //                         "opacity":1,
      //                         "wireframe":false
      //                     }
      //                 },
      //                 {
      //                     "type": "object",
      //                     "url": "./3d models/press arm/2.obj",
      //                     "position": [0, 0, 0],
      //                     "rotation": [0, 0, 0],
      //                     "scale": [1, 1, 1],
      //                     "castShadow": true,
      //                     "receiveShadow": true,
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.6, 0.1, 0.1],
      //                         "opacity":1,
      //                         "wireframe":false
      //                     },
      //                     "animation": [
      //                         {
      //                             "duration": 1000,
      //                             "easing": "easeInOut",
      //                             "value": {
      //                                 "rotation": [0, 0.2, 0]
      //                             }
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "easeInOut",
      //                             "value": {
      //                                 "rotation": [0, -1.08, 0]
      //                             }
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "easeInOut",
      //                             "value": {
      //                                 "rotation": [0, 0.2, 0]
      //                             }
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "easeInOut",
      //                             "value": {
      //                                 "rotation": [0, 1.2, 0]
      //                             }
      //                         }
                              
      //                     ],
      //                     "children": [
      //                         {
      //                             "type": "object",
      //                             "url": "./3d models/press arm/3.obj",
      //                             "position": [0.15, 0.45, 0],
      //                             "rotation": [0, 0, 0],
      //                             "scale": [1, 1, 1],
      //                             "castShadow": true,
      //                             "receiveShadow": true,
      //                             "material": {
      //                                 "type":"phong",
      //                                 "color":[0.6, 0.1, 0.1],
      //                                 "opacity":1,
      //                                 "wireframe":false
      //                             },
      //                             "animation": [
      //                                 {
      //                                     "duration": 1000,
      //                                     "easing": "easeInOut",
      //                                     "value": {
      //                                         "rotation": [0, 0, -0.35]
      //                                     }
      //                                 },
      //                                 {
      //                                     "duration": 1000,
      //                                     "easing": "easeInOut",
      //                                     "value": {
      //                                         "rotation": [0, 0, -0.75]
      //                                     }
      //                                 },
      //                                 {
      //                                     "duration": 1000,
      //                                     "easing": "easeInOut",
      //                                     "value": {
      //                                         "rotation": [0, 0, -0.35]
      //                                     }
      //                                 },
      //                                 {
      //                                     "duration": 1000,
      //                                     "easing": "easeInOut",
      //                                     "value": {
      //                                         "rotation": [0, 0, -1.32]
      //                                     }
      //                                 }
                                      
      //                             ],
      //                             "children": [
      //                                 {
      //                                     "type": "object",
      //                                     "url": "./3d models/press arm/4.obj",
      //                                     "position": [0, 0.585, 0],
      //                                     "rotation": [0, 0, 0],
      //                                     "scale": [1, 1, 1],
      //                                     "castShadow": true,
      //                                     "receiveShadow": true,
      //                                     "material": {
      //                                         "type":"phong",
      //                                         "color":[0.6, 0.1, 0.1],
      //                                         "opacity":1,
      //                                         "wireframe":false
      //                                     },
      //                                     "animation": [
      //                                         {
      //                                             "duration": 1000,
      //                                             "easing": "easeInOut",
      //                                             "value": {
      //                                                 "rotation": [0, 0, -0.5]
      //                                             }
      //                                         },
      //                                         {
      //                                             "duration": 1000,
      //                                             "easing": "easeInOut",
      //                                             "value": {
      //                                                 "rotation": [0, 0, -0.25]
      //                                             }
      //                                         },
      //                                         {
      //                                             "duration": 1000,
      //                                             "easing": "easeInOut",
      //                                             "value": {
      //                                                 "rotation": [0, 0, -0.5]
      //                                             }
      //                                         },
      //                                         {
      //                                             "duration": 1000,
      //                                             "easing": "easeInOut",
      //                                             "value": {
      //                                                 "rotation": [0, 0, 0.98]
      //                                             }
      //                                         }
                                              
      //                                     ],
      //                                     "children": [
      //                                         {
      //                                             "type": "object",
      //                                             "url": "./3d models/press arm/5.obj",
      //                                             "position": [-0.140, 0.130, 0],
      //                                             "rotation": [0, 0, 0],
      //                                             "scale": [1, 1, 1],
      //                                             "castShadow": true,
      //                                             "receiveShadow": true,
      //                                             "material": {
      //                                                 "type":"phong",
      //                                                 "color":[0.6, 0.1, 0.1],
      //                                                 "opacity":1,
      //                                                 "wireframe":false
      //                                             },
      //                                             "children": [
      //                                                 {
      //                                                     "type": "object",
      //                                                     "url": "./3d models/press arm/6.obj",
      //                                                     "position": [0.8, 0, 0],
      //                                                     "rotation": [0, 0, 0],
      //                                                     "scale": [1, 1, 1],
      //                                                     "castShadow": true,
      //                                                     "receiveShadow": true,
      //                                                     "material": {
      //                                                         "type":"phong",
      //                                                         "color":[0.6, 0.1, 0.1],
      //                                                         "opacity":1,
      //                                                         "wireframe":false
      //                                                     },
      //                                                     "animation": [
      //                                                         {
      //                                                             "duration": 1000,
      //                                                             "easing": "easeInOut",
      //                                                             "value": {
      //                                                                 "rotation": [0, 0, -0.75]   
      //                                                             }
      //                                                         },
      //                                                         {
      //                                                             "duration": 1000,
      //                                                             "easing": "easeInOut",
      //                                                             "value": {
      //                                                                 "rotation": [0, 0, -0.55]
      //                                                             }
      //                                                         },
      //                                                         {
      //                                                             "duration": 1000,
      //                                                             "easing": "easeInOut",
      //                                                             "value": {
      //                                                                 "rotation": [0, 0, -0.75]
      //                                                             }
      //                                                         },
      //                                                         {
      //                                                             "duration": 1000,
      //                                                             "easing": "easeInOut",
      //                                                             "value": {
      //                                                                 "rotation": [0, 0, -1.23]
      //                                                             }
      //                                                         }
                                                              
      //                                                     ],
      //                                                     "children": [
      //                                                         {
      //                                                             "type": "object",
      //                                                             "url": "./3d models/press arm/7.obj",
      //                                                             "position": [0.08, 0, 0],
      //                                                             "rotation": [0, 0, 0],
      //                                                             "scale": [1, 1, 1],
      //                                                             "castShadow": true,
      //                                                             "receiveShadow": true,
      //                                                             "material": {
      //                                                                 "type":"phong",
      //                                                                 "color":[0.25, 0.25, 0.25],
      //                                                                 "opacity":1,
      //                                                                 "wireframe":false
      //                                                             },
      //                                                             "animation": [
      //                                                                 {
      //                                                                     "duration": 1000,
      //                                                                     "easing": "easeInOut",
      //                                                                     "value": {
      //                                                                         "rotation": [0, 0, 0]   
      //                                                                     }
      //                                                                 },
      //                                                                 {
      //                                                                     "duration": 1000,
      //                                                                     "easing": "easeInOut",
      //                                                                     "value": {
      //                                                                         "rotation": [0.5, 0, 0]
      //                                                                     }
      //                                                                 },
      //                                                                 {
      //                                                                     "duration": 1000,
      //                                                                     "easing": "easeInOut",
      //                                                                     "value": {
      //                                                                         "rotation": [0, 0, 0]
      //                                                                     }
      //                                                                 },
      //                                                                 {
      //                                                                     "duration": 1000,
      //                                                                     "easing": "easeInOut",
      //                                                                     "value": {
      //                                                                         "rotation": [2.77, 0, 0]
      //                                                                     }
      //                                                                 }
                                                                      
      //                                                             ],
      //                                                             "children": [
      //                                                                 {
      //                                                                     "type": "box",
      //                                                                     "position": [0.120, 0, 0],
      //                                                                     "rotation": [0, 0, 0],
      //                                                                     "scale": [1, 1, 1],
      //                                                                     "size": [0.002, 0.7, 1.3],
      //                                                                     "castShadow": true,
      //                                                                     "receiveShadow": true,
      //                                                                     "material": {
      //                                                                         "type":"phong",
      //                                                                         "color":[0.5, 0.5, 0.5],
      //                                                                         "opacity":1,
      //                                                                         "flatShading":false,
      //                                                                         "wireframe":false
      //                                                                     },
      //                                                                     "animation": [
      //                                                                         {
      //                                                                             "duration": 1000,
      //                                                                             "easing": "snap",
      //                                                                             "value": {
      //                                                                                 "visible": false   
      //                                                                             }
      //                                                                         },
      //                                                                         {
      //                                                                             "duration": 1000,
      //                                                                             "easing": "snap",
      //                                                                             "value": {
      //                                                                                 "visible": true
      //                                                                             }
      //                                                                         },
      //                                                                         {
      //                                                                             "duration": 2000,
      //                                                                             "easing": "snap",
      //                                                                             "value": {
      //                                                                                 "visible": false
      //                                                                             }
      //                                                                         }
                                                                              
      //                                                                     ]
      //                                                                 }
      //                                                             ]
      //                                                         }
      //                                                     ]
      //                                                 }
      //                                             ]
      //                                         }
      //                                     ]
      //                                 }
      //                             ]
      //                         }
      //                     ]
      //                 }
      //             ]
      //         },
      //         {
      //             "type": "pointLight",
      //             "position": [-0.5, 3, 0.5],
      //             "rotation": [0, 0, 0],
      //             "scale": [1, 1, 1],
      //             "color": [1, 1, 1],
      //             "intensity": 0.4
      //         }
      //     ]
      // },
      {
          "name": "slide 2",
          "type": "group",
          "position": [9.5, 0, -9.5],
          "rotation": [0, 0, 0],
          "scale": [1, 1, 1],
          "children": [
              {
                  "type": "group",
                  "position": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1],
                  "castShadow": true,
                  "receiveShadow": true,
                  "animation": [
                      {
                          "duration": 16000,
                          "easing": "linear",
                          "value": {
                              "rotation": [0, 6.28, 0]
                          }
                      },
                      {
                          "duration": 0,
                          "easing": "linear",
                          "value": {
                              "rotation": [0, 0, 0]
                          }
                      }
                  ],
                  "children": [
                      {
                          "type": "extruded2d",
                          "url": "./gear.svg",
                          "position": [0, 0, 0],
                          "rotation": [-1.57, 0, 0],
                          "scale": [0.001, 0.001, 1],
                          "extrudeSettings": {
                              "depth": 0.4,
                              "bevelEnabled": false
                          },
                          "castShadow": true,
                          "receiveShadow": true,
                          "material": {
                              "type":"phong",
                              "color":[0.4, 0.4, 0.5],
                              "opacity":1,
                              "flatShading":false,
                              "wireframe":false
                          }
                      },
                      {
                          "type": "text",
                          "position": [-0.3, 0.4, -0.1],
                          "rotation": [0, 0, 0],
                          "scale": [0.1, 0.1, 0.1],
                          "text": "ECDL",
                          "size": 2,
                          "height": 2,
                          "font": "./Open Sans_Bold.json",
                          "bevelEnabled": false,
                          "castShadow": true,
                          "receiveShadow": true,
                          "material": {
                              "type":"phong",
                              "color":[0.2, 0.52, 0.2],
                              "opacity":1,
                              "flatShading":false,
                              "wireframe":false
                          }
                      }
                  ]
              },
              {
                  "type": "group",
                  "position": [-3, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1],
                  "castShadow": true,
                  "receiveShadow": true,
                  "animation": [
                      {
                          "duration": 16000,
                          "easing": "linear",
                          "value": {
                              "rotation": [0, 6.28, 0]
                          }
                      },
                      {
                          "duration": 0,
                          "easing": "linear",
                          "value": {
                              "rotation": [0, 0, 0]
                          }
                      }
                  ],
                  "children": [
                      {
                          "type": "object",
                          "url": "./3d models/press/structure.obj",
                          "position": [0, 1, 0],
                          "rotation": [0, 0, 0],
                          "scale": [0.1, 0.1, 0.1],
                          "castShadow": true,
                          "receiveShadow": true,
                          "material": {
                              "type":"phong",
                              "color":[0.4, 0.4, 0.5],
                              "opacity":1,
                              "wireframe":false
                          }
                      },
                      {
                          "type": "3mf",
                          "url": "./3d models/Gear.3mf",
                          "position": [0, 0, 0.5],
                          "rotation": [-Math.PI/2, 0, 0],
                          "scale": [0.1, 0.1, 0.1],
                          "castShadow": true,
                          "receiveShadow": true,
                          "material": {
                              "type":"phong",
                              "color":[0.7, 0.4, 0.5],
                              "opacity":1,
                              "wireframe":false
                          }
                      },
                      {
                          "type": "text",
                          "position": [-0.3, 0.4, -0.1],
                          "rotation": [0, 0, 0],
                          "scale": [0.1, 0.1, 0.1],
                          "text": "hello world",
                          "size": 2,
                          "height": 2,
                          "font": "./Open Sans_Bold.json",
                          "bevelEnabled": false,
                          "castShadow": true,
                          "receiveShadow": true,
                          "material": {
                              "type":"phong",
                              "color":[0.2, 0.52, 0.2],
                              "opacity":1,
                              "flatShading":false,
                              "wireframe":false
                          }
                      }
                  ]
              },
              {
                  "type": "pointLight",
                  "position": [3, 5, 5],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1],
                  "color": [1, 1, 1],
                  "intensity": 0.4,
                  "distance": 17,
                  "castShadow": true
              }
          ]
      },
      {
        "name": "slide 6",
        "type": "group",
        "position": [0, 0, 0],
        "rotation": [0, 0, 0],
        "scale": [1, 1, 1],
        "children": [
            {
                "type": "group",
                "position": [0, 0, 0],
                "rotation": [0, 0, 0],
                "scale": [1, 1, 1],
                "castShadow": true,
                "receiveShadow": true,
                "animation": [
                    {
                        "duration": 16000,
                        "easing": "linear",
                        "value": {
                            "rotation": [0, 6.28, 0]
                        }
                    },
                    {
                        "duration": 0,
                        "easing": "linear",
                        "value": {
                            "rotation": [0, 0, 0]
                        }
                    }
                ],
                "children": [
                    {
                        "type": "extruded2d",
                        "url": "./gear.svg",
                        "position": [0, 0, 0],
                        "rotation": [-1.57, 0, 0],
                        "scale": [0.001, 0.001, 1],
                        "extrudeSettings": {
                            "depth": 0.4,
                            "bevelEnabled": false
                        },
                        "castShadow": true,
                        "receiveShadow": true,
                        "material": {
                            "type":"phong",
                            "color":[0.4, 0.4, 0.5],
                            "opacity":1,
                            "flatShading":false,
                            "wireframe":false
                        }
                    },
                    {
                        "type": "text",
                        "position": [-0.3, 0.4, -0.1],
                        "rotation": [0, 0, 0],
                        "scale": [0.1, 0.1, 0.1],
                        "text": "ECDL",
                        "size": 2,
                        "height": 2,
                        "font": "./Open Sans_Bold.json",
                        "bevelEnabled": false,
                        "castShadow": true,
                        "receiveShadow": true,
                        "material": {
                            "type":"phong",
                            "color":[0.2, 0.52, 0.2],
                            "opacity":1,
                            "flatShading":false,
                            "wireframe":false
                        }
                    }
                ]
            },
            {
                "type": "group",
                "position": [-3, 0, 0],
                "rotation": [0, 0, 0],
                "scale": [1, 1, 1],
                "castShadow": true,
                "receiveShadow": true,
                "animation": [
                    {
                        "duration": 16000,
                        "easing": "linear",
                        "value": {
                            "rotation": [0, 6.28, 0]
                        }
                    },
                    {
                        "duration": 0,
                        "easing": "linear",
                        "value": {
                            "rotation": [0, 0, 0]
                        }
                    }
                ],
                "children": [
                    {
                        "type": "object",
                        "url": "./3d models/press/structure.obj",
                        "position": [0, 1, 0],
                        "rotation": [0, 0, 0],
                        "scale": [0.1, 0.1, 0.1],
                        "castShadow": true,
                        "receiveShadow": true,
                        "material": {
                            "type":"phong",
                            "color":[0.4, 0.4, 0.5],
                            "opacity":1,
                            "wireframe":false
                        }
                    },
                    {
                        "type": "3mf",
                        "url": "./3d models/Gear.3mf",
                        "position": [0, 0, 0.5],
                        "rotation": [-Math.PI/2, 0, 0],
                        "scale": [0.1, 0.1, 0.1],
                        "castShadow": true,
                        "receiveShadow": true,
                        "material": {
                            "type":"phong",
                            "color":[0.7, 0.4, 0.5],
                            "opacity":1,
                            "wireframe":false
                        }
                    },
                    {
                        "type": "text",
                        "position": [-0.3, 0.4, -0.1],
                        "rotation": [0, 0, 0],
                        "scale": [0.1, 0.1, 0.1],
                        "text": "hello world",
                        "size": 2,
                        "height": 2,
                        "font": "./Open Sans_Bold.json",
                        "bevelEnabled": false,
                        "castShadow": true,
                        "receiveShadow": true,
                        "material": {
                            "type":"phong",
                            "color":[0.2, 0.52, 0.2],
                            "opacity":1,
                            "flatShading":false,
                            "wireframe":false
                        }
                    }
                ]
            },
            {
                "type": "pointLight",
                "position": [3, 5, 5],
                "rotation": [0, 0, 0],
                "scale": [1, 1, 1],
                "color": [1, 1, 1],
                "intensity": 0.4,
                "distance": 17,
                "castShadow": true
            }
        ]
    },
      // {
      //     "name": "slide 3-4",
      //     "type": "group",
      //     "position": [19.7, 0, -19.5],
      //     "rotation": [0, 0, 0],
      //     "scale": [1, 1, 1],
      //     "children": [
      //         {
      //             "type": "group",
      //             "position": [0, 0, 0],
      //             "rotation": [0, 0, 0],
      //             "scale": [2, 2, 2],
      //             "castShadow": true,
      //             "receiveShadow": true,
      //             "children": [
      //                 {
      //                     "type": "object",
      //                     "url": "./3d models/racer/1.obj",
      //                     "position": [0, 0, 0],
      //                     "rotation": [0, -0.9, 0],
      //                     "scale": [1, 1, 1],
      //                     "castShadow": true,
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.5, 0.5, 0.5],
      //                         "opacity":1,
      //                         "flatShading":false,
      //                         "wireframe":false
      //                     }
      //                 },
      //                 {
      //                     "type": "object",
      //                     "url": "./3d models/racer/2.obj",
      //                     "position": [0, 0, 0],
      //                     "rotation": [0, -3.14, 0],
      //                     "scale": [1, 1, 1],
      //                     "castShadow": true,
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.5, 0.5, 0.5],
      //                         "opacity":1,
      //                         "flatShading":false,
      //                         "wireframe":false
      //                     },
      //                     "slides":[
      //                         {
      //                             "copy": 2
      //                         },
      //                         {
      //                             "copy": 2
      //                         },
      //                         {
      //                             "duration": 2000,
      //                             "easing": "easeInOut",
      //                             "value": {
      //                                 "rotation": [0, -3.14, 0],
      //                                 "animation": [
      //                                     {
      //                                         "duration": 20000,
      //                                         "easing": "linear",
      //                                         "value": {
      //                                             "rotation": [0, -3.14, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 2000,
      //                                         "easing": "easeInOut",
      //                                         "value": {
      //                                             "rotation": [0, 3.14, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 2000,
      //                                         "easing": "easeInOut",
      //                                         "value": {
      //                                             "rotation": [0, -3.14, 0]
      //                                         }
      //                                     }
      //                                 ]
      //                             }
      //                         },
      //                         {
      //                             "duration": 2000,
      //                             "easing": "easeInOut",
      //                             "value": {
      //                                 "rotation": [0, 0, 0],
      //                                 "animation": [
      //                                     {
      //                                         "duration": 1000,
      //                                         "easing": "easeInOut",
      //                                         "value": {
      //                                             "rotation": [0, -0.46, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 3000,
      //                                         "easing": "linear",
      //                                         "value": {
      //                                             "rotation": [0, -0.46, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 1000,
      //                                         "easing": "easeInOut",
      //                                         "value": {
      //                                             "rotation": [0, 0.46, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 3000,
      //                                         "easing": "linear",
      //                                         "value": {
      //                                             "rotation": [0, 0.46, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 1000,
      //                                         "easing": "easeInOut",
      //                                         "value": {
      //                                             "rotation": [0, 0, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 3000,
      //                                         "easing": "linear",
      //                                         "value": {
      //                                             "rotation": [0, 0, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 1000,
      //                                         "easing": "easeInOut",
      //                                         "value": {
      //                                             "rotation": [0, -0.46, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 3000,
      //                                         "easing": "linear",
      //                                         "value": {
      //                                             "rotation": [0, -0.46, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 1000,
      //                                         "easing": "easeInOut",
      //                                         "value": {
      //                                             "rotation": [0, 0.46, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 3000,
      //                                         "easing": "linear",
      //                                         "value": {
      //                                             "rotation": [0, 0.46, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 1000,
      //                                         "easing": "easeInOut",
      //                                         "value": {
      //                                             "rotation": [0, 0, 0]
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 3000,
      //                                         "easing": "linear",
      //                                         "value": {
      //                                             "rotation": [0, 0, 0]
      //                                         }
      //                                     }
      //                                 ]
      //                             }
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         }
      //                     ],
      //                     "children": [
      //                         {
      //                             "type": "object",
      //                             "url": "./3d models/racer/2_black.obj",
      //                             "position": [0, 0, 0],
      //                             "rotation": [0, 0, 0],
      //                             "scale": [1, 1, 1],
      //                             "castShadow": true,
      //                             "material": {
      //                                 "type":"phong",
      //                                 "color":[0.2, 0.2, 0.2],
      //                                 "opacity":1,
      //                                 "flatShading":false,
      //                                 "wireframe":false
      //                             }
      //                         },
      //                         {
      //                             "type": "object",
      //                             "url": "./3d models/racer/3.obj",
      //                             "position": [0.04, 0.36, 0],
      //                             "rotation": [0, 0, 0],
      //                             "scale": [1, 1, 1],
      //                             "castShadow": true,
      //                             "material": {
      //                                 "type":"phong",
      //                                 "color":[0.5, 0.5, 0.5],
      //                                 "opacity":1,
      //                                 "flatShading":false,
      //                                 "wireframe":false
      //                             },
      //                             "slides":[
      //                                 {
      //                                     "copy": 2
      //                                 },
      //                                 {
      //                                     "copy": 2
      //                                 },
      //                                 {
      //                                     "duration": 2000,
      //                                     "easing": "easeInOut",
      //                                     "value": {
      //                                         "rotation": [0, 0, 0],
      //                                         "animation": [
      //                                             {
      //                                                 "duration": 2000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.52]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 2000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.59]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 2000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, 0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 12000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, 0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 2000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, 0]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 4000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, 0]
      //                                                 }
      //                                             }
      //                                         ]
      //                                     }
      //                                 },
      //                                 {
      //                                     "duration": 2000,
      //                                     "easing": "easeInOut",
      //                                     "value": {
      //                                         "rotation": [0, 0, 0],
      //                                         "animation": [
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.365]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.365]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.365]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.365]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.7]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.295]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.295]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.7]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.365]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.365]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.365]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.365]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.8]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.7]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.295]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "linear",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -1.295]
      //                                                 }
      //                                             },
      //                                             {
      //                                                 "duration": 1000,
      //                                                 "easing": "easeInOut",
      //                                                 "value": {
      //                                                     "rotation": [0, 0, -0.7]
      //                                                 }
      //                                             }
      //                                         ]
      //                                     }
      //                                 },
      //                                 {
      //                                     "copy": 3
      //                                 },
      //                                 {
      //                                     "copy": 3
      //                                 },
      //                                 {
      //                                     "copy": 3
      //                                 },
      //                                 {
      //                                     "copy": 3
      //                                 }
      //                             ],
      //                             "children": [
      //                                 {
      //                                     "type": "object",
      //                                     "url": "./3d models/racer/3_black.obj",
      //                                     "position": [0, 0, 0],
      //                                     "rotation": [0, 0, 0],
      //                                     "scale": [1, 1, 1],
      //                                     "castShadow": true,
      //                                     "material": {
      //                                         "type":"phong",
      //                                         "color":[0.2, 0.2, 0.2],
      //                                         "opacity":1,
      //                                         "flatShading":false,
      //                                         "wireframe":false
      //                                     }
      //                                 },
      //                                 {
      //                                     "type": "object",
      //                                     "url": "./3d models/racer/4.obj",
      //                                     "position": [0, 0.275, 0],
      //                                     "rotation": [0, 0, 0],
      //                                     "scale": [1, 1, 1],
      //                                     "castShadow": true,
      //                                     "material": {
      //                                         "type":"phong",
      //                                         "color":[0.5, 0.5, 0.5],
      //                                         "opacity":1,
      //                                         "flatShading":false,
      //                                         "wireframe":false
      //                                     },
      //                                     "slides":[
      //                                         {
      //                                             "copy": 2
      //                                         },
      //                                         {
      //                                             "copy": 2
      //                                         },
      //                                         {
      //                                             "duration": 2000,
      //                                             "easing": "easeInOut",
      //                                             "value": {
      //                                                 "rotation": [0, 0, 0],
      //                                                 "animation": [
      //                                                     {
      //                                                         "duration": 2000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.5]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 2000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 1.37]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 2000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.6]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 12000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.6]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 2000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 1.57]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 2000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 1.57]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 2000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0]
      //                                                         }
      //                                                     }
      //                                                 ]
      //                                             }
      //                                         },
      //                                         {
      //                                             "duration": 2000,
      //                                             "easing": "easeInOut",
      //                                             "value": {
      //                                                 "rotation": [0, 0, 0],
      //                                                 "animation": [
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.2]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.1]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.1]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.2]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.2]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.1]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.1]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.2]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.43]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.13]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.13]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.43]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.2]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.1]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.1]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.2]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.2]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.1]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, 0.1]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.2]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.43]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.13]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "linear",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.13]
      //                                                         }
      //                                                     },
      //                                                     {
      //                                                         "duration": 1000,
      //                                                         "easing": "easeInOut",
      //                                                         "value": {
      //                                                             "rotation": [0, 0, -0.43]
      //                                                         }
      //                                                     }
      //                                                 ]
      //                                             }
      //                                         },
      //                                         {
      //                                             "copy": 3
      //                                         },
      //                                         {
      //                                             "copy": 3
      //                                         },
      //                                         {
      //                                             "copy": 3
      //                                         },
      //                                         {
      //                                             "copy": 3
      //                                         }
      //                                     ],
      //                                     "children": [
      //                                         {
      //                                             "type": "object",
      //                                             "url": "./3d models/racer/5.obj",
      //                                             "position": [0.068, 0.05, 0],
      //                                             "rotation": [0, 0, 0],
      //                                             "scale": [1, 1, 1],
      //                                             "castShadow": true,
      //                                             "material": {
      //                                                 "type":"phong",
      //                                                 "color":[0.5, 0.5, 0.5],
      //                                                 "opacity":1,
      //                                                 "flatShading":false,
      //                                                 "wireframe":false
      //                                             },
      //                                             "slides":[
      //                                                 {
      //                                                     "copy": 2
      //                                                 },
      //                                                 {
      //                                                     "copy": 2
      //                                                 },
      //                                                 {
      //                                                     "duration": 2000,
      //                                                     "easing": "easeInOut",
      //                                                     "value": {
      //                                                         "rotation": [0, 0, 0],
      //                                                         "animation": [
      //                                                             {
      //                                                                 "duration": 2000,
      //                                                                 "easing": "linear",
      //                                                                 "value": {
      //                                                                     "rotation": [0, 0, 0]
      //                                                                 }
      //                                                             },
      //                                                             {
      //                                                                 "duration": 2000,
      //                                                                 "easing": "linear",
      //                                                                 "value": {
      //                                                                     "rotation": [6.28, 0, 0]
      //                                                                 }
      //                                                             },
      //                                                             {
      //                                                                 "duration": 2000,
      //                                                                 "easing": "linear",
      //                                                                 "value": {
      //                                                                     "rotation": [0, 0, 0]
      //                                                                 }
      //                                                             },
      //                                                             {
      //                                                                 "duration": 4000,
      //                                                                 "easing": "linear",
      //                                                                 "value": {
      //                                                                     "rotation": [0, 0, 0]
      //                                                                 }
      //                                                             },
      //                                                             {
      //                                                                 "duration": 2000,
      //                                                                 "easing": "linear",
      //                                                                 "value": {
      //                                                                     "rotation": [1.57, 0, 0]
      //                                                                 }
      //                                                             },
      //                                                             {
      //                                                                 "duration": 4000,
      //                                                                 "easing": "linear",
      //                                                                 "value": {
      //                                                                     "rotation": [1.57, 0, 0]
      //                                                                 }
      //                                                             },
      //                                                             {
      //                                                                 "duration": 2000,
      //                                                                 "easing": "linear",
      //                                                                 "value": {
      //                                                                     "rotation": [0, 0, 0]
      //                                                                 }
      //                                                             },
      //                                                             {
      //                                                                 "duration": 6000,
      //                                                                 "easing": "linear",
      //                                                                 "value": {
      //                                                                     "rotation": [0, 0, 0]
      //                                                                 }
      //                                                             }
      //                                                         ]
      //                                                     }
      //                                                 },
      //                                                 {
      //                                                     "duration": 2000,
      //                                                     "easing": "easeInOut",
      //                                                     "value": {
      //                                                         "rotation": [0, 0, 0],
      //                                                         "animation": false
      //                                                     }
      //                                                 },
      //                                                 {
      //                                                     "copy": 3
      //                                                 },
      //                                                 {
      //                                                     "copy": 3
      //                                                 },
      //                                                 {
      //                                                     "copy": 3
      //                                                 },
      //                                                 {
      //                                                     "copy": 3
      //                                                 }
      //                                             ],
      //                                             "children": [
      //                                                 {
      //                                                     "type": "object",
      //                                                     "url": "./3d models/racer/5_black.obj",
      //                                                     "position": [0, 0, 0],
      //                                                     "rotation": [0, 0, 0],
      //                                                     "scale": [1, 1, 1],
      //                                                     "castShadow": true,
      //                                                     "material": {
      //                                                         "type":"phong",
      //                                                         "color":[0.2, 0.2, 0.2],
      //                                                         "opacity":1,
      //                                                         "flatShading":false,
      //                                                         "wireframe":false
      //                                                     }
      //                                                 },
      //                                                 {
      //                                                     "type": "object",
      //                                                     "url": "./3d models/racer/6.obj",
      //                                                     "position": [0.24, 0, 0],
      //                                                     "rotation": [0, 0, 0],
      //                                                     "scale": [1, 1, 1],
      //                                                     "castShadow": true,
      //                                                     "material": {
      //                                                         "type":"phong",
      //                                                         "color":[0.5, 0.5, 0.5],
      //                                                         "opacity":1,
      //                                                         "flatShading":false,
      //                                                         "wireframe":false
      //                                                     },
      //                                                     "slides":[
      //                                                         {
      //                                                             "copy": 2
      //                                                         },
      //                                                         {
      //                                                             "copy": 2
      //                                                         },
      //                                                         {
      //                                                             "duration": 2000,
      //                                                             "easing": "easeInOut",
      //                                                             "value": {
      //                                                                 "rotation": [0, 0, 0],
      //                                                                 "animation": [
      //                                                                     {
      //                                                                         "duration": 6000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, 0]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 2000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -1.5]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 2000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, 1.5]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 2000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, 0]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 12000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, 0]
      //                                                                         }
      //                                                                     }
      //                                                                 ]
      //                                                             }
      //                                                         },
      //                                                         {
      //                                                             "duration": 2000,
      //                                                             "easing": "easeInOut",
      //                                                             "value": {
      //                                                                 "rotation": [0, 0, 0],
      //                                                                 "animation": [
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.53]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.33]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.33]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.53]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.53]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.33]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.33]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.53]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.4]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.13]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.13]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.4]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.53]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.33]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.33]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.53]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.53]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.33]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.33]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.53]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.4]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.13]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "linear",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.13]
      //                                                                         }
      //                                                                     },
      //                                                                     {
      //                                                                         "duration": 1000,
      //                                                                         "easing": "easeInOut",
      //                                                                         "value": {
      //                                                                             "rotation": [0, 0, -0.4]
      //                                                                         }
      //                                                                     }
      //                                                                 ]
      //                                                             }
      //                                                         },
      //                                                         {
      //                                                             "copy": 3
      //                                                         },
      //                                                         {
      //                                                             "copy": 3
      //                                                         },
      //                                                         {
      //                                                             "copy": 3
      //                                                         },
      //                                                         {
      //                                                             "copy": 3
      //                                                         }
      //                                                     ],
      //                                                     "children": [
      //                                                         {
      //                                                             "type": "object",
      //                                                             "url": "./3d models/racer/6_black.obj",
      //                                                             "position": [0, 0, 0],
      //                                                             "rotation": [0, 0, 0],
      //                                                             "scale": [1, 1, 1],
      //                                                             "castShadow": true,
      //                                                             "material": {
      //                                                                 "type":"phong",
      //                                                                 "color":[0.2, 0.2, 0.2],
      //                                                                 "opacity":1,
      //                                                                 "flatShading":false,
      //                                                                 "wireframe":false
      //                                                             }
      //                                                         },
      //                                                         {
      //                                                             "type": "object",
      //                                                             "url": "./3d models/racer/7.obj",
      //                                                             "position": [0.08, 0, 0],
      //                                                             "rotation": [0, 0, 0],
      //                                                             "scale": [1, 1, 1],
      //                                                             "castShadow": true,
      //                                                             "material": {
      //                                                                 "type":"phong",
      //                                                                 "color":[0.5, 0.5, 0.5],
      //                                                                 "opacity":1,
      //                                                                 "flatShading":false,
      //                                                                 "wireframe":false
      //                                                             },
      //                                                             "slides":[
      //                                                                 {
      //                                                                     "copy": 2
      //                                                                 },
      //                                                                 {
      //                                                                     "copy": 2
      //                                                                 },
      //                                                                 {
      //                                                                     "duration": 2000,
      //                                                                     "easing": "easeInOut",
      //                                                                     "value": {
      //                                                                         "rotation": [0, 0, 0],
      //                                                                         "animation": false
      //                                                                     }
      //                                                                 },
      //                                                                 {
      //                                                                     "duration": 2000,
      //                                                                     "easing": "easeInOut",
      //                                                                     "value": {
      //                                                                         "rotation": [0, 0, 0],
      //                                                                         "animation": [
      //                                                                             {
      //                                                                                 "duration": 1000,
      //                                                                                 "easing": "easeInOut",
      //                                                                                 "value": {
      //                                                                                     "rotation": [-0.46, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 3000,
      //                                                                                 "easing": "linear",
      //                                                                                 "value": {
      //                                                                                     "rotation": [-0.46, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 1000,
      //                                                                                 "easing": "easeInOut",
      //                                                                                 "value": {
      //                                                                                     "rotation": [0.46, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 3000,
      //                                                                                 "easing": "linear",
      //                                                                                 "value": {
      //                                                                                     "rotation": [0.46, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 1000,
      //                                                                                 "easing": "easeInOut",
      //                                                                                 "value": {
      //                                                                                     "rotation": [0, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 3000,
      //                                                                                 "easing": "linear",
      //                                                                                 "value": {
      //                                                                                     "rotation": [0, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 1000,
      //                                                                                 "easing": "easeInOut",
      //                                                                                 "value": {
      //                                                                                     "rotation": [-0.46, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 3000,
      //                                                                                 "easing": "linear",
      //                                                                                 "value": {
      //                                                                                     "rotation": [-0.46, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 1000,
      //                                                                                 "easing": "easeInOut",
      //                                                                                 "value": {
      //                                                                                     "rotation": [0.46, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 3000,
      //                                                                                 "easing": "linear",
      //                                                                                 "value": {
      //                                                                                     "rotation": [0.46, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 1000,
      //                                                                                 "easing": "easeInOut",
      //                                                                                 "value": {
      //                                                                                     "rotation": [0, 0, 0]
      //                                                                                 }
      //                                                                             },
      //                                                                             {
      //                                                                                 "duration": 3000,
      //                                                                                 "easing": "linear",
      //                                                                                 "value": {
      //                                                                                     "rotation": [0, 0, 0]
      //                                                                                 }
      //                                                                             }
      //                                                                         ]
      //                                                                     }
      //                                                                 },
      //                                                                 {
      //                                                                     "copy": 3
      //                                                                 },
      //                                                                 {
      //                                                                     "copy": 3
      //                                                                 },
      //                                                                 {
      //                                                                     "copy": 3
      //                                                                 },
      //                                                                 {
      //                                                                     "copy": 3
      //                                                                 }
      //                                                             ],
      //                                                             "children": [
      //                                                                 {
      //                                                                     "type": "object",
      //                                                                     "url": "./3d models/racer/8.obj",
      //                                                                     "position": [0, 0, 0],
      //                                                                     "rotation": [0, 0, 0],
      //                                                                     "scale": [1, 1, 1],
      //                                                                     "castShadow": true,
      //                                                                     "material": {
      //                                                                         "type":"phong",
      //                                                                         "color":[0.5, 0.5, 0.5],
      //                                                                         "opacity":1,
      //                                                                         "flatShading":false,
      //                                                                         "wireframe":false
      //                                                                     },
      //                                                                     "slides":[
      //                                                                         {
      //                                                                             "copy": 2
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 2
      //                                                                         },
      //                                                                         {
      //                                                                             "duration": 2000,
      //                                                                             "easing": "easeInOut",
      //                                                                             "value": {
      //                                                                                 "position": [0, 0, 0],
      //                                                                                 "animation": [
      //                                                                                     {
      //                                                                                         "duration": 12250,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 1000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, -0.02]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, -0.02]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 1000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 9250,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0]
      //                                                                                         }
      //                                                                                     }
      //                                                                                 ]
      //                                                                             }
      //                                                                         },
      //                                                                         {
      //                                                                             "duration": 2000,
      //                                                                             "easing": "easeInOut",
      //                                                                             "value": {
      //                                                                                 "position": [0, 0, -0.02],
      //                                                                                 "animation": [
      //                                                                                     {
      //                                                                                         "duration": 2000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, -0.02]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, -0.012]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 4000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, -0.012]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, -0.02]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 1000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, -0.02]
      //                                                                                         }
      //                                                                                     }
      //                                                                                 ]
      //                                                                             }
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         }
      //                                                                     ]
      //                                                                 },
      //                                                                 {
      //                                                                     "type": "object",
      //                                                                     "url": "./3d models/racer/8.obj",
      //                                                                     "position": [0, 0, 0],
      //                                                                     "rotation": [3.14, 0, 0],
      //                                                                     "scale": [1, 1, 1],
      //                                                                     "castShadow": true,
      //                                                                     "material": {
      //                                                                         "type":"phong",
      //                                                                         "color":[0.5, 0.5, 0.5],
      //                                                                         "opacity":1,
      //                                                                         "flatShading":false,
      //                                                                         "wireframe":false
      //                                                                     },
      //                                                                     "slides":[
      //                                                                         {
      //                                                                             "copy": 2
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 2
      //                                                                         },
      //                                                                         {
      //                                                                             "duration": 2000,
      //                                                                             "easing": "easeInOut",
      //                                                                             "value": {
      //                                                                                 "position": [0, 0, 0],
      //                                                                                 "animation": [
      //                                                                                     {
      //                                                                                         "duration": 12250,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 1000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0.02]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0.02]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 1000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 9250,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0]
      //                                                                                         }
      //                                                                                     }
      //                                                                                 ]
      //                                                                             }
      //                                                                         },
      //                                                                         {
      //                                                                             "duration": 2000,
      //                                                                             "easing": "easeInOut",
      //                                                                             "value": {
      //                                                                                 "position": [0, 0, 0.02],
      //                                                                                 "animation": [
      //                                                                                     {
      //                                                                                         "duration": 2000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0.02]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0.012]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 4000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0.012]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0.02]
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 1000,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "position": [0, 0, 0.02]
      //                                                                                         }
      //                                                                                     }
      //                                                                                 ]
      //                                                                             }
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         }
      //                                                                     ]
      //                                                                 },
      //                                                                 {
      //                                                                     "type": "box",
      //                                                                     "position": [0.04, 0, 0],
      //                                                                     "rotation": [0, 0, 0],
      //                                                                     "scale": [1, 1, 1],
      //                                                                     "size": [0.025, 0.025, 0.025],
      //                                                                     "castShadow": true,
      //                                                                     "receiveShadow": true,
      //                                                                     "material": {
      //                                                                         "type":"phong",
      //                                                                         "color":[0.3, 0.4, 0.8],
      //                                                                         "opacity":1,
      //                                                                         "flatShading":false,
      //                                                                         "wireframe":false
      //                                                                     },
      //                                                                     "slides": [
      //                                                                         {
      //                                                                             "copy": 2
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 2
      //                                                                         },
      //                                                                         {
      //                                                                             "duration": 0,
      //                                                                             "easing": "linear",
      //                                                                             "value": {
      //                                                                                 "animation": false,
      //                                                                                 "visible": false
      //                                                                             }
      //                                                                         },
      //                                                                         {
      //                                                                             "duration": 1000,
      //                                                                             "easing": "linear",
      //                                                                             "value": {
      //                                                                                 "visible": false,
      //                                                                                 "animation": [
      //                                                                                     {
      //                                                                                         "duration": 3500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "visible": false
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "visible": true
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 3500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "visible": true
      //                                                                                         }
      //                                                                                     },
      //                                                                                     {
      //                                                                                         "duration": 500,
      //                                                                                         "easing": "linear",
      //                                                                                         "value": {
      //                                                                                             "visible": false
      //                                                                                         }
      //                                                                                     }
      //                                                                                 ]
      //                                                                             }
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         },
      //                                                                         {
      //                                                                             "copy": 3
      //                                                                         }
      //                                                                     ]
      //                                                                 }
      //                                                             ]
      //                                                         }
      //                                                     ]
      //                                                 }
      //                                             ]
      //                                         }
      //                                     ]
      //                                 }
      //                             ]
      //                         }
      //                     ]
      //                 }
      //             ]
      //         },
      //         {
      //             "type": "group",
      //             "name": "boxes",
      //             "position": [0.8, -0.4, 0],
      //             "rotation": [0, 0, 0],
      //             "scale": [1, 1, 1],
      //             "castShadow": true,
      //             "receiveShadow": true,
      //             "children": [
      //                 {
      //                     "type": "box",
      //                     "position": [0, 0, 0.4],
      //                     "rotation": [0, 0, 0],
      //                     "scale": [1, 1, 1],
      //                     "size": [0.05, 0.05, 0.05],
      //                     "castShadow": true,
      //                     "receiveShadow": true,
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.3, 0.4, 0.8],
      //                         "opacity":1,
      //                         "flatShading":false,
      //                         "wireframe":false
      //                     },
      //                     "slides": [
      //                         {
      //                             "copy": 2
      //                         },
      //                         {
      //                             "copy": 2
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "linear",
      //                             "value": {
      //                                 "animation": false
      //                             }
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "linear",
      //                             "value": {
      //                                 "animation": [
      //                                     {
      //                                         "duration": 4000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": false
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 12000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": true
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 8000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": true
      //                                         }
      //                                     }
      //                                 ]
      //                             }
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         }
      //                     ]
      //                 },
      //                 {
      //                     "type": "box",
      //                     "position": [0, 0, 0],
      //                     "rotation": [0, 0, 0],
      //                     "scale": [1, 1, 1],
      //                     "size": [0.05, 0.05, 0.05],
      //                     "castShadow": true,
      //                     "receiveShadow": true,
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.3, 0.4, 0.8],
      //                         "opacity":1,
      //                         "flatShading":false,
      //                         "wireframe":false
      //                     },
      //                     "slides": [
      //                         {
      //                             "copy": 2
      //                         },
      //                         {
      //                             "copy": 2
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "linear",
      //                             "value": {
      //                                 "animation": false
      //                             }
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "linear",
      //                             "value": {
      //                                 "animation": [
      //                                     {
      //                                         "duration": 8000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": true
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 4000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": false
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 12000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": true
      //                                         }
      //                                     }
      //                                 ]
      //                             }
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         }
      //                     ]
      //                 },
      //                 {
      //                     "type": "box",
      //                     "position": [0, 0, -0.4],
      //                     "rotation": [0, 0, 0],
      //                     "scale": [1, 1, 1],
      //                     "size": [0.05, 0.05, 0.05],
      //                     "castShadow": true,
      //                     "receiveShadow": true,
      //                     "material": {
      //                         "type":"phong",
      //                         "color":[0.3, 0.4, 0.8],
      //                         "opacity":1,
      //                         "flatShading":false,
      //                         "wireframe":false
      //                     },
      //                     "slides": [
      //                         {
      //                             "copy": 2
      //                         },
      //                         {
      //                             "copy": 2
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "linear",
      //                             "value": {
      //                                 "animation": false
      //                             }
      //                         },
      //                         {
      //                             "duration": 1000,
      //                             "easing": "linear",
      //                             "value": {
      //                                 "visible": false,
      //                                 "animation": [
      //                                     {
      //                                         "duration": 8000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": true
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 12000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": false
      //                                         }
      //                                     },
      //                                     {
      //                                         "duration": 4000,
      //                                         "easing": "snap",
      //                                         "value": {
      //                                             "visible": false
      //                                         }
      //                                     }
      //                                 ]
      //                             }
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         },
      //                         {
      //                             "copy": 3
      //                         }
      //                     ]
      //                 }
      //             ],
      //             "slides": [
      //                 {
      //                     "copy": 2
      //                 },
      //                 {
      //                     "copy": 2
      //                 },
      //                 {
      //                     "duration": 2000,
      //                     "easing": "easeInOut",
      //                     "value": {
      //                         "position": [0.8, -0.4, 0]
      //                     }
      //                 },
      //                 {
      //                     "duration": 2000,
      //                     "easing": "easeInOut",
      //                     "value": {
      //                         "position": [0.8, 0.04, 0]
      //                     }
      //                 },
      //                 {
      //                     "copy": 3
      //                 },
      //                 {
      //                     "copy": 3
      //                 },
      //                 {
      //                     "copy": 3
      //                 },
      //                 {
      //                     "copy": 3
      //                 }
      //             ]
      //         },
      //         {
      //             "type": "pointLight",
      //             "position": [3, 5, 5],
      //             "rotation": [0, 0, 0],
      //             "scale": [1, 1, 1],
      //             "color": [1, 1, 1],
      //             "intensity": 0.4,
      //             "distance": 15,
      //             "castShadow": true
      //         }
      //     ]
      // },
      {
          "type": "ambientLight",
          "color": [1, 1, 1],
          "intensity": 0.8
      },
      {
          "type": "directionalLight",
          "position": [3, 5, 1],
          "color": [1, 1, 1],
          "shadowRadius": 2,
          "intensity": 0.2,
          "castShadow": true
      }
  ]
}
