import { connect } from 'react-redux';
import SubTopics from './SubTopics';




const mapStateToProps = (state) => { 
   return {
      idForMaping: state.idForMaping.idForMaping
   }
 };

// const mapDispatchToProps = (dispatch) => {
//     return {

//       changeSwitchNumber: (switchCaseNumber) => {
//           dispatch(changeSwitchCaseAC(switchCaseNumber));
//        }
      
//       }
//     }

export default connect(mapStateToProps, null) (SubTopics);

