import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    ScrollView
} from 'react-native';
const {width} = Dimensions.get('window');
const s = width / 640;

const goods = [
    {
        title: '居家维修保养',
        img1: require('../images/tu1.png'),
        img2: require('../images/tu5.png')
    },
    {
        title: '住宿优惠',
        img1: require('../images/tu2.png'),
        img2: require('../images/tu5.png')
    },
    {
        title: '出行接送',
        img1: require('../images/tu3.png'),
        img2: require('../images/tu5.png')
    },
    {
        title: 'E组活动',
        img1: require('../images/tu4.png'),
        img2: require('../images/tu5.png')
    }
]

export default class Test extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.header}>
                    <View style={styles.search}>
            <Image source={require('../images/a1.png')}></Image>
                 </View>
            </View>
            <Image source={require('../images/luobo.png')}></Image>
                <FlatList 
                    style={{backgroundColor: '#F4F4F4'}}
                    data={goods}
                    numColumns={1}
                    renderItem={({item})=>(
                        <View style={styles.good}>
                            <Image 
                                resizeMode="contain"
                                source={item.img1}
                                style={{height:105*s,width:95*s}}
                            />
                            <Text
                                style={{marginLeft: 120*s,marginTop: -70*s,fontSize:20*s}}
                            >{item.title}</Text>
                            <Image 
                                resizeMode="contain"
                                source={item.img2}
                                style={{height:105*s,marginTop: -50*s,width:95*s,marginLeft:520*s}}
                            />
                        </View>
                    )}
                />
            <View style={styles.footer}>
                <Text style={{
                    
                    textAlign:'center',
                    fontSize:35*s,
                    color:'white',
                    top:15*s
                    }}>
                    发布需求
                 </Text>
            </View>
           </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 80*s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        justifyContent: 'center',
        backgroundColor: '#f23030'
    },
    footer:{
        height: 80*s,
        width: 550*s,
        backgroundColor: 'red',
        marginLeft: 50*s,
        marginTop: 30*s,
        borderRadius: 15,
    },
    nav:{
        height: 73*s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    good:{
        width: 650*s,
        height: 110*s,
        backgroundColor: '#fff',
        marginTop: 12*s,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
    }
})

