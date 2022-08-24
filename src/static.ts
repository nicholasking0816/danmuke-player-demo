export function getDmkDesc(currentTime) {
    let posList = [-90,60,300,100,70,-140,300,300,-70,60,600,100,90,-140,600,300]
    return ['高', '级', '弹', '幕'].map((content, index) => {
        let start = 4 * index;
        return {
            timestamp: currentTime,
            layer: 'AdvanceLayer',
            content: content,
            duration: 6,
            animation: [
                {
                    type: 'Translate',
                    delay: 3.5,
                    duration: 0.5,
                    from: {
                        left: 0,
                        top: 0
                    },
                    to: {
                        left: posList[start + 0],
                        top: posList[start + 1]
                    }
                },
                {
                    type: 'Opacity',
                    delay: 1 + 0.5 * index,
                    duration: 0,
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                }
            ],
            style: {
                fontSize: '60px',
                position: 'absolute',
                left: `${posList[start + 2]}px`,
                top: `${posList[start + 3]}px`,
                opacity: 0,
                color: 'red',
            }
        }
    })
}

export function getDmkDesc2(currentTime) {
    let descList = [];
    for(let index = 0; index < 15; index ++) {
        let delay = 0 + 0.5 * index;
        descList.push(
            {
                timestamp: currentTime + 6,
                layer: 'AdvanceLayer',
                content: '我是平移的高级弹幕',
                duration: 10,
                animation: [
                    {
                        type: 'Translate',
                        delay: delay,
                        duration: 1.5,
                        from: {
                            left: 0,
                            top: 0
                        },
                        to: {
                            left: 1000,
                            top: 0
                        }
                    },
                    {
                        type: 'Translate',
                        delay: 1.5 + delay,
                        duration: 1.5,
                        from: {
                            left: 1000,
                            top: 0
                        },
                        to: {
                            left: 270,
                            top: 0
                        }
                    },
                ],
                style: {
                    fontSize: '30px',
                    lineHeight: '30px',
                    position: 'absolute',
                    left: '-270px',
                    top: `${40 * index}px`,
                    color: 'red',
                }
            }
        )
    }
    return descList;
}

export function getDmkDesc3(currentTime) {
    let descList = [];
    for(let i = 0; i < 12; i ++) {
        descList.push({
            timestamp: currentTime + 15,
            layer: 'AdvanceLayer',
            content: '我是旋转的高级弹幕',
            duration: 3.5,
            animation: [
                {
                    type: 'Rotate',
                    delay: 1,
                    duration: 1.5,
                    from: {
                        deg: 0
                    },
                    to: {
                        deg: 30 * i
                    }
                },
                {
                    type: 'Opacity',
                    delay: 1,
                    duration: 1.5,
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                },
            ],
            style: {
                fontSize: '20px',
                width: '240px',
                transformOrigin: '100% 50% 0',
                lineHeight: '20px',
                position: 'absolute',
                left: '270px',
                top: `271px`,
                opacity: 0,
                color: 'red',
            }
        })
    }
    return descList;
}

export function getDmkDesc4(currentTime) {
    let delay = 0, descList = [];
    [
        [
            '人生自古谁无死',
            '留取丹心照汗青'
        ],
        [
            '醒后不知天在水',
            '满船清梦压星河'
        ],
        [
            '六宫粉黛无颜色',
            '回眸一笑百媚生'
        ]
    ].forEach((verse, index) => {
        let pos = [100 + index * 100, 100];
        verse.forEach((line, index) => {
            for(let i = 0, len = line.length; i < len; i++) {
                delay += 0.3;
                descList.push({
                    timestamp: currentTime + 18,
                    layer: 'AdvanceLayer',
                    content: line.charAt(i),
                    duration: 14,
                    animation: [
                        {
                            type: 'Opacity',
                            delay: delay,
                            duration: 1,
                            from: {
                                opacity: 0
                            },
                            to: {
                                opacity: 1
                            }
                        },
                    ],
                    style: {
                        fontSize: '20px',
                        lineHeight: '20px',
                        position: 'absolute',
                        left: `${pos[0] + 30 * index}px`,
                        top: `${pos[1] + 25 * i}px`,
                        opacity: 0,
                        color: 'red',
                    }
                })
            }
        })
    })
    return descList;
}

export function getDmkDesc5(currentTime) {
    let contents = [
        '刘亦菲是我老婆',
        '迪丽热巴yyds',
        'javascript是世界上最好的语言',
        '赵丽颖是我前任',
        '赵露思是我初恋'
    ], descList = [];
    for(let i = 1; i < 30; i ++) {
        let delay = 0.3 * i, 
            distance = 100 + Math.round(100 * Math.random()),
            left = Math.round(distance * Math.random()), 
            directionX = Math.random() > 0.5 ? 1 : -1, 
            directionY = Math.random() > 0.5 ? 1 : -1,
            zIndex = 200;
        descList.push({
            timestamp: currentTime + 32,
            layer: 'AdvanceLayer',
            content: contents[Math.round(4 * Math.random())],
            duration: delay + 2,
            animation: [
                {
                    type: 'Translate',
                    delay: delay,
                    duration: 2,
                    from: {
                        left: 0,
                        top: 0
                    },
                    to: {
                        left: left * directionX,
                        top: Math.sqrt(distance ** 2 - left ** 2) * directionY
                    }
                },
                {
                    type: 'Opacity',
                    delay: delay,
                    duration: 2,
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                },
                {
                    type: 'Scale',
                    delay: delay,
                    duration: 2,
                    from: {
                        scale: 0.2
                    },
                    to: {
                        scale: 1
                    }
                },
            ],
            style: {
                fontSize: '20px',
                lineHeight: '20px',
                position: 'absolute',
                left: `300px`,
                transformOrigin: '50% 50% 0',
                top: `300px`,
                transform: 'scale(0.2,0.2)',
                opacity: 0,
                color: 'red',
                zIndex: zIndex - i
            }
        })
    }
    return descList
}

export function getDmkDesc6(currentTime) {
    return [
        '安史之乱是中国唐代玄宗末年至代宗初',
        '年(755年12月16日至763年2月17日)由',
        '唐朝将领安禄山与史思明背叛唐朝后发动',
        '的战争，是同唐朝争夺统治权的内战，为',
        '唐由盛而衰的转折点。这场内战使得唐朝',
        '人口大量丧失，国力锐减。因为发起反唐',
        '叛乱的指挥官以安禄山与史思明二人为主，',
        '因此事件被冠以安史之名。 [1]  又由于',
        '其爆发于唐玄宗天宝年间，也称天宝之乱。'
    ].map((content, index) => {
        let delay = index * 0.5;
        return {
            timestamp: currentTime + 43,
            layer: 'AdvanceLayer',
            content: content,
            duration: 30,
            animation: [
                {
                    type: 'Translate',
                    delay: delay,
                    duration: 5,
                    from: {
                        left: 0,
                        top: 0
                    },
                    to: {
                        left: 0,
                        top: -200
                    }
                },
                {
                    type: 'Opacity',
                    delay: delay,
                    duration: 5,
                    from: {
                        opacity: 1
                    },
                    to: {
                        opacity: 0
                    }
                },
                {
                    type: 'Opacity',
                    delay: delay,
                    duration: 0,
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                },
                {
                    type: 'Scale',
                    delay: delay,
                    duration: 5,
                    from: {
                        scale: 1
                    },
                    to: {
                        scale: 0.3
                    }
                }
            ],
            style: {
                fontSize: '20px',
                lineHeight: '20px',
                position: 'absolute',
                left: `300px`,
                transformOrigin: '50% 50% 0',
                top: `500px`,
                opacity: 0,
                color: 'red',
            },
            transformStr: 'rotateX(60deg)',
        }
    })
}