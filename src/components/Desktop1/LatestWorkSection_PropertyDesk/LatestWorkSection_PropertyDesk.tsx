import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { WorkCard } from '../WorkCard/WorkCard';
import classes from './LatestWorkSection_PropertyDesk.module.css';

interface Props {
  className?: string;
  classes?: {
    image?: string;
    workCard?: string;
    image2?: string;
    stripe1?: string;
    image4?: string;
    image5?: string;
    workCards?: string;
    root?: string;
  };
  hide?: {
    workCard?: boolean;
    workCard2?: boolean;
  };
  text?: {
    myLatestWork?: ReactNode;
    projectTitle?: ReactNode;
    uIArtDrection?: ReactNode;
    projectTitle2?: ReactNode;
    uIArtDrection2?: ReactNode;
    projectTitle3?: ReactNode;
    uIArtDrection3?: ReactNode;
    projectTitle4?: ReactNode;
    uIArtDrection4?: ReactNode;
  };
}
/* @figmaId 33:1331 */
export const LatestWorkSection_PropertyDesk: FC<Props> = memo(function LatestWorkSection_PropertyDesk(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.myLatestWork != null ? (
        props.text?.myLatestWork
      ) : (
        <div className={classes.myLatestWork}>My latest work</div>
      )}
      <div className={`${props.classes?.workCards || ''} ${classes.workCards}`}>
        <div className={`${props.classes?.stripe1 || ''} ${classes.stripe1}`}>
          <WorkCard
            className={props.classes?.workCard || ''}
            classes={{ image: `${props.classes?.image || ''} ${classes.image}` }}
            text={{
              projectTitle: props.text?.projectTitle || <div className={classes.projectTitle}>Free Bird</div>,
              uIArtDrection: props.text?.uIArtDrection || <div className={classes.uIArtDrection}>Lynyrd Skynyrd</div>,
            }}
          />
          <WorkCard
            classes={{ image: `${props.classes?.image2 || ''} ${classes.image2}` }}
            text={{
              projectTitle: props.text?.projectTitle2 || <div className={classes.projectTitle2}>Purple Haze</div>,
              uIArtDrection: props.text?.uIArtDrection2 || <div className={classes.uIArtDrection2}>Jimi Hendrix</div>,
            }}
          />
          {!props.hide?.workCard && (
            <WorkCard
              classes={{ image: classes.image3 }}
              text={{
                projectTitle: <div className={classes.projectTitle3}>You Really Got Me</div>,
                uIArtDrection: <div className={classes.uIArtDrection3}>The Kinks</div>,
              }}
            />
          )}
        </div>
        <div className={classes.stripe2}>
          <WorkCard
            classes={{ image: `${props.classes?.image4 || ''} ${classes.image4}` }}
            text={{
              projectTitle: props.text?.projectTitle3 || <div className={classes.projectTitle4}>American Girl</div>,
              uIArtDrection: props.text?.uIArtDrection3 || <div className={classes.uIArtDrection4}>Tom Petty</div>,
            }}
          />
          <WorkCard
            classes={{ image: `${props.classes?.image5 || ''} ${classes.image5}` }}
            text={{
              projectTitle: props.text?.projectTitle4 || <div className={classes.projectTitle5}>Whole Lotta Love</div>,
              uIArtDrection: props.text?.uIArtDrection4 || <div className={classes.uIArtDrection5}>Led Zeppelin</div>,
            }}
          />
          {!props.hide?.workCard2 && (
            <WorkCard
              classes={{ image: classes.image6 }}
              text={{
                projectTitle: <div className={classes.projectTitle6}>Under Pressure </div>,
                uIArtDrection: <div className={classes.uIArtDrection6}>Queen</div>,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
});
