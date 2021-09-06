import { connect } from 'react-redux';
import { setIdForMapingAC } from '../../../redux/idForMapingReducer';
import SubTopic from './SubTopic';




const mapStateToProps = (state) => {
   return {}
   
};

const mapDispatchToProps = (dispatch) => {
    return {

      setIdForMaping: (IdForMaping) => {
          dispatch(setIdForMapingAC (IdForMaping));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (SubTopic);

