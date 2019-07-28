import Taro,{ Component } from "@tarojs/taro"
import { View , Text, Image } from "@tarojs/components"
import './activity.less'

export default class Activity extends Component {
   constructor(){
       super(...arguments)
       this.state = {
           activity:[
               {
                type:'cut',
                full:[{total:48,cut:10},{total:60,cut:12},{total:88,cut:26}]
               }
           ]
       }
   }
   getName(type){
       if(type=='cut'){
           return '减'
       }
   }
   getLine(arr){
    return arr.map((item,index)=>`满${item.total}减${item.cut}`).join(';')
   }
   render(){
       let {activity} = this.state
       return(
          <View className="activity">
              <View className="cut">{this.getName(activity[0].type)}</View>
              <Text className="fullcut">
                  {
                      this.getLine(activity[0].full)
                  }
              </Text>
              <View className="number">{activity.length}个活动</View>
          </View> 
       )
   }
}