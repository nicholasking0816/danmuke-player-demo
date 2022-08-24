import * as React from 'react';
import {v4 as uuidV4} from 'uuid';
import { AdvanceDmkTrack, DanmukePlayer } from 'danmuke-player';
import './App.scss';
import { DmkLayer } from 'danmuke-player';
import { getDmkDesc, getDmkDesc2, getDmkDesc3, getDmkDesc4, getDmkDesc5, getDmkDesc6 } from './static';

export class App extends React.Component<any, any, any> {
    videoRef: any = React.createRef();
    player: DanmukePlayer;
    normalDanmukeRef: any = React.createRef();
    advanceDanmukeRef: any = React.createRef();
    dmkContainerRef: any = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
    }

    gDanmukes() {
        const danmukeList: any[] = [] as any;
        for(let i = 0; i < 100; i ++) {
            danmukeList.push({
                content: '夏目小天使yyds',
                id: uuidV4(),
                // layer: 'AdvanceLayer',
                timestamp: Math.floor(100 * Math.random()),
            })
        }
        return danmukeList;
    }

    palyAdvance() {
        this.setState({disabled: true});
        setTimeout(() => {
            this.setState({disabled: false});
        }, 60000);
        const currentTime = this.videoRef.current.currentTime;
        this.player.addDmkList(getDmkDesc(currentTime));
        this.player.addDmkList(getDmkDesc2(currentTime));
        this.player.addDmkList(getDmkDesc3(currentTime));
        this.player.addDmkList(getDmkDesc4(currentTime));
        this.player.addDmkList(getDmkDesc5(currentTime));
        this.player.addDmkList(getDmkDesc6(currentTime));
    }

    sendNormalDanmuke(): void {
        this.player.addDmkList([
            {
                content: this.normalDanmukeRef.current.value,
                id: uuidV4(),
                timestamp: this.videoRef.current.currentTime + 1,
                color: 'red',
            }
        ])
    }

    sendAdvanceDanmuke() {
        this.player.addDmkList([
            {
                timestamp: this.videoRef.current.currentTime + 1,
                layer: 'AdvanceLayer',
                content: this.advanceDanmukeRef.current.value,
                duration: 2,
                animation: [
                    {
                        type: 'Translate',
                        delay: 0,
                        duration: 1.5,
                        from: {
                            left: 0,
                            top: 0
                        },
                        to: {
                            left: Math.round(500 * Math.random()),
                            top: Math.round(500 * Math.random())
                        }
                    },
                ],
                style: {
                    fontSize: '30px',
                    lineHeight: '30px',
                    position: 'absolute',
                    left: '0px',
                    top: `0px`,
                    color: 'red',
                }
            }
        ])
    }

    componentDidMount() {
        
        this.player = new DanmukePlayer({
            width: 1000,
            height: 562,
            videoInstance: this.videoRef.current,
            currentTime: 0,
        } as any, {}, this.gDanmukes());
        this.player.addDmkLayer(new DmkLayer(AdvanceDmkTrack, {
            priority: 3,
            trackCount: 1
        }), 'AdvanceLayer')
        this.videoRef.current.onplay = () => {
            console.log('start ...')
            this.player.start();
        }
        this.videoRef.current.onpause = () => {
            this.player.stop();
        }
        this.videoRef.current.onseeked = () => {
            console.log('aaa ......')
            debugger;
            this.player.reset();
        }
    }

    render() {
        return (
            <div className='danmuke-player-demo'>
                <div className='btn-paly-advance-wrapper'>
                    <button className='btn-paly-advance' disabled={this.state.disabled} onClick={this.palyAdvance.bind(this)}>播放高级弹幕</button>

                </div>
                <div className='video-wrapper'>
                    <video src="najimi.mp4" ref={this.videoRef} controls={true}></video>
                </div>
                <div className='send-danmuke'>
                    <div className='normal-danmuke'>
                        <input type="text" ref={this.normalDanmukeRef} />
                        <button onClick={this.sendNormalDanmuke.bind(this)}>发送普通弹幕</button>
                    </div>
                    <div className='advance-danmuke'>
                        <input type="text" ref={this.advanceDanmukeRef} />
                        <button onClick={this.sendAdvanceDanmuke.bind(this)}>发送高级弹幕</button>
                    </div>
                </div>
            </div>  
            
        )
    }
}
