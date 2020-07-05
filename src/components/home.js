import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import DateTimePicker from 'react-datetime-picker';
import { getEventData, setEventData, scheduleEvent } from '../actions';
import { Header } from './common/header';
import { EVENT_TYPE, getDiffInDays } from '../shared/constants';
import imageIcon from "../assets/images/logo.png";
import Price from "../assets/images/Price.png";
import Report from "../assets/images/statistics-report.png";
import Calender from "../assets/images/calendar.png";
import Bitmap from "../assets/images/Bitmap.png";
import FileImage from "../assets/images/file.png";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventType: Object.keys(EVENT_TYPE)[0],
      showModal: false,
      scheduleModel: false,
      modalData: {},
      date: new Date(),
    };
  }

    componentDidMount() {
        this.props.setEventData(this.state.eventType);
    }

    handleHideModal(){
        const {modalData, date, scheduleModel, eventType} = this.state;
        this.setState({showModal: false});
        if(scheduleModel) {
            this.props.scheduleEvent(modalData.id, date).then(() => {
                this.props.getEventData(eventType);
            });
        }
    }

    handleShowModal(data, isScheduleModel){
        this.setState({showModal: true, modalData: data, scheduleModel: isScheduleModel});
    }

    renderEventType(type){
        this.setState({eventType: type});
        this.props.getEventData(type);
    }

    onChange = date => {
      this.setState({ date });
    };

  render() {
    const { eventsData } = this.props;
    const { eventType, modalData, scheduleModel } = this.state;
    const pricingModelView = (
        modalData && <div className="m-3 ml-5">
            <div className="row">
                <img className="mr-2" src={Bitmap} width="137" height="137" />
                <div className="flex-end">
                    <p className="m-0 p-0" style={{ fontSize: 16 }}>{modalData.name}</p>
                    <p className="m-0 p-0" style={{ fontSize: 14, color: '#9CA2B7' }}>{modalData.region}</p>
                </div>
            </div>
            <p className="mt-2" style={{ fontSize: 20, fontWeight: 'bold' }}>Pricing</p>
            <div className="mb-2">
                <div style={{ fontSize: 18, fontWeight: 'bold' }}>1 Year ------ $ {modalData.price}</div>
            </div>
            <div type="button" className="btn btn-primary" href="javascript:void(0);" onClick={() => this.handleHideModal()}>Close</div>
        </div>
    );
    const scheduleModelView = (
        modalData && <div className="m-3 ml-5">
            <div className="row">
                <img className="mr-2" src={Bitmap} width="137" height="137" />
                <div className="flex-end">
                    <p className="m-0 p-0" style={{ fontSize: 16 }}>{modalData.name}</p>
                    <p className="m-0 p-0" style={{ fontSize: 14, color: '#9CA2B7' }}>{modalData.region}</p>
                </div>
            </div>
            <p className="mt-2" style={{ fontSize: 20, fontWeight: 'bold' }}>Schedule Time: {new Date(modalData.createdOn).toDateString()}</p>
            <div className="mb-2">
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
            />
            </div>
            <div type="button" className="btn btn-primary" href="javascript:void(0);" onClick={() => this.handleHideModal()}>Close</div>
        </div>
    );
    return (
      <div>
        <Header />
        <div className="container">
            <p className="mt-4 mb-4 sub-header-color">Manage Campaigns</p>
            <Modal visible={this.state.showModal} width="400" height="383" effect="fadeInUp" onClickAway={() => this.handleHideModal()}>
                {scheduleModel ? scheduleModelView : pricingModelView}
            </Modal>
            <ul class="nav nav-pills" style={{ marginBottom: 40, borderBottom: '2px solid #F1F1F4' }}>
                { Object.entries(EVENT_TYPE).map((entry) =>
                    <li class={`nav-item ${eventType === entry[0] ? "active-nav-item" : ""}`} onClick={() => this.renderEventType(entry[0])}>
                        <a class="nav-link">{entry[1]}</a>
                    </li>) }
            </ul>

            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">DATE</th>
                        <th scope="col">CAMPAIGNS</th>
                        <th scope="col">VIEW</th>
                        <th scope="col">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventsData.map((event) => 
                            <tr>
                                <td>
                                    <p className="m-0 p-0" style={{ fontSize: 16 }}>{new Date(event.createdOn).toDateString()}</p>
                                    <p className="m-0 p-0" style={{ fontSize: 14, color: '#9CA2B7' }}>{getDiffInDays(event.createdOn)}</p>
                                </td>
                                <td>
                                    <div className="row">
                                        <img className="mr-2" src={Bitmap} width="40" height="40" />
                                        <div>
                                            <p className="m-0 p-0" style={{ fontSize: 16 }}>{event.name}</p>
                                            <p className="m-0 p-0" style={{ fontSize: 14, color: '#9CA2B7' }}>{event.region}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div style={{ cursor: 'pointer' }} className="row td-text d-flex align-items-center" onClick={() => this.handleShowModal(event, false)}>
                                        <img className="mr-1" src={Price} width="24" height="24" />
                                        <span className="d-none d-md-block">View Pricing</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="row">
                                        <div style={{ cursor: 'pointer' }} className="col-3 td-text d-flex align-items-center">
                                            <img className="mr-2" src={FileImage} width="19" height="24" />
                                            <span className="d-none d-md-block">CSV</span>
                                        </div>
                                        <div style={{ cursor: 'pointer' }} className="col-3 td-text d-flex align-items-center">
                                            <img className="mr-2" src={Report} width="22" height="24" />
                                            <span className="d-none d-md-block">Report</span>
                                        </div>
                                        <div style={{ cursor: 'pointer' }} className="col-4 td-text d-flex align-items-center" onClick={() => this.handleShowModal(event, true)}>
                                            <img className="mr-2" src={Calender} width="24" height="24" />
                                            <div className="d-none d-md-block">Schedule Again</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({eventsDetail}) {
  return {
    eventsData: eventsDetail.eventData,
  };
}

export default connect(mapStateToProps, { setEventData, getEventData, scheduleEvent })(Home);
