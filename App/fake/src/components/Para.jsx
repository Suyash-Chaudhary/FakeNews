import "../static/css/para.css";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const getColor = (value) => {
    if(value>=60) return {textColor: '#ffffff', pathColor: '#4EF556'}
    else if(value>=30) return {textColor: '#ffffff', pathColor: '#F6B52D'}
    else return {textColor: '#ffffff', pathColor: '#FF251B'}
}

const Para = (props) => {
    const {text, score} = props;
    const styles = buildStyles({
        textSize: '16px',
        backgroundColor: '#434343',
        trailColor: '#434343',
        ...getColor(Math.round(100*score))
    })

    return ( 
        <div className="para-container">
            <div className="paragraph">{text}</div>
            <div className="score" style={{ width: 150, height: 150 }}>
                <CircularProgressbar 
                    value={score*100} 
                    text={`${Math.round(score*100)}%\nReal`} 
                    styles={styles}
                />
             </div>
        </div>
    );
}
 
export default Para;