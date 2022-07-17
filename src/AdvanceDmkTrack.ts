import { Danmuke } from 'danmuke-player';
import { DmkCtrl } from 'danmuke-player';
import { DmkLayer } from 'danmuke-player';
import { DmkTrack } from 'danmuke-player';
import { AdvanceDanmuke } from './AdvanceDanmuke';
 
export class AdvanceDmkTrack extends DmkTrack {
    constructor(level) {
        super(level)
    }

    init(dmkLayer: DmkLayer, ctr: DmkCtrl) {

    }

    isCanPlay() {
        return !(this.getDmkQueue() as Array<AdvanceDanmuke>).find(dmk => dmk.isCanPlay && dmk.getCurPos().top < 50)
    }

    getDmkInstance(dmkData: any, ctr: DmkCtrl) {
        return new AdvanceDanmuke(dmkData, this, ctr);
    }

    isCanIn(dmkData: any, ctr: DmkCtrl): boolean {
        return true;
    }

    isCanOut(dmk: Danmuke): boolean {
        return dmk.isDead();
    }
}