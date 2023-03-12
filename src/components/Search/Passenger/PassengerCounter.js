
import usePassengerStyles from "./PassengerStyles";

const PassengerCounter = ({ title, info, passenger, setPassenger, passengerType }) => {
  const classes = usePassengerStyles();


  const decrease = ()=>{

    switch(passengerType){
      case "adult":
        setPassenger({ ...passenger, adult : passenger.adult + 1});
        break;
      case "child":
        setPassenger({...passenger, child : passenger.child + 1});
        break;
      case "baby":
        setPassenger({...passenger, baby : passenger.baby + 1});
        break;
      case "student":
        setPassenger({ ...passenger, student : passenger.student + 1});
        break;
      default:
        break;
    }
  }

  const increase = ()=>{
      switch(passengerType){
        case "adult":
          if(passenger.adult > 1){
            setPassenger({...passenger, adult: passenger.adult - 1});
          }
          break;
        case "child":
          if(passenger.child > 0){
            setPassenger({...passenger, child: passenger.child - 1});
          }
          
          break;
        case "baby":
          if(passenger.baby > 0){
            setPassenger({...passenger, baby: passenger.baby - 1});
          }
          
          break;
        case "student":
          if(passenger.student > 0){
            setPassenger({...passenger, student: passenger.student - 1});
          }
          
          break;
        default:
          break;
      }
  }

  return (
    <>
      <div className={classes.passengerCounter}>
        <div>
          <div className={classes.passengerCounterType}>{title}</div>
          <div className={classes.passengerCounterInfo}>{info}</div>
        </div>
        <div className={classes.passengerCounterWrapper}>
          <span className={classes.decrease} onClick={()=> increase()}> - </span>
          <span className={classes.passengerCounterNumber}>
            {
              (passengerType === "adult") && passenger.adult
              
            }
            {
              (passengerType === "child") && passenger.child
              
            }
            {
              (passengerType === "baby") && passenger.baby
              
            }
            {
              (passengerType === "student") && passenger.student
              
            }
          </span>
          <span className={classes.increase} onClick={()=> decrease()}>+</span>
        </div>
      </div>
    </>
  );
};

export default PassengerCounter;
