import "../static/css/overall.css";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const getColor = (value) => {
    if(value>=60) return {textColor: '#ffffff', pathColor: '#4EF556'}
    else if(value>=30) return {textColor: '#ffffff', pathColor: '#F6B52D'}
    else return {textColor: '#ffffff', pathColor: '#FF251B'}
}

const Overall = (props) => {
    const {score} = props;
    const styles = buildStyles({
    textSize: '16px',
    backgroundColor: '#3e98c7',
    trailColor: '#1A1A1A',
    ...getColor(Math.round(100*score))
    })
    return (
        <div className="overall-container">
             <div className="heading"> The article is ... </div>
             <div style={{ width: 150, height: 150 }}>
                <CircularProgressbar 
                    value={score*100} 
                    text={`${Math.round(score*100)}%\nReal`} 
                    styles={styles}
                />
             </div>
        </div> 
    );
}
 
export default Overall;