import { Component } from 'react'
import styles from './styles.module.scss'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import requestCall from '../../assets/icons/requestcallSmall.svg'
import GoogleMapReact from 'google-map-react';


// function Map() {

//     return (
//         <div className={styles.container}>
//           <div className={styles.wrapper}>
//               <h1 className={styles.tittle}>контакты</h1>
//               <div className={styles.number}><img src={requestCall} alt="" /><p>0 509 505 508</p></div>
//               <div className={styles.number}><img src={requestCall} alt="" /><p>0 559 505 508</p></div>
//               <p className={styles.text}>e-mail: aaastroygroup@gmail.com</p>
//               <p className={styles.text}>Адрес: Токтонолиева, 6</p>
//               <div className={styles.social}>
//                 <a href="https://www.facebook.com/aaastroygroup.kg"><img src={facebook} alt="" /></a>
//                 <a href="https://www.instagram.com/aaa.stroy.group/"><img src={instagram} alt="" /></a>
//               </div>                
//           </div>
//         </div>
//     )
// }

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 42.85131122452014,
      lng: 74.5926293846526
    },
    zoom: 11
  };
 
  render() {
    return (
      
      <div style={{ height: '733px', width: '100%' }}>
        <div className={styles.wrapper}>
                <h1 className={styles.tittle}>контакты</h1>
                <div className={styles.number}><img src={requestCall} alt="" /><p>0 509 505 508</p></div>
                <div className={styles.number}><img src={requestCall} alt="" /><p>0 559 505 508</p></div>
                <p className={styles.text}>e-mail: aaastroygroup@gmail.com</p>
                <p className={styles.text}>Адрес: Токтонолиева, 6</p>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/aaastroygroup.kg"><img src={facebook} alt="" /></a>
                  <a href="https://www.instagram.com/aaa.stroy.group/"><img src={instagram} alt="" /></a>
                </div>                
            </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDi7lo8U2k1vJaqWZpbaPN9JCTWk-LNT90" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={42.85131122452014}
            lng={74.5926293846526}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;


// export class GoogleMap extends React.Component {

//   render() {
//     const mapStyles = {
//       width: "100%",
//       height: "733px",
//     };

//     return (
//       <div className={styles.container}>
//         <div className={styles.wrapper}>
//           <Map
//             google={this.props.google}
//             zoom={11}
//             style={mapStyles}
//             initialCenter={{ lat: 42.85131122452014, lng: 74.5926293846526 }}
//           >
//             <Marker position={{ lat: 42.85131122452014, lng: 74.5926293846526 }} />
//           </Map>
//         </div>
//       </div>
     
//     );
//   }
  
// }