import { connect } from 'react-redux';
import SubTopics from './SubTopics';




const mapStateToProps = (state) => {

   return {
      idForMaping: state.idForMaping.idForMaping,
      subtopics: state.subtopics.subtopics
   }
};

const mapDispatchToProps = (dispatch) => {

   return {};
};

export default connect(mapStateToProps, mapDispatchToProps) (SubTopics);

