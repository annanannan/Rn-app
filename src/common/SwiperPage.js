import React,{Component} from 'react';
import {View,Text,StyleSheet, Image, AsyncStorage, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
export default class Doc extends Component {
    start = () => {  //子组件修改父组件的数据 实现跳转  async 同步
        console.log('start');
        AsyncStorage.setItem('isInstall','false',()=>{
            console.log('after end');
            this.props.afterInstall();
        });
        
    };
    render() {
        
        return (          
            <View style={{flex:1}}>
                <Swiper style={styles.wrapper} showsButtons={false}>
                    <View style={styles.slide1}>                        
                        <Image style={styles.img} source={require('../images/yindao1.jpg')} />
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../images/yindao2.jpg')} />
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../images/yindao3.jpg')} />
                        <TouchableOpacity onPress={this.start} style={styles.start}><Text style={styles.startxt}>立即体验</Text></TouchableOpacity>
                    </View>
                </Swiper>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    // wrapper:{
    //     flex:1
    // },
    img:{
        width:'100%',
        height:'100%'
    },
    slide1:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    start:{
        position: 'absolute',
        bottom: 150,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 20,
        opacity:0.7
    },
    startxt:{
        color:'#fff',
        fontSize:16
    }
});
