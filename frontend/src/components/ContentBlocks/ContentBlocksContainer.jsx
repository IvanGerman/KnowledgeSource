import { connect } from 'react-redux';
import ContentBlocks from './ContentBlocks';




const mapStateToProps = (state) => {

   return {
      idForMaping: state.idForMaping.idForMaping,
      contentBlocks: state.contentBlocks.contentBlocks

   };
};

const mapDispatchToProps = (dispatch) => {
   
    return {};

};

export default connect(mapStateToProps, mapDispatchToProps) (ContentBlocks);

