import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Ellipse693Icon } from './Ellipse693Icon.js';
import { Ellipse694Icon } from './Ellipse694Icon.js';
import { Ellipse695Icon } from './Ellipse695Icon.js';
import { LatestWorkSection_PropertyDesk } from './LatestWorkSection_PropertyDesk/LatestWorkSection_PropertyDesk';

interface Props {
  className?: string;
  hide?: {
    workCard?: boolean;
    workCard2?: boolean;
  };
}
/* @figmaId 606:756 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.aseefAliHasan}>Aseef Ali Hasan</div>
      <div className={classes.about}>about</div>
      <div className={classes.blog}>blog</div>
      <div className={classes.contact}>contact</div>
      <div className={classes.projects}>projects</div>
      <div className={classes.image1}></div>
      <div className={classes.aboutMeMyNameIsAseefAliHasanIA}>
        <div className={classes.textBlock}>about me</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label4}>
              My name is Aseef Ali Hasan. I am a first year CS + Stats student at UofT
            </span>
          </p>
        </div>
        <div className={classes.textBlock3}>I am super duper cool and I am looking for internships :)</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label5}>Currently a Web Developer at </span>
            <span className={classes.label6}>CouBon</span>
            <span className={classes.label7}> and Career Prep Fellow at </span>
            <span className={classes.label8}>Uber</span>
          </p>
        </div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper4}></p>
        </div>
        <div className={classes.textBlock7}>
          <p className={classes.labelWrapper5}>
            <span className={classes.label9}>check out my </span>
            <span className={classes.label10}>resume, GitHub, LinkedIn</span>
          </p>
        </div>
      </div>
      <LatestWorkSection_PropertyDesk
        className={classes.latestWorkSection}
        classes={{
          image: classes.image,
          workCard: classes.workCard,
          image2: classes.image2,
          stripe1: classes.stripe1,
          image4: classes.image3,
          image5: classes.image4,
          workCards: classes.workCards,
        }}
        hide={{
          workCard: true,
          workCard2: true,
        }}
        text={{
          myLatestWork: <div className={classes.myLatestWork}>projects</div>,
          projectTitle: <div className={classes.projectTitle}>UNICEF ML Prediction Models</div>,
          uIArtDrection: (
            <div className={classes.uIArtDrection}>Python, Pandas, Plotly, NumPy, SciPy, Scikit-Learn</div>
          ),
          projectTitle2: (
            <div className={classes.projectTitle2}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Halal </span>
                <span className={classes.label2}>Restaurant</span>
                <span className={classes.label3}> Finder</span>
              </p>
            </div>
          ),
          uIArtDrection2: <div className={classes.uIArtDrection2}>Python, Yelp Fusion API, Tkinter</div>,
          projectTitle3: <div className={classes.projectTitle3}>COVID-19 Pandemic Analysis</div>,
          uIArtDrection3: <div className={classes.uIArtDrection3}> Python, Pandas, Plotly, Excel</div>,
          projectTitle4: <div className={classes.projectTitle4}>University Application Helper</div>,
          uIArtDrection4: <div className={classes.uIArtDrection4}>Java, JOptionPane</div>,
        }}
      />
      <div className={classes.myTechStackPythonJavaSQLHTMLCS}>
        <div className={classes.textBlock8}>my tech stack</div>
        <div className={classes.textBlock9}>
          <p></p>
        </div>
        <div className={classes.textBlock10}>
          <p className={classes.labelWrapper6}>
            <span className={classes.label11}>Python, Java, SQL, HTML, CSS, JavaScript, TypeScript</span>
          </p>
        </div>
        <div className={classes.textBlock11}>
          Node.js, Express.js, AngularJS, Pandas, Plotly, NumPy, SciPy, Scikit-Learn, Tkinter, JOptionPane, Django
        </div>
        <div className={classes.textBlock12}>
          Firebase, Git, GitHub, VS Code, Jupyter, Linux, Windows, Mac OS, MS Office, Excel (VBA, Pivot Tables), Power
          BI
        </div>
      </div>
      <div className={classes.rectangle3810}></div>
      <div className={classes.image22}></div>
      <div className={classes.image32}></div>
      <div className={classes.blogILikeMoviesThinkingAboutTh}>
        <div className={classes.textBlock13}>blog</div>
        <div className={classes.textBlock14}>
          <p></p>
        </div>
        <div className={classes.textBlock15}>
          <p className={classes.labelWrapper7}>
            <span className={classes.label12}>
              i like movies, thinking about things, and sharing my thoughts, so this is where i share that!
            </span>
          </p>
        </div>
      </div>
      <div className={classes.image5}></div>
      <div className={classes.whyHer2013IsTheBestMovieEver}>why Her (2013) is the best movie ever</div>
      <div className={classes.yeahISaidItIMakeTheRules}>yeah I said it, I make the rules</div>
      <div className={classes.whyItsReallyHardToGetAnInterns}>why its really hard to get an internship now</div>
      <div className={classes.iHavenTGottenOneYet}>I haven’t gotten one yet...</div>
      <div className={classes.image42}></div>
      <div className={classes.ellipse693}>
        <Ellipse693Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse695}>
        <Ellipse695Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse694}>
        <Ellipse694Icon className={classes.icon3} />
      </div>
    </div>
  );
});
