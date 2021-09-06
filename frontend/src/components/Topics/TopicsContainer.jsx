import { connect } from 'react-redux';
import Topics from './Topics';




const mapStateToProps = (state) => {

   return {
      
      topics: state.topics.topics

   };
};

const mapDispatchToProps = (dispatch) => {
   
    return {};

};

export default connect(mapStateToProps, mapDispatchToProps) (Topics);

