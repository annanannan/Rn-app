import React, {Component} from 'react';
import {View, Text, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';
import { Icon,ActivityIndicator } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';


export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isLoading:false,
            islogin:false,
        }
    }
    setusername = (text) => {
        console.log('设置用户名',text);
        this.setState({username:text})
    }
    setpwd = (text) => {
        console.log('设置密码',text);
        this.setState({pwd:text})
    }
    register = () => {
        var u=false,p=false;
        if(this.state.username !== '' && this.state.pwd != ''){
            this.setState({
                isLoading:true
            });

            myFetch.post('/register',{
                username:this.state.username,
                pwd:this.state.pwd}
            ).then(res=>{
                console.log(res.desc);
                this.setState({
                    isLoading:false
                });
                if(res.desc==='ok'){
                    AsyncStorage.setItem('uname',this.state.username)
                    .then(u=true);
                    AsyncStorage.setItem('upwd',this.state.pwd)
                    .then(()=>{
                        p=true;
                        if(u&&p){
                            this.setState({
                                islogin:true
                            });
                            setTimeout(function(){
                                Actions.login();
                            },1000);
                        }
                        
                    });
                }            
            });
        }else{
            console.log('注册为空');
        }
            
    }
    
    render() {
        
        return (          
            <View style={{flex: 1,marginTop:50}}>
                <View style={{ alignItems: 'center'}}>
                    <View
                    style={{
                    width: '80%',
                    marginRight: 10,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 20,
                    }}>
                        <TextInput placeholder="请输入用户名" 
                        style={{fontSize:20}}
                        onChangeText={this.setusername}
                        />
                    </View>
                    <View
                    style={{
                    width: '80%',
                    marginRight: 10,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 20,
                    }}>
                        <TextInput style={{fontSize:20}}
                        onChangeText={this.setpwd}
                        placeholder="请设置密码" 
                        secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity 
                    style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: 'red',
                    marginTop: 30,
                    borderRadius:25,
                    alignItems: 'center',
                    justifyContent: 'center'}}
                    onPress={this.register}>
                        <Text style={{color:'white',fontSize:16}}>注册</Text>
                    </TouchableOpacity>
                    
                </View>
                {
                    this.state.isLoading
                    ?<View style={{marginTop:50}}>
                        <ActivityIndicator text="正在注册" color="red"/>
                    </View>
                    :null
                }
                {
                    this.state.islogin
                    ?<View style={{marginTop:50,alignItems:'center'}}>
                        <Text>注册成功!</Text>
                    </View>
                    :null
                }
            </View>
        )
    }
}
