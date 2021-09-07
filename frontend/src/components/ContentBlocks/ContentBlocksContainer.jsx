import { connect } from 'react-redux';
import ContentBlocks from './ContentBlocks';




const mapStateToProps = (state) => {

   return {
      
      contentBlocks: state.contentBlocks.contentBlocks

   };
};

const mapDispatchToProps = (dispatch) => {
   
    return {};

};

export default connect(mapStateToProps, mapDispatchToProps) (ContentBlocks);

