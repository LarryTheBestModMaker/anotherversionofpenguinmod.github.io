import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SplashModalComponent from '../components/splash-modal/splash-modal.jsx';
import {closeSplashModal} from '../reducers/modals';
import {activateTab, COSTUMES_TAB_INDEX} from '../reducers/editor-tab';
import {STAGE_DISPLAY_SCALE_METADATA, STAGE_DISPLAY_SIZES, STAGE_SIZE_MODES} from '../lib/layout-constants';
import {setStageSize} from '../reducers/stage-size';
import VM from 'scratch-vm';

const SplashModal = props => (
    <SplashModalComponent {...props} />
);

SplashModal.propTypes = {
    onClose: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeSplashModal()),
    onOpenPaint: () => {
        dispatch(closeSplashModal());
        dispatch(activateTab(COSTUMES_TAB_INDEX));
        // dispatch(setStageSize(STAGE_SIZE_MODES.small))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashModal);
