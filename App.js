import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View, Image, TextInput
} from 'react-native';





export default class App extends Component{
  render() {
    return(
      <View style={{ flex:1}}>
        <View style={{flex:1, backgroundColor:'white', }}>
        {/* search bar */}
          <View style={{marginHorizontal:17, flexDirection:'row', paddingTop:15}}>
            <View style={{position:'relative', flex:1}}>
              <TextInput placeholder="nadia sang ratu kodok" style={{borderWidth:1, borderColor:'#e8e8e8', borderRadius:25, height:40, fontSize:13, paddingLeft:45, paddingRight:20, backgroundColor:'white', marginRight:18}}/>
              <Image source={require('./icon/search.png')} style={{position:"absolute", top:5, left:12}}/>
            </View>
            <View style={{width: 35, alignItems:'center', justifyContent:'center'}}>
              <Image source={require('./icon/promo.png')}/>
            </View>
          </View>
          <View style={{marginHorizontal:17, marginTop:8}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#2c5fb8', borderTopLeftRadius:4, borderTopRightRadius:4, padding:14}}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Rp.50000</Text>

            </View>
            <View style={{flexDirection:'row', paddingTop:20, paddingBottom:14, backgroundColor:'#2f65bd', borderBottomLeftRadius:14, borderBottomRightRadius:14}}>
              <View style={{flex:1,alignItems: 'center', justifyContent:"center"}}>
                <Image source={require('./icon/pay.png')}/>
                <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:15}}>Pay</Text>
              </View>
              <View style={{flex:1,alignItems: 'center', justifyContent:"center"}}>
                <Image source={require('./icon/nearby.png')}/>
                <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:15}}>Nearby</Text>
              </View>
              <View style={{flex:1,alignItems: 'center', justifyContent:"center"}}>
                <Image source={require('./icon/topup.png')}/>
                <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:15}}>Topup</Text>
              </View>
              <View style={{flex:1,alignItems: 'center', justifyContent:"center"}}>
                <Image source={require('./icon/more.png')}/>
                <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:15}}>More</Text>
              </View>
            </View>
          </View>
        {/* main feature */}
        <View style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal:0, marginTop:18}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', marginBottom:18}}>
            
            <View style={{backgroundColor:'green', width:`${100/4}%`, alignItems:'center'}}>
              <View style={{width:58, height:58, borderWidth:1, borderColor:'#efefef', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./icon/go-ride.png')}/>
              </View>
              <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center0 marginTop:6}}>Go-ride</Text>
            </View>
            
            <View style={{backgroundColor:'green', width:`${100/4}%`, alignItems:'center'}}>
              <View style={{width:58, height:58, borderWidth:1, borderColor:'#efefef', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./icon/go-car.png')}/>
              </View>
              <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center0 marginTop:6}}>Go-car</Text>
            </View>
            
            <View style={{backgroundColor:'green', width:`${100/4}%`, alignItems:'center'}}>
              <View style={{width:58, height:58, borderWidth:1, borderColor:'#efefef', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./icon/go-bluebird.png')}/>
              </View>
              <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center0 marginTop:6}}>Go-bluebird</Text>
            </View>
            
            <View style={{backgroundColor:'green', width:`${100/4}%`, alignItems:'center'}}>
              <View style={{width:58, height:58, borderWidth:1, borderColor:'#efefef', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./icon/go-send.png')}/>
              </View>
              <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Go-send</Text>
            </View>
          <0iew>
          <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
            
            <View style={{backgroundColor:'green', width:`${100/4}%`, alignItems:'center'}}>
              <View style={{width:58, height:58, borderWidth:1, borderColor:'#efefef', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./icon/go-deals.png')}/>
              </View>
              <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center0 marginTop:6}}>Go-deals</Text>
            </View>
            
            <View style={{backgroundColor:'green', width:`${100/4}%`, alignItems:'center'}}>
              <View style={{width:58, height:58, borderWidth:1, borderColor:'#efefef', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./icon/go-pulsa.png')}/>
              </View>
              <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center0 marginTop:6}}>Go-pulsa</Text>
            </View>
            
            <View style={{backgroundColor:'green', width:`${100/4}%`, alignItems:'center'}}>
              <View style={{width:58, height:58, borderWidth:1, borderColor:'#efefef', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./icon/go-food.png')}/>
              </View>
              <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center0 marginTop:6}}>Go-food</Text>
            </View>
            
            <View style={{backgroundColor:'green', width:`${100/4}%`, alignItems:'center'}}>
              <View style={{width:58, height:58, borderWidth:1, borderColor:'#efefef', borderRadius:18, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./icon/go-more.png')}/>
              </View>
              <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>more</Text>
            </View>

          </View>
        </View>
        </View>
        <View style={{height:54, flexDirection:'row', backgroundColor:'white'}}>
          <View style={{flex:1, alignItems:'center', justifyContent: 'center',}}>
              <Image style={{width:26, height:26}} source={require('./icon/home-active.png')}></Image>
            <Text style={{fontSize:10, color:'#545454', marginTop:4, color:'#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent: 'center',}}>
              <Image style={{width:26, height:26}} source={require('./icon/order.png')}></Image>
            <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Orders</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent: 'center',}}>
              <Image style={{width:26, height:26}} source={require('./icon/help.png')}></Image>
            <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Help</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent: 'center',}}>
              <Image style={{width:26, height:26}} source={require('./icon/inbox.png')}></Image>
            <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Inbox</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent: 'center',}}>
              <Image style={{width:26, height:26}} source={require('./icon/account.png')}></Image>
            <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}