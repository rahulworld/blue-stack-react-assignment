import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import { getEventData } from '../actions';
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
      modalData: {},
    };
  }

  componentDidMount() {
    this.props.getEventData(this.state.eventType);
  }

    handleHideModal(){
        this.setState({showModal: false})
    }

    handleShowModal(data){
        this.setState({showModal: true, modalData: data})
    }

  renderEventType(type){
    this.setState({eventType: type});
    this.props.getEventData(type);
  }


  render() {
    const { eventsData } = this.props;
    const { eventType, modalData } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
            <p className="mt-4 mb-4 sub-header-color">Manage Campaigns</p>
            <Modal visible={this.state.showModal} width="400" height="383" effect="fadeInUp" onClickAway={() => this.handleHideModal()}>
                <div className="m-3 ml-5">
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
                                    <div onClick={() => this.handleShowModal(event)}> <img className="mr-1" src={Price} width="20" height="20" /> View Pricing</div>
                                </td>
                                <td>CSV</td>
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

export default connect(mapStateToProps, { getEventData })(Home);
