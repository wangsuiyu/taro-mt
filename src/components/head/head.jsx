import Taro,{ Component } from "@tarojs/taro"
import { View , Text, Image } from "@tarojs/components"
import Top from "./top";
import Activity from "./activity";
import "./head.less"

export default class Head extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            comment:["味道赞","分量足","主食不错"]
        }
    }
    render(){
        let {comment} = this.state
        if(!comment){
            return
        }
        return(
            <View className="head">
                <Top />
               <View className="content">
                 <View>
                   <Image className="img" src={require('../../assets/title.png')} />
                 </View>
                 <View className="text">
                    <View className="text1">川湘居</View>
                    <View className="text2">欢迎光临，很高兴为你服务</View>
                    <View>
                        {
                           comment.map((item,index)=><Text className="text3" key={index}>{item}</Text>) 
                        }
                    </View>
                 </View>
               </View>
               <Activity />
            </View>
        )
    }
}