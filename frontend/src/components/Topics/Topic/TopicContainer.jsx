import { connect } from 'react-redux';
import { setIdForMapingAC } from '../../../redux/idForMapingReducer';
import Topic from './Topic';




// const mapStateToProps = (state) => {
//    return {
//       idForMaping: state.idForMaping.idForMaping,
//    }
// };

const mapDispatchToProps = (dispatch) => {
    return {

      setIdForMaping: (IdForMaping) => {
          dispatch(setIdForMapingAC (IdForMaping));
      }
   }
}

export default connect(null, mapDispatchToProps) (Topic);

